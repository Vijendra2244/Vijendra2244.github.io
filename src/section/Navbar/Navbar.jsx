import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaHome, FaUser } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import resume from "../../assets/Vijendra-Chouhan-Resume.pdf";
import { RiBookReadLine } from "react-icons/ri";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleMenuBtn = () => {
    setMenu(true);
  };
  const handleCross = () => {
    setMenu(false);
  };
  return (
    <>
      <div className={styles.mainOfNavbar}>
        <div>
          <span className={styles.adminName}>Vijendra</span>
        </div>
        <div
          className={
            menu ? styles.listOfSectionAfterClick : styles.listOfSection
          }
         >
          <a className={styles.listSectionNavbar} href="#home_section">
            Home <FaHome />
          </a>
          <a className={styles.listSectionNavbar} href="#about_section">
            About <FaUser />
          </a>

          <a className={styles.listSectionNavbar} href="#skills_section">
            Skills <GiSkills />
          </a>
          <a className={styles.listSectionNavbar} href="#project_section">
            Project <GoProjectSymlink />
          </a>
          <a className={styles.listSectionNavbar} href="#contact_section">
            Contact <IoMdContact />
          </a>
          <a
            className={styles.listSectionNavbar}
            href={resume}
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/10vMNNYP0-y2tlyPDV9QTI2MjM29iCcj6/view?usp=sharing"
              );
            }}
            target="_blank"
            download="Vijendra-Chouhan-Resume"
          >
            Resume <RiBookReadLine />
          </a>
        </div>
        {menu ? (
          <div className={styles.crossIcon}>
            <ImCross onClick={handleCross}></ImCross>
          </div>
        ) : (
          <div className={styles.hamburgerMenuICon}>
            <GiHamburgerMenu onClick={handleMenuBtn}></GiHamburgerMenu>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
