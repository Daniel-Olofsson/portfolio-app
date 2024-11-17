//Footer.js

import styles from "../styles/footer.module.css";

export default function Footer ()  {
  return (
    <footer className={styles.footer}>
      <p></p>
      <ul>
        <li>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/yourusername/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </li>
      </ul>
    </footer>
  );
};

