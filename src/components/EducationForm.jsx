import { useState } from "react";   

function EducationForm({education, setCv}){
    const [formValues, setFormValues]= useState ({
        degree: "",
        institution: "",
        startYear: "",
        endYear: "",
        gpa: "",
    })

    const handleChange=(e)=>{
        const {name, value}=e.target;
        setFormValues((prev)=>({
            ...prev, [name]:value,
        }));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newValues= {...formValues, id: crypto.randomUUID()};
        setCv((prev)=>({
            ...prev, education: [
                ...(prev.education || []), newValues
            ]
        }));
        setFormValues({
            degree: "",
            institution: "",
            startYear: "",
            endYear: "",
            gpa: "",
        });
    };

    const handleDelete=(target)=>{
        if (target.degree==="" || target.institution==="") return;

        setCv((prev)=>({
            ...prev, education: prev.education.filter((e)=>e.id !== target.id)
        }));
    };

    return (
        <section className="education-form">
            <h2>Education</h2>
            <ul>
                {education.map(ed=>{
                    return <li key={ed.id} >{ed.degree} - {ed.institution} <button type="button" onClick={()=>handleDelete(ed)}>Remove</button></li>
                })}
            </ul>
            <label htmlFor="degree-form">Degree</label>
            <input type="text" name="degree" value={formValues.degree} onChange={handleChange}/>
            <label htmlFor="institution-form">Institution</label>
            <input type="text" name="institution" value={formValues.institution} onChange={handleChange} />
            <label htmlFor="startYear-education-form">Start Year</label>
            <input type="text" name="startYear" value={formValues.startYear} onChange={handleChange} />
            <label htmlFor="endYear-education-form">End Year</label>
            <input type="text" name="endYear" value={formValues.endYear} onChange={handleChange} />
            <label htmlFor="gpa-form">CGPA</label>
            <input type="text" name="gpa" value={formValues.gpa} onChange={handleChange} />
            <button type="button" onClick={handleSubmit}>Add Education</button>
        </section>
    );
}
export default EducationForm