import React from "react";
import styles from "./About.module.css";
import about from  "../../assets/system.png"

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
            As a full stack developer, I immerse myself in the artistry of
            digital creation, infusing every pixel with precision and every
            interaction with enchantment. With a relentless pursuit of
            excellence, I seamlessly blend creativity and functionality,
            sculpting websites that transcend mere aesthetics to become
            immersive experiences. Guided by a passion for innovation, I breathe
            life into digital landscapes that not only captivate but also
            inspire, leaving an indelible mark on the user's journey.
          </p>
          <img className={styles.systemImage}  src={about} alt="" />
        </div>
      </div>
    </>
  );
}

export default About;
