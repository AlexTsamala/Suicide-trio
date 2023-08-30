import SmallLogoIcon from "../../../assets/images/logo-devlinks-small.svg";
import LargeLogoIcon from "../../../assets/images/logo-devlinks-large.svg";
import LinkIcon from "../../../assets/images/icon-link.svg";
import ProfileIcon from "../../../assets/images/icon-profile-details-header.svg";
import Preview from "../../../assets/images/icon-preview-header.svg";
import Styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
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
          <div className={Styles.link_profile_both}>
            {/* Link / Profile Icon */}
            <Link to={"../../addLinks"}>
              <li className={Styles.link_box}>
                <img src={LinkIcon} alt="" />
                <span className={Styles.link_text}>Links</span>
              </li>
            </Link>
            <Link to={"../../Profile"}>
              <li className={Styles.profile_box}>
                <img src={ProfileIcon} alt="ProfileIcon" />
                <span className={Styles.profile_text}>Profile Details</span>
              </li>
            </Link>
          </div>
          {/* Preview Icon */}
          <Link to={"../../Preview"}>
            <li className={Styles.preview_box}>
              <img
                src={Preview}
                alt="PreviewIcon"
                className={Styles.preview_icon_img}
              />
              <span className={Styles.preview_text}>Preview</span>
            </li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
