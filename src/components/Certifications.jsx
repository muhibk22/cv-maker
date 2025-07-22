import { useState } from "react";

function Certifictions({certifications, setCv}){
    const [newCertification, setNewCertification] = useState({
        name: "",
        year: "",
        });

    const handleChange=(e)=>{
        const {name, value}=e.target;
        setNewCertification((prev)=>({
            ...prev, [name]:value
        }));
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        const newValues= {...newCertification};
        if (newValues.name==="") return;
        setCv((prev)=>({
            ...prev, certifications: [...(prev.certifications || []), newValues],
        }));
        setNewCertification({name:"", year:""})
    }

    const handleDelete=(certification)=>{
        setCv((prev)=>({
            ...prev, certifications: prev.certifications.filter((c)=>c.name !==certification.name),
        }));
    }
    return (
        <section className="certifictions-form">
            <h2>Certifications</h2>
            <ul>
                {
                    certifications.map(certification=>{
                        return <li key={certification.name}>{certification.name} - {certification.year} <button type="button" onClick={()=>handleDelete(certification)}>Remove</button></li>
                    })
                }
            </ul>
            <label htmlFor="certification-name">Name</label>
            <input type="text" name="name" value={newCertification.name} onChange={handleChange}/>
            <label htmlFor="certification-year">Year</label>
            <input type="text" name="year" value={newCertification.year} onChange={handleChange}/>
            <button type="button" onClick={handleSubmit}>Add</button>
        </section>
    )
}

export default Certifictions;