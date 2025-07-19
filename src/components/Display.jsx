import "../styles/Display.css";

const info = {
  contact: {
    name: "John Doe",
    email: "abc@xyz.com",
    phone: "+92 234 567 8901",
  },
  summary:
    "Results-driven software developer with 4+ years of experience in building scalable web applications using React, Node.js, and MongoDB. Strong background in full-stack development, team collaboration, and agile workflows.",
  skills: ["JavaScript", "Python", "Java"],
  experience: [
    {
      id:1,
      title: "Frontend Developer",
      company: "XYZ Corp",
      startDate: "2021-01",
      endDate: "Present",
      description: [
        "Built and maintained React components for 10+ features, reducing load time by 30%.",
        "Collaborated with backend engineers to integrate REST APIs.",
        "Used Git, Jira, and Agile methodology to manage sprints and track issues.",
      ],
    },
  ],
  projects: [
    {
      id:1,
      name: "Task Manager App",
      technologies: ["React", "Firebase"],
      description: [
        "Built a to-do app with real-time sync using Firebase.",
        "Added drag-and-drop functionality using react-beautiful-dnd.",
      ],
    },
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Air University Islamabad",
      startYear: 2019,
      endYear: 2023,
      gpa: "3.6/4.0",
    },
  ],
  certifications: [
    {
      name: "AWS Certified Cloud Practitioner",
      year: 2024,
    },
    {
      name: "FreeCodeCamp Frontend Development",
      year: 2023,
    },
  ],
  languages: ["English", "Urdu"],
  links: {
    portfolio: "https://johndoe.dev",
    github: "https://github.com/johndoe",
    blog: "https://medium.com/@johndoe",
  },
};
function Display({ cv }) {
  return (
    <div className="cv-preview">
      <section className="contact">
        <h1>{cv.contact.name}</h1>
        <h3>{cv.contact.title}</h3>
        <p>{cv.contact.email}</p>
        <p>{cv.contact.phone}</p>

      </section>
      <section className="summary">
        <h3>
          <b>Summary </b>
          <br />
        </h3>
          <p>{cv.summary}</p>
      </section>
      <section className="skills">
        <h3>
          <b>Skills</b>
        </h3>
        <br />
        <ul>
          {cv.skills.map((skills) => {
            return <li key={skills}>{skills}</li>;
          })}
        </ul>
      </section>
      <section className="experience">
        <h3>
          <b>Experience</b>
        </h3>
        {cv.experience.map((experience)=>{
          return <div className="experience-container" key={experience.id}>
            <h4><b>{experience.title}</b></h4>
            <h4>{experience.company}</h4>
            <p>{experience.startDate} - {experience.endDate}</p>
            <p>{experience.description}</p>
          </div>
        })}
      </section>

      <section className="project">
        <h3><b>Projects</b></h3>
        {cv.projects.map((project)=>{
          return <div className="project-container" key={project.id}>
            <h4><b>{project.name}</b></h4>
            <ul>
            {project.technologies.map((technology)=>{
              return <li key={technology}> {technology}</li>
            })}
            </ul>
            {project.description}
          </div>
        })}
      </section>
      <section className="education">
        <h3><b>Education</b></h3>
        {cv.education.map((education)=>{
          return <div className="education-container" key={education.id}>
            <h4><b3>{education.degree}</b3></h4>
            <p>{education.institution}</p>
            <p>{education.startYear} - {education.endYear}</p>
            <p>{education.gpa}</p>
          </div>
        })}
      </section>
      <section className="certifications">
        <h3><b>Certifictions</b></h3>
        <ul>
        {cv.certifications.map(certifications=>{
          return <li key={certifications.name}>{certifications.name} - {certifications.year}</li>
        })}
        </ul>
      </section>

      <section className="languages">
        <h3><b>Languages</b></h3>
        <ul>
          {cv.languages.map(languages=>{
            return <li key={languages}>{languages}</li>
          })}
        </ul>
      </section>
    </div>
  );
}

export default Display;
