import React, { useEffect, useState } from "react";
import resourse from "../../../public/assets/resourse";
import "./Navigation.css";
import { useMyContext } from "../../Context/MyContext";
import { Link, useLocation } from "react-router-dom";

function Navigation() {

  const { setToggleSubNav, toggleSub, setToggleSub, NavListItem, 
        setShowPopup } = useMyContext();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const generateSlug = (label) => label.toLowerCase().replace(/\s+/g, "-");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (location.pathname === "/") {
        const vh70 = window.innerHeight * 0.7;
        setScrolled(scrollY > vh70);
      } else {
        setScrolled(scrollY >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <div className={`Navigation ${scrolled ? "scrolled" : ""}`}>
      <div className="navigation-container">
        <div className="main-logo-container">
          <Link to='/'>
          <img src={resourse.transparentSiteLogo} alt="site-main-logo" />
          </Link>
        </div>

        <div className="navigation-wrapper-left">
          <ul className="navigation-wrapper">
            <li className="nav-item">
              <Link to="/"><i className="fa-solid fa-house"></i></Link>
            </li>

            {NavListItem.map((navList, index) => (
              <li key={index} className="nav-item" onClick={() => setToggleSub(!toggleSub)}>
                {navList.Title} <i className="fa-solid fa-chevron-down"></i>
                {toggleSub && (
                  <ul className="submenu">
                    {navList.SubTitle.map((subItem, subIndex) => {
                      const slug = generateSlug(subItem.label);
                      return (
                        <li key={subIndex} className="submenu-item" onClick={() => setToggleSubNav(false)}>
                          <Link to={`/explore/${slug}`}>{subItem.label}</Link>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          <div className="Nav-Cta-Btn nav-cta-btn">
            <button className="btn" onClick={() => setShowPopup(true)}>
              <span className="btn-text-one">Get Qoute</span>
              <span className="btn-text-two">Click Here</span>
            </button>
          </div>
        </div>

        <div className="hamburgure-menu">
          <i
            className="fa-solid fa-bars"
            onClick={() => setToggleSubNav((prev) => !prev)}
            aria-label="Toggle menu"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
