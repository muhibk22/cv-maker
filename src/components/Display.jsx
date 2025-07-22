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
            {cv.contact.email.length >0 && (
            <p>{cv.contact.email}</p>
            )}
            {cv.contact.phone.length>0 && (
              <p>{cv.contact.phone}</p>
            )}
            { cv.contact.linkedin.length>0 && (
            <a href={cv.contact.linkedin.startsWith("http") ? cv.contact.linkedin : `https://${cv.contact.linkedin}`} target="blank">{cv.contact.linkedin}</a>
            )} 
            {cv.contact.github.length>0 && (
            <a href={cv.contact.github.startsWith("http") ? cv.contact.github : `https://${cv.contact.github}`} target="blank">{cv.contact.github}</a>
            )}
          </div>
        </section>
        <hr/>
        { cv.summary && (
        <section className="summary">
          <h3>
            <b>Summary </b>
          </h3>
          <p>{cv.summary}</p>
        </section>)
}       
        {cv.skills.length>0 && (
        <section className="skills">
          <h3>
            <b>Skills</b>
          </h3>
          <ul>
            {cv.skills.map((skills, index) => {
              return <li key={index}>{skills}</li>;
            })}
          </ul>
        </section>
        )}
        {(Array.isArray(cv.experience)) && cv.experience.length!==0 && (
        <section className="experience">
          <h3>
            <b>Experience</b>
          </h3>
          {cv.experience.map((experience) => {
            return (
              <div className="experience-container" key={experience.title}>
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
        </section>)
      }       
        { cv.projects.length >0 && (
        <section className="project">
          <h3>
            <b>Projects</b>
          </h3>
          {cv.projects.map((project) => {
            return (
              <div className="project-container" key={project.id}>
                <span className="inline">
                  <span className="title">
                    <h4>{project.name}</h4>
                  </span>
                  <span className="link">
                    <a href={project.url.startsWith("http") ? project.url : `https://${project.url}`} target="_blank">{project.url}</a>
                  </span>
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
)}
        {cv.education.length>0 && (
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
         )}
        {cv.certifications.length!==0 && (
        <section className="certifications">
          <h3>
            <b>Certifictions</b>
          </h3>
          <ul>
            {cv.certifications.map((certifications) => {
              return (
                <li key={certifications.name}>
                  {certifications.name} {certifications.year? `- ${certifications.year}` : ""}
                </li>
              );
            })}
          </ul>
        </section>
        )}
        {cv.languages.length !==0 && (
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
        )}
      </div>
    </div>
  );
}

export default Display;
