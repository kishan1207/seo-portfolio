import React, { Component } from "react";
import ExperienceCard from "../../components/experienceCard/ExperienceCard.js";
import "./ExperienceAccordion.css";

class ExperienceAccordion extends Component {
  render() {
    const { theme, title } = this.props;
    return (
      <div className="experience-accord">
        <h1
          className="experience-heading-text"
          style={{ color: theme.text }}
        >
          {title}
        </h1>
        {this.props.sections.map((section) => {
          return (
            section["experiences"].map((experience, index) => {
              return (
                <ExperienceCard index={index} totalCards={section["experiences"].length} experience={experience} theme={theme} />
              );
            })
          );
        })}
      </div>
    );
  }
}

export default ExperienceAccordion;
