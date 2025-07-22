import { useState } from "react";

function ExperienceForm({ experience, setCv }) {
  const [formValues, setFormValues] = useState({
    title: experience?.title || "",
    company: experience?.company || "",
    startDate: experience?.startDate || "",
    endDate: experience?.endDate || "",
    description: experience?.description || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExperience = { ...formValues, id: crypto.randomUUID() };
    setCv((prevCv) => ({
      ...prevCv,
      experience: [...(prevCv.experience || []), newExperience],
    }));
  };
  const handleDeleteExperience = (experience) => {
    setCv((prevCv) => ({
      ...prevCv,
      experience: prevCv.experience.filter((e) => e.id !== experience.id),
    }));
  };
  return (
    <section className="experience-form">
      <h2>Experience</h2>
      <ul>
        {experience.map((experience) => {
          return (
            <li key={experience.id}>
              {experience.title} - {experience.company}{" "}
              <button
                type="button"
                onClick={() => handleDeleteExperience(experience)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <label htmlFor="experience-position"> Position</label>
      <input
        type="text"
        value={formValues.title}
        name="title"
        onChange={handleChange}
        maxLength={25}
      />

      <label htmlFor="experience-company">Company</label>
      <input
        type="text"
        value={formValues.company}
        name="company"
        onChange={handleChange}
        maxLength={25}
      />

      <label htmlFor="experience-startDate">Start Date</label>
      <input
        type="text"
        value={formValues.startDate}
        name="startDate"
        onChange={handleChange}
        maxLength={20}
      />

      <label htmlFor="experience-endDate">End Date</label>
      <input
        type="text"
        value={formValues.endDate}
        name="endDate"
        onChange={handleChange}
        maxLength={20}
      />

      <label htmlFor="experience-description">Description</label>
      <textarea 
        placeholder="Brief description of your job"
        rows={4}
        type="text"
        value={formValues.description}
        name="description"
        onChange={handleChange}
      />
      <button type="button" onClick={handleSubmit}>
        Add Experience
      </button>
    </section>
  );
}

export default ExperienceForm;
