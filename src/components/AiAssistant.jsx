import { useState } from "react";
import { marked } from "marked";

function AiAssistant({ cv }) {
    
    const [aiResponse, setAiResponse] = useState("");
    const [loading, setLoading] = useState(false);
    
    const getResponse = async () => {
        setLoading(true);
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    const prompt = `You are a professional CV reviewer and formatter. Analyze the CV provided in JSON format and return **only** the bullet-pointed suggestions for improvement.
Avoid introductions, summaries, or greetings. Start directly with the first bullet point.
- Focus on areas like skills, experience, projects, and summary.
- Suggest industry-relevant keywords and improvements.
- Ensure the identity title aligns with skills and projects.
- Keep your response short, actionable, and professional.
- Do not suggest any extra sections other than mentioned.
- Do not force improvements if CV is already good.
- If the name and data are generic, like John Doe, then it is pseudo data, suggest user to fill out the CV with personal data. 
CV data:
`;
    const userData = { ...cv };
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  { text: prompt },
                  { text: JSON.stringify(userData, null, 2) }
                ]
              }
            ]
          })
        }
      );

      const result = await response.json();
      const output = result.candidates?.[0]?.content?.parts?.[0]?.text || "No response received.";
      setAiResponse(output);
    } catch (err) {
      setAiResponse("Error fetching AI response.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ margin: "1rem 0" }}>
      <button onClick={getResponse} disabled={loading}>
        {loading ? "Generating..." : "Generate AI Summary"}
      </button>
      {aiResponse && (<div className="ai-response" dangerouslySetInnerHTML={{ __html: marked(aiResponse) }} ></div> )}
    </div>
  );
}

export default AiAssistant;
