// import ProfileHeader from "./ProfileHeader/ProfileHeader";
import Header from "./Header.jsx/Header";
import ProfileDetails from "./ProfileDetails/ProfileDetails";

const Profile = () => {
  return (
    <>
      {/* <ProfileHeader /> */}
      <Header />
      <ProfileDetails
        title="Profile Details"
        content="Add your details to create a personal touch to your profile."
      />
    </>
  );
};

export default Profile;
