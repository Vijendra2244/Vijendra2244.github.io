import React from "react";
import styles from "./Contact.module.css";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { IoMdMailUnread } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import ContactCard from "../../components/ContactCard";

function Contact() {
  return (
    <div id="contact_section">
      <ContactCard />
      <p className={styles.copyRightSection} >© 2023, All right reserved Vijendra Chouhan 💛</p>
    </div>
  );
}

export default Contact;
