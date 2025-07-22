import { useState } from "react";

function SkillsForm({skills, setCv}){
    const [newSkill, setNewSkill]= useState("");

    const handleAddSkill=(e)=>{
        e.preventDefault(); 

        const text= newSkill.trim();
        if (!text) return;
        if(skills.includes(text)) return;
        setCv((prevCv)=>({
            ...prevCv, skills: [...prevCv.skills || [], text ],
        }));
        setNewSkill("");
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
        e.preventDefault();
        handleAddSkill(e);
    }
  };

    const handleDeleteSkills=(skillToRemove)=>{
        setCv((prevCv)=>({
            ...prevCv, skills: prevCv.skills.filter((s)=> s!==skillToRemove),
        }));
    }

    return (
        <section className="skills-form">
                <h2>Skills</h2>
                <ul>
                    {skills.map(skill=>{
                       return (<li key={skill}>{skill} <button type="button" onClick={()=>handleDeleteSkills(skill)}>Remove</button></li>)
                    })}
                </ul>
                <label htmlFor="skills">Add a skill</label>
                <input type="text" value={newSkill} onKeyDown={handleKeyDown} onChange={(e)=>{setNewSkill(e.target.value)}} placeholder="e.g Python"/>
                <button type="button" onClick={handleAddSkill}>Add Skill</button>
              
        </section>
    )
}

export default SkillsForm;