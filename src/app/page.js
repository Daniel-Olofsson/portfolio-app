"use client"

import Image from "next/image";
import styles from "../styles/about-me.module.css";
import Weather from "./weather/weather";
import ScrollToTop from "./scrollToTop/scrollToTop";

export default function AboutMe() {
  

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.globalpageheader}>About Daniel</h1>
        <div className={styles.intro}>
          <Image
            src="/images/me.png" // Path to your image
            alt="Daniel Olofsson"
            width={150} // Adjust the width as needed
            height={150} // Adjust the height as needed
            className={styles.image}
          />
          <section className={styles.connect}>
          <h2>Connect with Me</h2>
          <ul className={styles.logoLinks}>
          <Image
                    src="/logos/github-mark.svg" // Path to your GitHub logo
                    alt="GitHub"
                    width={24} // Adjust size as needed
                    height={24} // Adjust size as needed
                    className={styles.icon}
                  />
            <li>
              <a href="https://github.com/daniel-olofsson" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <Image
                    src="/logos/LI-In-Bug.png" // Path to your LinkedIn logo
                    alt="LinkedIn"
                    width={24} // Adjust size as needed
                    height={24} // Adjust size as needed
                    className={styles.icon}
                  />
            <li>
              <a href="https://www.linkedin.com/in/daniel-olofsson/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
          </ul>
        </section>
          <div className={styles.introText}>
            <p>
              Hello! I'm Daniel Olofsson, a passionate web developer with a strong interest in JavaScript and React. I enjoy building engaging and user-friendly applications.
            </p>
            <p>
              In my free time, I work on personal projects and collaborate with friends on various tech-related ventures. I am constantly learning and improving my skills.
            </p>
          </div>
        </div>

        <div className={styles.columns}>
          <section className={styles.skills}>
            <h2 className={styles.sectionTitle}>Skills</h2>
            <ul>
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>React</li>
              <li>C#</li>
              <li>ASP.NET</li>
              <li>.NET</li>
              <li>HTML & CSS</li>
              <li>SASS</li>
              <li>Unity (2D game development)</li>
              <li>Python</li>
            </ul>
          </section>

          <section className={styles.softSkills}>
            <h2 className={styles.sectionTitle}>Soft Skills</h2>
            <ul>
              <li>Teamwork</li>
              <li>Problem-solving</li>
              <li>Effective communication</li>
              <li>Adaptability</li>
              <li>Time management</li>
            </ul>
          </section>

          <section className={styles.hobbies}>
            <h2 className={styles.sectionTitle}>Hobbies</h2>
            <ul>
              <li>Gaming</li>
              <li>Collaborating on tech projects with friends</li>
              <li>Maintaining a website for a driving school</li>
              <li>Learning new programming frameworks</li>
              <li>Board games and tabletop RPGs</li>
            </ul>
          </section>
        </div>

        <section className={styles.careerGoals}>
          <h2 className={styles.sectionTitle}>Career Goals</h2>
          <p>I aspire to become a skilled developer, focusing on frontend development while also exploring backend technologies.</p>
          <p>
            I aspire to finish a Unity game that I am currently developing, while also providing hosting solutions for websites of various companies. My aim is to merge my passions for game development and web technology to create engaging experiences.
          </p>
        </section>

        <section className={styles.education}>
          <h2 className={styles.sectionTitle}>Education</h2>
          <ul>
            <li>EC Education, Gothenburg - Web Developer (.NET)</li>
            <li>NTI School, Distance - Programming 1 (Python)</li>
            <li>IT College, Distance - Ongoing education focused on React</li>
          </ul>
        </section>

        <section className={styles.personalStatement}>
          <h2 className={styles.sectionTitle}>Personal Statement</h2>
          <p>My interest in IT and development is driven by a desire to create engaging and functional applications that enhance people's lives. I approach learning as an ongoing journey, utilizing resources such as online courses, collaboration with peers, and personal projects to expand my skill set.</p>
        </section>

        <section className={styles.funFacts}>
          <h2 className={styles.sectionTitle}>Fun Facts</h2>
          <p>I love cats and have a penchant for collecting unfinished projects, which has become somewhat of a personal record.</p>
        </section>
        <section>
          <Weather />
        </section>
        
      </main>
      <ScrollToTop />
    </div>
  );
}
