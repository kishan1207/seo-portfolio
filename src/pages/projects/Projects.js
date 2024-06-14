import React, { Component } from "react";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import { Fade } from "react-reveal";
import {
  projectsHeader,
  ProjectsData
} from "../../portfolio.js";
import "./Projects.css";
import animationData from '../../assests/lotties/boost-seo.json';
import FeelingProud from "../../containers/greeting/FeelingProud.js";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="basic-projects">
        <Fade bottom duration={2000} distance="40px">
          <div className="projects-heading-div">
            <div className="projects-heading-img-div">
              <FeelingProud animationData={animationData} />
            </div>
            <div className="projects-heading-text-div">
              <h1
                className="projects-heading-text"
                style={{ color: theme.text }}
              >
                {projectsHeader.title}
              </h1>
              <p
                className="projects-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsHeader["description"]}
              </p>
            </div>
          </div>
        </Fade>
        <div className="repo-cards-div-main">
          {ProjectsData.map((repo) => {
            return <GithubRepoCard repo={repo} theme={theme} />;
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
