import React from "react";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  function openRepoinNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  function openCaseStudyInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  function openWebsiteInNewTab(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="repo-card-div" style={{ backgroundColor: theme.highlight }}>
      <Fade bottom duration={2000} distance="40px">
        <div key={repo.id}>
          <div className="repo-name-div" onClick={() => openRepoinNewTab(repo.url)}>
            <svg
              aria-hidden="true"
              className="octicon repo-svg"
              height="16"
              role="img"
              viewBox="0 0 12 16"
              width="12"
            >
              <path
                fillRule="evenodd"
                d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"
              ></path>
            </svg>
            <p className="repo-name" style={{ color: theme.text }}>
              {repo.name}
            </p>
          </div>
          <p className="repo-description" style={{ color: theme.text }}>
            {repo.description}
          </p>
          <div className="repo-details">
            <ProjectLanguages
              className="repo-languages"
              logos={repo.languages}
            />
          </div>
          <div className="repo-buttons">
            <button
              className="website-button"
              onClick={(e) => {
                e.stopPropagation();
                openWebsiteInNewTab(repo.url);
              }}
            >
              Website
            </button>
            {/* <button
              className="case-study-button"
              onClick={(e) => {
                e.stopPropagation();
                openCaseStudyInNewTab(repo.caseStudyUrl);
              }}
            >
              + Case Study
            </button> */}
          </div>
        </div>
      </Fade>
    </div>
  );
}
