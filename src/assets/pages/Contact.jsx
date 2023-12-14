import React from "react";
import styles from "./Contact.module.css";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";

function Contact() {
  return (
    <div id="contact_section">
      <h1 className={styles.conatactHeading}>Contact me</h1>
      <div className={styles.detailOfContact}>
        <a
          href="https://www.linkedin.com/in/vijendra-chouhan-989687292/"
          target="_blank"
          className={styles.adminDetailsAccount}
        >
          <FaLinkedin /> Linkedin
        </a>
        <a
          className={styles.adminDetailsAccount}
          href="https://github.com/Vijendra2244"
          target="_blank"
        >
          <FaGithubSquare /> Github
        </a>
        <a className={styles.adminDetailsAccount}>
          <IoMdMailUnread /> vs230267@gmail.com
        </a>
        <a className={styles.adminDetailsAccount} >
          <PiPhoneCallFill /> +919009060724
        </a>
      </div>
      <p className={styles.coprRightSection}>
        Designed And Built By <span className={styles.adminName}>Vijendra</span>{" "}
        &copy; 2023
      </p>
    </div>
  );
}

export default Contact;
