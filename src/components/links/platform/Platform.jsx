import React, { useState } from "react";
import Select, { components } from "react-select";
import Styles from "./platform.module.css";
import dragNDrop from "../linksAssets/icon-drag-and-drop.svg";
import arrowIcon from "../linksAssets/icon-chevron-down.svg";
import linkIcon from "../linksAssets/icon-link.svg";

import githubIcon from "../linksAssets/icon-github.svg";
import frontendMentorIcon from "../linksAssets/icon-frontend-mentor.svg";
import twitterIcon from "../linksAssets/icon-twitter.svg";
import linkedInIcon from "../linksAssets/icon-linkedin.svg";
import youtubeIcon from "../linksAssets/icon-youtube.svg";
import facebookIcon from "../linksAssets/icon-facebook.svg";
import twitchIcon from "../linksAssets/icon-twitch.svg";
import devtoIcon from "../linksAssets/icon-devto.svg";
import codewarsIcon from "../linksAssets/icon-codewars.svg";
import codepenIcon from "../linksAssets/icon-codepen.svg";
import freeCodeCampIcon from "../linksAssets/icon-freecodecamp.svg";
import gitlabIcon from "../linksAssets/icon-gitlab.svg";
import hashnodeIcon from "../linksAssets/icon-hashnode.svg";
import stackoverflowIcon from "../linksAssets/icon-stack-overflow.svg";

const platformOptions = [
  { value: "Github", label: "Github" },
  { value: "Frontend Mentor", label: "Frontend Mentor" },
  { value: "Twitter", label: "Twitter" },
  { value: "LinkedIn", label: "LinkedIn" },
  { value: "YouTube", label: "YouTube" },
  { value: "Facebook", label: "Facebook" },
  { value: "Twitch", label: "Twitch" },
  { value: "Dev.to", label: "Dev.to" },
  { value: "Codewars", label: "Codewars" },
  { value: "Codepen", label: "Codepen" },
  { value: "freeCodeCamp", label: "freeCodeCamp" },
  { value: "GitLab", label: "GitLab" },
  { value: "Hashnode", label: "Hashnode" },
  { value: "Stack Overflow", label: "Stack Overflow" },
];

export const Platform = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <img
          src={arrowIcon}
          alt="Arrow Icon"
          className={
            isMenuOpen
              ? `${Styles.arrowIcon} ${Styles.rotate180}`
              : Styles.arrowIcon
          }
        />
      </components.DropdownIndicator>
    );
  };

  const formatOptionLabel = ({ value, label }) => {
    let iconSrc;

    switch (value) {
      case "Github":
        iconSrc = githubIcon;
        break;
      case "Frontend Mentor":
        iconSrc = frontendMentorIcon;
        break;
      case "Twitter":
        iconSrc = twitterIcon;
        break;
      case "LinkedIn":
        iconSrc = linkedInIcon;
        break;
      case "YouTube":
        iconSrc = youtubeIcon;
        break;
      case "Facebook":
        iconSrc = facebookIcon;
        break;
      case "Twitch":
        iconSrc = twitchIcon;
        break;
      case "Dev.to":
        iconSrc = devtoIcon;
        break;
      case "Codewars":
        iconSrc = codewarsIcon;
        break;
      case "Codepen":
        iconSrc = codepenIcon;
        break;
      case "freeCodeCamp":
        iconSrc = freeCodeCampIcon;
        break;
      case "GitLab":
        iconSrc = gitlabIcon;
        break;
      case "Hashnode":
        iconSrc = hashnodeIcon;
        break;
      case "Stack Overflow":
        iconSrc = stackoverflowIcon;
        break;
      default:
        // Use a default icon if no matching platform is found
        iconSrc = defaultIcon;
        break;
    }

    return (
      <div>
        <img
          src={iconSrc}
          alt={`${label} Icon`}
          style={{ marginRight: "8px" }}
        />{" "}
        {label}
      </div>
    );
  };

  const customStyles = {
    control: (provided) => ({
      ...provided,
      width: "100%",
      height: "48px",
      borderRadius: "8px",
      border: "1px solid #D9D9D9",
      background: "#FFF",
      appearance: "none",
      paddingLeft: "2.5%",
      marginBottom: "12px",
      boxShadow: "none",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
    menu: (provided) => ({
      ...provided,
      borderRadius: "8px",
      marginTop: "15px",
    }),
    option: (provided, state) => ({
      ...provided,
      height: "48px",
      borderBottom: "1px solid #D9D9D9",
      width: "95%", // Set the separator line width
      marginLeft: "2.5%",

      color: "#333",
      fontSize: "16px",
      fontWeight: 400,
      lineHeight: "24px",
    }),
  };

  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.headerCont}>
        <div className={Styles.LinkNumAndIcon}>
          <img
            className={Styles.dragNDrop}
            src={dragNDrop}
            alt="Drag and Drop Icon"
          />
          <h6 className={Styles.linkNum}>Link #1</h6>
        </div>
        <h6 className={Styles.removeBtn}>Remove</h6>
      </div>

      <div className={Styles.platformCont}>
        <h6 className={Styles.platformH6}>Platform</h6>
        <Select
          options={platformOptions}
          styles={customStyles}
          components={{ DropdownIndicator }}
          formatOptionLabel={formatOptionLabel}
          defaultValue={platformOptions[0]}
          isSearchable={false}
          menuIsOpen={isMenuOpen}
          onMenuOpen={() => setIsMenuOpen(true)}
          onMenuClose={() => setIsMenuOpen(false)}
        />
        <h6 className={Styles.linkH6}>Link</h6>
        <div className={Styles.linkCont}>
          <img className={Styles.linkIcon} src={linkIcon} alt="link icon" />
          <input
            className={Styles.linkInput}
            placeholder="e.g. https://www.github.com/johnappleseed"
          ></input>
        </div>
      </div>
    </div>
  );
};
