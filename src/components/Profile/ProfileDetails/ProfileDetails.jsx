import React, { useState } from "react";
import Styles from "./ProfileDetails.module.css";
import ProfileImage from "../ProfileImage/ProfileImage";
import ProfileForm from "../ProfileForm/ProfileForm";
import SaveIcon from "../../../assets/images/icon-changes-saved.svg";
import { Smartphone } from "../../links/smartphone/Smartphone";

const ProfileDetails = ({ title, content }) => {
  const [showAlert, setShowAlert] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [userImageForMobile, setUserImageForMobile] = useState(null);
  const [formValidate, setFormValidate] = useState(false);

  const handleFormSubmit = (userData) => {
    console.log("User Data:", userData);
    setForm({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
    });
    setUserImageForMobile(userData.picture);
    setShowAlert(true);
  };
  return (
    <div className={Styles.body}>
      {/* Large Screen Styles (desktop) */}
      <div className={Styles.desktop}>
        <div className={Styles.mobile_content}>
          {/* Import Desktop Mobile */}
          <Smartphone />
          {formValidate ? (
            <>
              {userImageForMobile && (
                <img
                  src={userImageForMobile}
                  alt="user-profile-image"
                  className={Styles.user_img}
                />
              )}

              <div className={Styles.user_text_info}>
                <div className={Styles.user_names}>
                  <h1 className={Styles.user_firstname}>{form.firstName}</h1>
                  <h2 className={Styles.user_lastname}>{form.lastName}</h2>
                </div>
                <div className={Styles.user_email_container}>
                  <span className={Styles.user_email}>{form.email}</span>
                </div>
              </div>
              {/* Alert */}
              {showAlert && (
                <div className={Styles.alert}>
                  <div className={Styles.alert_content}>
                    <img
                      src={SaveIcon}
                      alt="SaveIcon"
                      className={Styles.aleret_image}
                    />
                    <h4 className={Styles.alert_text}>
                      Your changes have been successfully saved!
                    </h4>
                  </div>
                </div>
              )}
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
          form={form}
          setForm={setForm}
          setShowAlert={setShowAlert}
          onSave={handleFormSubmit} // Pass the handleFormSubmit function
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
