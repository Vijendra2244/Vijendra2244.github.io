import React from "react";
import styles from "./About.module.css";
function About() {
  return (
    <>
      <div id="about_section">
        <h1 className={styles.aboutHeading}>
          About <span className={styles.aboutMeHeading}>Me</span>
        </h1>
        <p className={styles.nameOfAdmin}>I'm Vijendra Chouhan</p>
        <div className={styles.paraTag}>
          <p className={styles.briefSummmmaryAboutMe}>
            With a keen eye for pixel perfection, I bring websites to life with
            interactive elegance. My passion lies in the art of blending
            creativity with functionality, ensuring every user interaction is a
            seamless and enjoyable experience. Dedicated to crafting digital
            landscapes that leave a lasting positive impact.
          </p>
        </div>
        <p className={styles.email}>Drop a mail vs230267@gmail.com</p>
      </div>
    </>
  );
}

export default About;
