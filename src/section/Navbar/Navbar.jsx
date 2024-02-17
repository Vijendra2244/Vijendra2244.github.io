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

  const handleLinkClick = () => {
    setMenu(false); 
  };

  return (
    <>
      <div className={styles.mainOfNavbar}>
        <div>
          <span className={styles.adminName}>Vijendra</span>
        </div>
        <div className={menu ? styles.listOfSectionAfterClick : styles.listOfSection}>
          <a className={styles.listSectionNavbar} href="#home_section" onClick={handleLinkClick}>
            Home <FaHome />
          </a>
          <a className={styles.listSectionNavbar} href="#about_section" onClick={handleLinkClick}>
            About <FaUser />
          </a>
          <a className={styles.listSectionNavbar} href="#skills_section" onClick={handleLinkClick}>
            Skills <GiSkills />
          </a>
          <a className={styles.listSectionNavbar} href="#project_section" onClick={handleLinkClick}>
            Project <GoProjectSymlink />
          </a>
          <a className={styles.listSectionNavbar} href="#contact_section" onClick={handleLinkClick}>
            Contact <IoMdContact />
          </a>
          <a
            className={styles.listSectionNavbar}
            href={resume}
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/1xdTafm9KZtA7bFinzz3Avy7OHXf8Fdok/view?usp=sharingg"
              );
              handleLinkClick(); // Close menu when resume link is clicked
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
