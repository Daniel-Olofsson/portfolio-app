import styles from "../../styles/projects.module.css"
import Link from "next/link"
const ProjectList = ({ projects }) => {
    return (
      <ul className={styles.projectList}>
        {projects.map((project) => (
          <li key={project.id} className={styles.projectItem}>
            <h2 className={styles.projectTitle}>{project.title}</h2>
            {/* Link to the individual project detail page */}
            <Link href={`/projectDetails/${project.id}`} className={styles.projectLink}>
              View Details
            </Link>
          </li>
        ))}
      </ul>
    );
  };
  
export default ProjectList;