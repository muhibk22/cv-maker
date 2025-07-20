import "../styles/Form.css";
import { useState } from "react";
import IdentityForm from "./IdentityForm";
import ContactForm from "./ContactForm";
import Summary from "./Summary";
import SkillsForm from "./SkillsForm";
import Display from "./Display";

const resumeFonts = {
  calibri: `'Calibri', sans-serif`,
  helvetica: `'Helvetica', sans-serif`,
  arial: `'Arial', sans-serif`,
  cambria: `'Cambria', serif`,
  georgia: `'Georgia', serif`,
  garamond: `'Garamond', serif`,
  timesNewRoman: `'Times New Roman', serif`,
  verdana: `'Verdana', sans-serif`,
  lato: `'Lato', sans-serif`,
  roboto: `'Roboto', sans-serif`,
};

function Form({ cv, setCv }) {
  const [fontKey, setFontKey] = useState("helvetica");

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="form-container">
        <div className="form">
          <h1>Edit Your CV</h1>
          <form>
            <label>Select Font:</label>
            <select value={fontKey} onChange={(e) => setFontKey(e.target.value)}>
              {Object.keys(resumeFonts).map((key) => (
                <option key={key} value={key}> {key.charAt(0).toUpperCase() + key.slice(1)} </option>
              ))}
            </select>
            <IdentityForm cv={cv.identity} setCv={setCv}/>
            <ContactForm cv={cv.contact} setCv={setCv} />
            <Summary cv={cv.summary} setCv={setCv}/>
            <SkillsForm skills={cv.skills} setCv={setCv}/>
          </form>
          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <button onClick={handlePrint}>Print CV</button>
          </div>
        </div>
      </div>

      <Display cv={cv} fontFamily={resumeFonts[fontKey]} />
    </>
  );
}

export default Form;
