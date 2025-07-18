import "../styles/Form.css";
import ContactForm from "./ContactForm";
function Form({ cv, setCv }) {
  return (
    <div className="form-container">
    <div className="form">
      <h1>Edit Your CV</h1>
      <form>
        <ContactForm cv={cv.contact} setCv={setCv} />
      </form>
    </div>
    </div>
  );
}

export default Form;
