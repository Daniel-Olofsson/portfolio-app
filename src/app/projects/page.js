import styles from "../../styles/projects.module.css";
import ProjectList from "../projectList/page"
import { projects } from "../data/projects"

export default function Projects() {
  /*const projects = [
    {
      id: "project1",
      title: "Project Title 1",
      description: "Description of Project 1. This project does XYZ and was built using ABC technologies.",
      link: "https://github.com/yourusername/project1",
    },
    {
      id: "project2",
      title: "Project Title 2",
      description: "Description of Project 2. This project does XYZ and was built using DEF technologies.",
      link: "https://github.com/yourusername/project2",
    },
    {
      id: "project3",
      title: "Project Title 3",
      description: "Description of Project 3. This project does XYZ and was built using GHI technologies.",
      link: "https://github.com/yourusername/project3",
    },
  ];*/

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>My Projects</h1>
        <ul className={styles.projectList}>
          {/*projects.map((project) => (
            <li key={project.id} className={styles.projectItem}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <Link href={`/projects/${project.id}`} className={styles.projectLink}>
                View Details
              </Link>
            </li>
          ))*/}
          <ProjectList projects={projects} />
        </ul>
      </main>
    </div>
  );
}
