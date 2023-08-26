import React from "react";
import SmallLogoIcon from "/Users/chxar/OneDrive/Desktop/Suicide-trio/src/assets/images/logo-devlinks-small.svg";
import LargeLogoIcon from "/Users/chxar/OneDrive/Desktop/Suicide-trio/src/assets/images/logo-devlinks-large.svg";
import LinkIcon from "/Users/chxar/OneDrive/Desktop/Suicide-trio/src/assets/images/icon-link.svg";
import ProfileIcon from "/Users/chxar/OneDrive/Desktop/Suicide-trio/src/assets/images/icon-profile-details-header.svg";
import Preview from "/Users/chxar/OneDrive/Desktop/Suicide-trio/src/assets/images/icon-preview-header.svg";
import Styles from "./ProfileHeader.module.css";

const ProfileHeader = () => {
  return (
    <div className={Styles.main_container}>
      <nav className={Styles.navbar}>
        <ul>
          {/* LogoIcon */}
          <li className={Styles.logo_icon}>
            <img
              src={SmallLogoIcon}
              alt="LogoImage"
              className={Styles.small_logo_icon}
            />
            <img
              src={LargeLogoIcon}
              alt="LogoImage"
              className={Styles.large_logo_icon}
            />
          </li>
          <div style={{ display: "flex" }}>
            {/* Link / Profile Icon */}
            <li className={Styles.link_box}>
              <img src={LinkIcon} alt="" />
              <span className={Styles.link_text}>Links</span>
            </li>
            <li className={Styles.profile_box}>
              <img src={ProfileIcon} alt="ProfileIcon" />
              <span className={Styles.profile_text}>Profile Details</span>
            </li>
          </div>
          {/* Preview Icon */}
          <li className={Styles.preview_box}>
            <img
              src={Preview}
              alt="PreviewIcon"
              className={Styles.preview_icon_img}
            />
            <span className={Styles.preview_text}>Preview</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileHeader;
