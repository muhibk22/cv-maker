import "../styles/Display.css";

function Display({ cv, fontFamily }) {
  return (
    <div className="cv-container">
      <div className="cv-preview" style={{ fontFamily }}>
        <section className="identity">
          <div className="identity-name">
            <h1>
              <b>{cv.identity.name}</b>
            </h1>
            <h3>{cv.identity.title}</h3>
          </div>
          <div className="contact">
            <p>{cv.contact.email}</p>
            <p>{cv.contact.phone}</p>
            <p>{cv.contact.linkedin}</p>
            <p>{cv.contact.github}</p>
          </div>
        </section>
        <hr/>
        <section className="summary">
          <h3>
            <b>Summary </b>
          </h3>
          <p>{cv.summary}</p>
        </section>
        <section className="skills">
          <h3>
            <b>Skills</b>
          </h3>
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
          {cv.experience.map((experience) => {
            return (
              <div className="experience-container" key={experience.id}>
                <div className="inline">
                  <span className="title">
                    <h4>
                      {experience.title}
                    </h4>
                  </span>
                  <span className="year">
                    <p>
                      {experience.startDate} - {experience.endDate}
                    </p>
                  </span>
                </div>
                <span className="type">
                  <h5>{experience.company}</h5>
                </span>

                <p>{experience.description}</p>
              </div>
            );
          })}
        </section>
        <section className="project">
          <h3>
            <b>Projects</b>
          </h3>
          {cv.projects.map((project) => {
            return (
              <div className="project-container" key={project.id}>
                <span className="title">
                  <h4>{project.name}</h4>
                </span>
                <ul className="inline-li ">
                  {project.technologies.map((technology) => {
                    return <li key={technology}>{technology}</li>;
                  })}
                </ul>
                <p>{project.description}</p>
              </div>
            );
          })}
        </section>
        <section className="education">
          <h3>
            <b>Education</b>
          </h3>

          {cv.education.map((education) => {
            return (
              <div className="education-container" key={education.id}>
                <div className="inline">
                  <span className="title">
                    <h4>{education.degree}</h4>
                  </span>
                  <span className="year">
                    <p>
                      {education.startYear} - {education.endYear}
                    </p>
                  </span>
                </div>
                <h5>{education.institution}</h5>

                <p>{education.gpa}</p>
              </div>
            );
          })}
        </section>
        <section className="certifications">
          <h3>
            <b>Certifictions</b>
          </h3>
          <ul>
            {cv.certifications.map((certifications) => {
              return (
                <li key={certifications.name}>
                  {certifications.name} - {certifications.year}
                </li>
              );
            })}
          </ul>
        </section>

        <section className="languages">
          <h3>
            <b>Languages</b>
          </h3>
          <ul>
            {cv.languages.map((languages) => {
              return <li key={languages}>{languages}</li>;
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Display;
