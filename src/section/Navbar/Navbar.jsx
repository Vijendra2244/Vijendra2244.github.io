import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { FaHome, FaUser } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { GoProjectSymlink } from "react-icons/go";
import resume from "../../assets/Vijendra-Chouhan-resume.pdf";
import { RiBookReadLine } from "react-icons/ri";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const body = document.body;
    if (menuOpen && isMobileView) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
    return () => {
      body.style.overflow = "auto";
    };
  }, [menuOpen, isMobileView]);

  const handleMenuBtn = () => {
    setMenuOpen(true);
  };

  const handleCross = () => {
    setMenuOpen(false);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className={styles.mainOfNavbar}>
        <div>
          <a href="#home_section">
            <span className={styles.adminName}>Vijendra</span>
          </a>
        </div>
        {isMobileView && (
          <div
            className={menuOpen ? styles.backdrop : styles.hiddenBackdrop}
            onClick={handleCross}
          ></div>
        )}
        {isMobileView ? (
          <>
            {menuOpen ? (
              <div className={styles.listOfSectionAfterClick}>
                <a
                  className={styles.listSectionNavbar}
                  href="#home_section"
                  onClick={handleLinkClick}
                >
                  Home <FaHome />
                </a>
                <a
                  className={styles.listSectionNavbar}
                  href="#about_section"
                  onClick={handleLinkClick}
                >
                  About <FaUser />
                </a>
                <a
                  className={styles.listSectionNavbar}
                  href="#skills_section"
                  onClick={handleLinkClick}
                >
                  Skills <GiSkills />
                </a>
                <a
                  className={styles.listSectionNavbar}
                  href="#project_section"
                  onClick={handleLinkClick}
                >
                  Project <GoProjectSymlink />
                </a>
                <a
                  className={styles.listSectionNavbar}
                  href="#contact_section"
                  onClick={handleLinkClick}
                >
                  Contact <IoMdContact />
                </a>
                <a
                  className={styles.listSectionNavbar}
                  href={resume}
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1QK9srCzGVruHCIDxDuhqKkqeVp9xDSOU/view?usp=sharing"
                    );
                    handleLinkClick();
                  }}
                  target="_blank"
                  download
                >
                  Resume <RiBookReadLine />
                </a>
              </div>
            ) : (
              <div className={styles.hamburgerMenuICon}>
                <GiHamburgerMenu onClick={handleMenuBtn} />
              </div>
            )}
            {menuOpen && (
              <div className={styles.crossIcon}>
                <ImCross onClick={handleCross} />
              </div>
            )}
          </>
        ) : (
          <div className={styles.listOfSection}>
            <a
              className={styles.listSectionNavbar}
              href="#home_section"
              onClick={handleLinkClick}
            >
              Home <FaHome />
            </a>
            <a
              className={styles.listSectionNavbar}
              href="#about_section"
              onClick={handleLinkClick}
            >
              About <FaUser />
            </a>
            <a
              className={styles.listSectionNavbar}
              href="#skills_section"
              onClick={handleLinkClick}
            >
              Skills <GiSkills />
            </a>
            <a
              className={styles.listSectionNavbar}
              href="#project_section"
              onClick={handleLinkClick}
            >
              Project <GoProjectSymlink />
            </a>
            <a
              className={styles.listSectionNavbar}
              href="#contact_section"
              onClick={handleLinkClick}
            >
              Contact <IoMdContact />
            </a>
            <a
              className={styles.listSectionNavbar}
              href={resume}
              onClick={() => {
                window.open(
                  "https://drive.google.com/file/d/1xdTafm9KZtA7bFinzz3Avy7OHXf8Fdok/view?usp=sharingg"
                );
                handleLinkClick();
              }}
              target="_blank"
              download="Vijendra-Chouhan-Resume"
            >
              Resume <RiBookReadLine />
            </a>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
