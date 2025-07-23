import { useState } from "react";

function Summary({ summary, setCv }) {
  const [text, setText] = useState(summary || "");

  const handleChange = (e) => {
    e.preventDefault();
    const newSummary = e.target.value;
    setText(newSummary);
    setCv((prevCv) => ({
      ...prevCv,
      summary: newSummary,
    }));
  };

  const handleDelete = (e) => {
    e.preventDefault(); 
    setText(""); 
    setCv((prevCv) => {
      // eslint-disable-next-line no-unused-vars
      const {summary, ...rest } = prevCv; 
      return rest;
    });
  };

  return (
    <section className="summary">
      <textarea value={text} onChange={handleChange} placeholder="Enter your summary here" rows={4}/>
       <button onClick={handleDelete}> Delete Summary </button>
    </section>
  );
}

export default Summary;
