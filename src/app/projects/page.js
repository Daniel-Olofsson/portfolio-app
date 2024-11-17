import styles from '../../styles/projects.module.css';
import ProjectList from '../projectList/page';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>My Projects</h1>
        <ul className={styles.projectList}>
          <ProjectList projects={projects} />
        </ul>
      </main>
    </div>
  );
}
