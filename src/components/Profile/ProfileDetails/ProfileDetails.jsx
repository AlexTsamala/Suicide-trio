import { useState } from "react";
import Image from "./illustration-phone-mockup.svg";
import Styles from "./ProfileDetails.module.css";
import ProfileImage from "../ProfileImage/ProfileImage";
import ProfileForm from "../ProfileForm/ProfileForm";

const ProfileDetails = ({ title, content }) => {
  // firstName pass with props to ProfileForm
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [userImageForMobile, setUserImageForMobile] = useState(null);

  return (
    <div className={Styles.body}>
      {/* Large Screen Styles (desktop) */}
      <div className={Styles.desktop}>
        <img src={Image} alt="Image" />
        <div className={Styles.mobile_content}>
          <h1 className={Styles.mobile_content_firstName}>{firstName}</h1>
          {/* <h1 className={Styles.mobile_content_lastName}>{lastName}</h1> */}
          <h2>{email}</h2>
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
        />
      </div>
    </div>
  );
};

export default ProfileDetails;
