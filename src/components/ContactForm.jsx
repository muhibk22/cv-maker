import { useState } from "react";

function ContactForm({ contact, setCv }) {
  const [formValues, setFormValues] = useState({
    email: contact?.email || "",
    phone: contact?.phone || "",
    linkedin: contact?.linkedin || "",
    github: contact?.github || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setCv((prevCv) => ({
      ...prevCv,
      contact: {
        ...prevCv.contact,
        [name]: value,
      },
    }));
  };

  return (
    <section className="contact-form">
      <h2>Contact Details</h2>
      <label>Email</label>
      <input type="email" name="email" value={formValues.email} onChange={handleChange} maxLength={25}/>

      <label>Phone No.</label>
      <input type="text" name="phone" value={formValues.phone} onChange={handleChange} maxLength={16}/>

      <label>Linkedin</label>
      <input type="text" name="linkedin" value={formValues.linkedin} onChange={handleChange} maxLength={50}/>

      <label>Other Links</label>
      <input type="url" name="github" value={formValues.github} onChange={handleChange}/>
    </section>
  );
}

export default ContactForm;
