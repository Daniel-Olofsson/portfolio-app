"use client";  

import { useParams } from "next/navigation";
import { projects } from "../../data/projects";
import styles from "../../../styles/projects.module.css" 

const ProjectDetail = () => {
  const { id } = useParams();  
  

 
  
  const project = projects.find((project) => project.id === id);

  
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className={styles.projectDetail}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectDetail;
