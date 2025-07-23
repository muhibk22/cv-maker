import { useState } from "react";

function ProjectsForm({ projects, setCV }) {
  const [formValues, setFormValues] = useState({
    name: "",
    url: "",
    technologies: [],
    description: "",
  });

  const [techInput, setTechInput] = useState("");
  const handleAddTech = () => {
    const input = techInput.trim();
    if (!input) return;
    setFormValues((prev) => ({
      ...prev,
      technologies: [...prev.technologies, techInput.trim()],
    }));
    setTechInput("");
  };

  const handleDeleteTech=(tech)=>{
    setFormValues((prev) => ({
        ...prev,
        technologies: prev.technologies.filter((t) => t !== tech),
  }));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newValues = { ...formValues, id: crypto.randomUUID() };

    if (newValues.name === "") return;
    setCV((prevCv) => ({
      ...prevCv,
      projects: [...(prevCv.projects || []), newValues],
    }));

    setFormValues({
      name: "",
      url: "",
      technologies: [],
      description: "",
    });
  };

  const handleDelete = (project) => {
    setCV((prevCv) => ({
      ...prevCv,
      projects: prevCv.projects.filter((p) => p.id !== project.id),
    }));
  };

     const handleKeyDown = (e) => {
        if (e.key === "Enter") {
        e.preventDefault();
        handleAddTech(e);
    }
  };

return (
    <section className="projects-form">
    <ul>
        {
            projects.map((project)=>{
                return <li key={project.id} >{project.name} <button type="button" onClick={()=>handleDelete(project)}>Remove</button></li>
            })
        }
    </ul>
        <label htmlFor="project-name">Name</label>
      <input
        name="name"
        value={formValues.name}
        onChange={handleChange}
        type="text"
      />
      <label htmlFor="project-url">Url</label>
      <input
        name="url"
        value={formValues.url}
        onChange={handleChange}
        type="text"
      />
      <label htmlFor="project-description">Description</label>
      <textarea
        name="description"
        value={formValues.description}
        onChange={handleChange}
        placeholder="Description"
      />
      <label htmlFor="project-technologies">Technologies</label>
      <input
        value={techInput}
        onChange={(e) => setTechInput(e.target.value)}
        placeholder="Add technology"
        onKeyDown={handleKeyDown}
      />
      <button type="button" onClick={handleAddTech}>
        Add Tech
      </button>
      <ul>
        {formValues.technologies.map((tech, idx) => (
          <li key={idx}>{tech} <button type="button" onClick={()=>handleDeleteTech(tech)}>Remove</button></li>
        ))}
      </ul>

      <button type="button" onClick={handleSubmit}>Add Project</button>
    </section>
  );
}

export default ProjectsForm;