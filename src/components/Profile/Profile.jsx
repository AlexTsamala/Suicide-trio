import React from "react";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import ProfileDetails from "./ProfileDetails/ProfileDetails";

const Profile = () => {
  return (
    <>
      <ProfileHeader />
      <ProfileDetails
        title="Profile Details"
        content="Add your details to create a personal touch to your profile."
      />
    </>
  );
};

export default Profile;
