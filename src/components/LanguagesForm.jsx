import { useState } from "react";

function LanguagesForm({languages, setCv}){
    const [newLanguage, setNewLanguage]= useState("");

    const handleAddLanguage=(e)=>{
        e.preventDefault(); 

        const text= newLanguage.trim();
        if (!text) return;
        setCv((prevCv)=>({
            ...prevCv, languages: [...prevCv.languages || [], text ],
        }));
        setNewLanguage("");
    }
    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
        e.preventDefault();
        handleAddLanguage(e);
    }
  };

    const handleDeleteLanguage=(languageToRemove)=>{
        setCv((prevCv)=>({
            ...prevCv, languages: prevCv.languages.filter((l)=> l!==languageToRemove),
        }));
    }

    return (
        <section className="languages-form">
                <h2>Languages</h2>
                <label htmlFor="languages">Add a language</label>
                <input type="text" value={newLanguage} onKeyDown={handleKeyDown} onChange={(e)=>{setNewLanguage(e.target.value)}} placeholder="e.g German"/>
                <button type="button" onClick={handleAddLanguage}>Submit</button>
                <ul>
                    {languages.map(language=>{
                       return (<li key={language}>{language} <button type="button" onClick={()=>handleDeleteLanguage(language)}>Remove</button></li>)
                    })}
                </ul>
        </section>
    )
}

export default LanguagesForm;