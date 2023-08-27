import React, { useState } from "react";
import Image from "./illustration-phone-mockup.svg";
import Styles from "./ProfileDetails.module.css";
import ProfileImage from "../ProfileImage/ProfileImage";
import ProfileForm from "../ProfileForm/ProfileForm";

const ProfileDetails = ({ title, content }) => {
  // firstName pass with props to ProfileForm
  const [firstName, setFirstName] = useState("");
  return (
    <div className={Styles.body}>
      {/* Large Screen Styles (desktop) */}
      <div className={Styles.desktop}>
        <img src={Image} alt="Image" />
        <div className={Styles.mobile_content}>
          <h1>{firstName}</h1>
        </div>
      </div>
      {/*  */}
      <div className={Styles.main}>
        <div className={Styles.text_content}>
          <h1 className={Styles.title}>{title}</h1>
          <p className={Styles.content}>{content}</p>
        </div>
        <ProfileImage />
        <ProfileForm firstName={firstName} setFirstName={setFirstName} />
      </div>
    </div>
  );
};

export default ProfileDetails;
