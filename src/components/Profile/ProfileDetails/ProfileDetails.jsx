import { useState } from "react";
import Image from "./illustration-phone-mockup.svg";
import Styles from "./ProfileDetails.module.css";
import ProfileImage from "../ProfileImage/ProfileImage";
import ProfileForm from "../ProfileForm/ProfileForm";
import { Smartphone } from "../../links/smartphone/Smartphone";

const ProfileDetails = ({ title, content }) => {
  // firstName pass with props to ProfileForm
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userImageForMobile, setUserImageForMobile] = useState(null);
  const [formValidate, setFormValidate] = useState(false);

  return (
    <div className={Styles.body}>
      {/* Large Screen Styles (desktop) */}
      <div className={Styles.desktop}>
        <div className={Styles.mobile_content}>
          {/* <img src={Image} alt="Image" /> */}
          {/* Import Desktop Mobile */}
          <Smartphone />
          {formValidate ? (
            <>
              <img
                src={userImageForMobile}
                alt="user-profile-image"
                className={Styles.user_img}
              />
              <div className={Styles.user_text_info}>
                <div className={Styles.user_names}>
                  <h1 className={Styles.user_firstname}>{firstName}</h1>
                  <h2 className={Styles.user_lastname}>{lastName}</h2>
                </div>
                <div className={Styles.user_email_container}>
                  <span className={Styles.user_email}>{email}</span>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
      {/*  */}
      <div className={Styles.main}>
        <div className={Styles.text_content}>
          <h1 className={Styles.title}>{title}</h1>
          <p className={Styles.content}>{content}</p>
        </div>
        <ProfileImage
          userImageForMobile={userImageForMobile}
          setUserImageForMobile={setUserImageForMobile}
        />
        <ProfileForm
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          userImageForMobile={userImageForMobile}
          setUserImageForMobile={setUserImageForMobile}
          formValidate={formValidate}
          setFormValidate={setFormValidate}
        />
      </div>
    </div>
  );
};

export default ProfileDetails;
