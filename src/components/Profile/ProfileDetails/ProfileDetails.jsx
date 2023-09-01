import { useEffect, useState } from "react";
import Styles from "./ProfileDetails.module.css";
import ProfileImage from "../ProfileImage/ProfileImage";
import ProfileForm from "../ProfileForm/ProfileForm";
import SaveIcon from "../../../assets/images/icon-changes-saved.svg";
import { Smartphone } from "../../links/smartphone/Smartphone";
import Data from "../../../../Data.json";

const ProfileDetails = ({ title, content }) => {
  const [userImageForMobile, setUserImageForMobile] = useState(null);
  const [formValidate, setFormValidate] = useState(false);
  const [currentProfile, setCurrentProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    imgUrl: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  useEffect(() => {
    const currentUserId = JSON.parse(
      localStorage.getItem("currentUser")
    )?.UserId;
    const savedProfileData = JSON.parse(
      localStorage.getItem(`profile_${currentUserId}`)
    );

    if (savedProfileData) {
      setCurrentProfile(savedProfileData);
    } else {
      const userInfo = Data.Profile.find(
        (item) => item.userId === currentUserId
      );
      if (userInfo) {
        setCurrentProfile(userInfo);
      } else {
        setCurrentProfile({
          firstName: "",
          lastName: "",
          email: "",
          imgUrl: "",
        });
      }
    }
  }, []);

  useEffect(() => {
    // Save the updated currentProfile in local storage whenever it changes
    const currentUserId = JSON.parse(
      localStorage.getItem("currentUser")
    )?.UserId;
    localStorage.setItem(
      `profile_${currentUserId}`,
      JSON.stringify(currentProfile)
    );
  }, [currentProfile]);

  const handleFormSubmit = (userData) => {
    setForm({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
    });

    // Update currentProfile with the submitted data
    setCurrentProfile({
      ...currentProfile,
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      imgUrl: userData.picture,
    });

    const currentUserData = JSON.parse(localStorage.getItem("currentUser"));
    const indexOfData = Data.Profile.findIndex(
      (user) => user.userId === currentUserData.userId
    );

    if (indexOfData !== -1) {
      Data.Profile.splice(indexOfData, 1);
    }

    Data.Profile.push({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      userId: currentUserData.UserId,
      imgUrl: userData.picture,
    });

    setUserImageForMobile(userData.picture);
    setShowAlert(true);
    setFormValidate(true); // Update formValidate to true to display the profile information
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
                  src={currentProfile.imgUrl}
                  alt="user-profile-image"
                  className={Styles.user_img}
                />
              )}

              <div className={Styles.user_text_info}>
                <div className={Styles.user_names}>
                  <h1 className={Styles.user_firstname}>
                    {currentProfile.firstName}
                  </h1>
                  <h2 className={Styles.user_lastname}>
                    {currentProfile.lastName}
                  </h2>
                </div>
                <div className={Styles.user_email_container}>
                  <span className={Styles.user_email}>
                    {currentProfile.email}
                  </span>
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
          onSave={handleFormSubmit}
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
