import React from "react";
import styles from "./Home.module.css";
import myResume from "../../assets/Vijendra-Chouhan-Resume.pdf";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import AvatarImg from "../../components/card/AvatarImg";
function Home() {
  return (
    <>
      <div id="home_section" className={styles.containerOfHomeSection}>
        <div className={styles.imageContainer}>
          <AvatarImg />
        </div>
        <div className={styles.detailsContainer}>
          <h1 className={styles.headingName}>
            <span className={styles.nameOfAdmin}>I'M VIJENDRA CHOUHAN.</span>
            <br />
            FRONT-END DEVELOPER
          </h1>
          <button className={styles.resumeButton}>
            <a
              className={styles.resumeAnchor}
              href={myResume}
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1xdTafm9KZtA7bFinzz3Avy7OHXf8Fdok/view?usp=sharing"
                );
              }}
              target="_blank"
              download
            >
              Resume
            </a>
          </button>
          <div className={styles.accountOfSocialMedia}>
            <a href="https://github.com/Vijendra2244" target="_blank">
              <button className={styles.socialMediaIcon}>
                <FaGithub />
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/vijendra-chouhan-989687292/"
              target="_blank"
            >
              <button className={styles.socialMediaIcon}>
                <FaLinkedin />
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
