import "../styles/Form.css";
import { useState } from "react";
import ContactForm from "./ContactForm";
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
  const [fontKey, setFontKey] = useState("Helvatica");
  return (
    <>
      <div className="form-container">
        <div className="form">
          <h1>Edit Your CV</h1>
          <form>
            <label>Select Font:</label>
            <select
              value={fontKey}
              onChange={(e) => setFontKey(e.target.value)}
            >
              {Object.keys(resumeFonts).map((key) => (
                <option key={key} value={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </option>
              ))}
            </select>
            <ContactForm cv={cv.contact} setCv={setCv} />
          </form>
        </div>
      </div>

      <Display cv={cv} fontFamily={resumeFonts[fontKey]} />
    </>
  );
}

export default Form;
