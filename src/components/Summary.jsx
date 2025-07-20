import { useState } from "react";

function Summary({ summary, setCv }) {
  const [text, setText] = useState("");

  const handleChange = (e) => {
    const newSummary = e.target.value;
    setText(newSummary);
    setCv((summary) => ({
      ...summary,
      summary: newSummary,
    }));
  };

  const handleDelete = (e) => {
    e.preventDefault(); 
    setText(""); 
    setCv((prevCv) => {
      const { summary, ...rest } = prevCv; 
      return rest;
    });
  };

  return (
    <section className="summary">
      <h2>Summary</h2>
      <textarea value={text} onChange={handleChange} placeholder="Enter your summary here" rows={4}/>
       <button onClick={handleDelete}> Delete Summary </button>
    </section>
  );
}

export default Summary;
