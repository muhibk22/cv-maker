import "../styles/Form.css";
import { useState } from "react";
import IdentityForm from "./IdentityForm";
import ContactForm from "./ContactForm";
import Summary from "./Summary";
import SkillsForm from "./SkillsForm";
import ExperienceForm from "./ExperienceForm";
import ProjectsForm from "./ProjectsForm";
import EducationForm from "./EducationForm";
import Certifictions from "./Certifications";
import LanguagesForm from "./LanguagesForm";
import Display from "./Display";
import AiAssistant from "./AiAssistant";

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

const sections = [
  "Identity",
  "Contact",
  "Summary",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Certifications",
  "Languages",
];

function Form({ cv, setCv }) {
  const [fontKey, setFontKey] = useState("helvetica");
  const [activeSection, setActiveSection] = useState("Identity");

  const handlePrint = () => {
    alert("Note: The recommended format for printing is A4 size. It is suggested to pick that paper size while saving the PDF. \n\nTo make the hyperlinks accessible, choose save as PDF instead of Microsoft Print to PDF.");
    window.print();
  };

  const clearCv = () => {
    setCv({
      identity: { name: "", title: "" },
      contact: {},
      summary: "",
      skills: [],
      experience: [],
      projects: [],
      education: [],
      certifications: [],
      languages: [],
    });
  };

  return (
    <>
      <div className="form-container">
        <div className="form">
          <h1>Edit Your CV</h1>

          <label>Font</label>
          <select value={fontKey} onChange={(e) => setFontKey(e.target.value)}>
            {Object.keys(resumeFonts).map((key) => (
              <option key={key} value={key}>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </option>
            ))}
          </select>

          <button type="button" onClick={clearCv} className="function-btn">Clear CV</button>

          <AiAssistant cv={cv} />
          <form>
          {sections.map((section) => (
            <div key={section}>
              <section className="section-spread"> 
              <h2 className="section-button" onClick={() =>setActiveSection((prev) => (prev === section ? null : section))}>{section}</h2>
              {activeSection === section && (
                <>
                  {section === "Identity" && <IdentityForm cv={cv.identity} setCv={setCv} />}
                  {section === "Contact" && <ContactForm cv={cv.contact} setCv={setCv} />}
                  {section === "Summary" && <Summary cv={cv.summary} setCv={setCv} />}
                  {section === "Skills" && <SkillsForm skills={cv.skills} setCv={setCv} />}
                  {section === "Experience" && <ExperienceForm experience={cv.experience} setCv={setCv} />}
                  {section === "Projects" && <ProjectsForm projects={cv.projects} setCV={setCv} />}
                  {section === "Education" && <EducationForm education={cv.education} setCv={setCv} />}
                  {section === "Certifications" && <Certifictions certifications={cv.certifications} setCv={setCv} />}
                  {section === "Languages" && <LanguagesForm languages={cv.languages} setCv={setCv} />}
                </>
              )}
              </section>
            </div>
          ))}
          </form>

          <div style={{ textAlign: "center", margin: "20px 0" }}>
            <button onClick={handlePrint} className="function-btn">
              Print CV
            </button>
          </div>
        </div>
      </div>

      <Display cv={cv} fontFamily={resumeFonts[fontKey]} />
    </>
  );
}

export default Form;
