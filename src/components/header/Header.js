import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import { HashLink } from "react-router-hash-link";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={"/"} tag={Link} className="logo">
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <HashLink
                  style={{ color: theme.text }}
                  // example of custom scroll function using the scroll prop
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                  to={'#section-home'}
                >
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink
                  style={{ color: theme.text }}
                  // example of custom scroll function using the scroll prop
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                  to={'#section-education'}
                >
                  Education
                </HashLink>
              </li>
              <li>
                <HashLink
                  style={{ color: theme.text }}
                  // example of custom scroll function using the scroll prop
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                  to={'#section-skills'}
                >
                  Skills
                </HashLink>
              </li>
              <li>
                <HashLink
                  style={{ color: theme.text }}
                  // example of custom scroll function using the scroll prop
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                  to={'#section-experience'}
                >
                  Experience
                </HashLink>
              </li>
              <li>
                <HashLink
                  style={{ color: theme.text }}
                  // example of custom scroll function using the scroll prop
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                  to={'#section-projects'}
                >
                  Projects
                </HashLink>
              </li>
              <li>
                <HashLink
                  style={{ color: theme.text }}
                  // example of custom scroll function using the scroll prop
                  scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                  to={'#section-contact'}
                >
                  Contact
                </HashLink>
              </li>
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}
export default Header;
