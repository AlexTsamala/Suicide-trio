import React, { useEffect, useState } from "react";
import Styles from "./addLinks.module.css";
// import mobileDevLinkLogo from "../linksAssets/logo-devlinks-small.svg";
// import tabletDevLinkLogo from "../linksAssets/logo-devlinks-large.svg";
// import linkLogo from "../linksAssets/ph_link-bold.svg";
// import profileLogo from "../linksAssets/icon-profile-details-header.svg";
// import previewLogo from "../linksAssets/icon-preview-header.svg";
import { GetStarted } from "../getStarted/GetStarted";
import { Platform } from "../platform/Platform";
import { Smartphone } from "../smartphone/Smartphone";
import { v4 as uuidv4 } from "uuid";
import Data from "../../../../Data.json";

export const AddLinks = () => {
  const [platforms, setPlatforms] = useState([]);
  const [showGetStarted, setShowGetStarted] = useState(true);

  function handleAddBtn() {
    const myUUID = uuidv4();
    setShowGetStarted(false);
    setPlatforms([
      ...platforms,
      { value: "Github", label: "Github", input: "", id: myUUID },
    ]);
  }

  function handleSaveBtn() {
    const savedPlatforms = platforms.map((platform) => {
      return {
        value: platform.value,
        label: platform.label,
        input: platform.input,
        id: platform.id,
      };
    });

    const userData = JSON.parse(localStorage.getItem("currentUser"));

    const newData = {
      Links: [
        ...Data.Links,
        { UserId: userData.UserId, Platforms: savedPlatforms },
      ],
    };

    // console.log(savedPlatforms);
  }

  return (
    <div className={Styles.body}>
      <div className={Styles.mainContainer}>
        {/* <div className={Styles.navBar}>
          <img
            className={Styles.mobileDevLinkLogo}
            src={mobileDevLinkLogo}
            alt="DevLink Logo"
          />
          <img
            className={Styles.tabletDevLinkLogo}
            src={tabletDevLinkLogo}
            alt="Large DevLink Logo"
          />
          <div className={Styles.linkLogoCont}>
            <img className={Styles.linkLogo} src={linkLogo} alt="Link Logo" />
            <p className={Styles.linkLogoP}>Links</p>
          </div>
          <img
            className={Styles.profileLogo}
            src={profileLogo}
            alt="Profile Logo"
          />
          <p className={Styles.profileLogoP}>Profile Details</p>
          <div className={Styles.previewLogoCont}>
            <img
              className={Styles.previewLogo}
              src={previewLogo}
              alt="Preview Logo"
            />
            <p className={Styles.previewP}>Preview</p>
          </div>
        </div> */}
        <div className={Styles.smartLogoAndContent}>
          <Smartphone />
          <div className={Styles.contentAndSaveCont}>
            <div className={Styles.contentContainer}>
              <h1 className={Styles.customizeH1}>Customize your links</h1>
              <p className={Styles.customizeP}>
                Add/edit/remove links below and then share all your profiles
                with the world!
              </p>
              <button onClick={handleAddBtn} className={Styles.addButton}>
                + Add new link
              </button>
              {platforms.map((item, index) => (
                <Platform
                  key={index}
                  count={index + 1}
                  platforms={platforms}
                  setPlatforms={setPlatforms}
                  currentPlatform={item}
                />
              ))}
              {showGetStarted && <GetStarted />}
            </div>
            <div className={Styles.saveContainer}>
              <button
                onClick={handleSaveBtn}
                className={`${Styles.saveButton} ${
                  !showGetStarted ? Styles.visible : ""
                }`}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
