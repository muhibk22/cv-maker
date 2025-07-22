import { useState } from "react";
import Display from "./components/Display";
import Form from "./components/Form";

function App() {
  const [cv, setCv] = useState({
    identity: {
      name: "John Doe",
      title:"Software Engineer",
    },
    contact: {
      email: "abc@xyz.com",
      phone: "+92 234 567 8901",
      linkedin: "linkedin.com/abc",
      github: "github.com/abc"
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
        description: 
          "Built and maintained React components for 10+ features, reducing load time by 30%. Collaborated with backend engineers to integrate REST APIs. Used Git, Jira, and Agile methodology to manage sprints and track issues.",
      },
    ],
    projects: [
      {
        id:2,
        name: "Task Manager App",
        url: "github.com/abc/xyc",
        technologies: ["React", "Firebase"],
        description: "Built a to-do app with real-time sync using Firebase. Added drag-and-drop functionality using react-beautiful-dnd.",
      },
    ],
    education: [
      {
        id:3,
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
  });
  return (
    <div className="container">
      <Form cv={cv} setCv={setCv} />
    </div>
  );
}

export default App;
