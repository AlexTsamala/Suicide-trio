import React from "react";
import Image from "./illustration-phone-mockup.svg";
import Styles from "./ProfileDetails.module.css";
import ProfileImage from "./ProfileImage/ProfileImage";
import ProfileForm from "./ProfileForm/ProfileForm";

const ProfileDetails = ({ title, content }) => {
  return (
    <div className={Styles.body}>
      <div className={Styles.desktop}>
        <img src={Image} alt="Image" />
      </div>
      <div className={Styles.main}>
        <div className={Styles.text_content}>
          <h1 className={Styles.title}>{title}</h1>
          <p className={Styles.content}>{content}</p>
        </div>
        <ProfileImage />
        <ProfileForm />
      </div>
    </div>
  );
};

export default ProfileDetails;
