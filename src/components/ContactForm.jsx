import { useState } from "react";

function ContactForm({ contact, setCv }) {
  const [formValues, setFormValues] = useState({
    name: contact?.name || "John Doe",
    email: contact?.email || "abc@xyz.com",
    phone: contact?.phone || "+92 234 567 8901",
    location: contact?.location || "City, State",
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
    <div className="section">
      <label>Full Name</label>
      <input type="text" name="name" value={formValues.name} onChange={handleChange} maxLength={50}/>

      <label>Email</label>
      <input type="email" name="email" value={formValues.email} onChange={handleChange} maxLength={25}/>

      <label>Phone No.</label>
      <input type="text" name="phone" value={formValues.phone} onChange={handleChange}/>

      <label>Location</label>
      <input type="text" name="location" value={formValues.location} onChange={handleChange}/>
    </div>
  );
}

export default ContactForm;
