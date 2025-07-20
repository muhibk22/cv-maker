import { useState } from "react";

function IdentityForm({identity,setCv}){
    const [formValues, setFormValues]= useState({
        name: identity?.name || "",
        title: identity?.title || "",
    })

    const handleChange =(e)=>{
        const {name, value}= e.target;

        setFormValues((prev)=>({
            ...prev, [name]: value,
        }));

        setCv((prevCv)=>({
            ...prevCv, identity: {
                ...prevCv.identity, [name]:value,
            }
        }))
    };

    return (
        <section className="identity-form">
            <h2>Identity</h2>
            <label>Name</label>
            <input type="text" name="name" value={formValues.name} onChange={handleChange}/>
            <label>Tagline/ Title</label>
            <input type="text" name="title" value={formValues.title} onChange={handleChange}/>
        </section>
    )
}

export default IdentityForm;