import React from "react";
import Styles from "./AddLinks.module.css";
import devLinkLogo from "./logo-devlinks-small.svg";
import linkLogo from "./ph_link-bold.svg";
import profileLogo from "./icon-profile-details-header.svg";
import previewLogo from "./icon-preview-header.svg";
import illustration from "./illustration.svg";

export const AddLinks = () => {
  return (
    <div className={Styles.mainContainer}>
      <div className={Styles.navBar}>
        <img className={Styles.devLinkLogo} src={devLinkLogo}></img>
        <div className={Styles.linkLogoCont}>
          <img className={Styles.linkLogo} src={linkLogo}></img>
        </div>
        <img className={Styles.profileLogo} src={profileLogo}></img>
        <div className={Styles.previewLogoCont}>
          <img className={Styles.previewLogo} src={previewLogo}></img>
        </div>
      </div>

      <div className={Styles.contentContainer}>
        <h1 className={Styles.customizeH1}>Customize your links</h1>
        <p className={Styles.customizeP}>
          Add/edit/remove links below and then share all your profiles with the
          world!
        </p>
        <button className={Styles.addButton}>+ Add new link</button>

        <div className={Styles.getStartedContainer}>
          <img className={Styles.illustration} src={illustration}></img>
          <h1 className={Styles.getStartedH1}>Let’s get you started</h1>
          <p className={Styles.getStartedP}>
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We’re here to help you
            share your profiles with everyone!
          </p>
        </div>
      </div>

      <div className={Styles.saveContainer}>
        <button className={Styles.saveButton}>Save</button>
      </div>
    </div>
  );
};
