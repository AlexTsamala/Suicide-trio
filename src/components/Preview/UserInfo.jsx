import Profile from "../../assets/images/user-profile-image.jpg";
import Styles from "./UserInfo.module.css";
import Github from "../../assets/images/icon-github.svg";
import Arrow from "../../assets/images/icon-arrow-right.svg";

const UserInfo = () => {
  return (
    <div className={Styles.main_container}>
      <div className={Styles.user_info}>
        <img src={Profile} alt="Profile" className={Styles.user_profile_img} />
        <h1 className={Styles.user_name}>Ben Wright</h1>
        <h2 className={Styles.user_email}>ben@example.com</h2>
      </div>

      {/* Socials */}
      <div className={Styles.social}>
        <div>
          <a href="" className={Styles.github}>
            <div style={{ alignItems: "center" }}>
              <img src={Github} alt="Github" className={Styles.github_img} />
              <h2 className={Styles.github_text}>Github</h2>
            </div>
            <img src={Arrow} alt="Arrow" />
          </a>
        </div>

        <div>
          <a href="" className={Styles.github}>
            <div style={{ alignItems: "center" }}>
              <img src={Github} alt="Github" className={Styles.github_img} />
              <h2 className={Styles.github_text}>Github</h2>
            </div>
            <img src={Arrow} alt="Arrow" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
