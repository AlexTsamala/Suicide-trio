import Styles from "./ProfileImage.module.css";
import UploadImage from "./icon-upload-image.svg";

const ProfileImage = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.container}>
        <h1 className={Styles.title}>Profile picture</h1>
        <div className={Styles.image_box_and_rules}>
          <div className={Styles.upload_image_box}>
            <img src={UploadImage} alt="UploadImageIcon" />
            <span className={Styles.upload_image_text}>+ Upload Image</span>
          </div>
          <p className={Styles.upload_rules}>
            Image must be below 1024x1024px. Use PNG or JPG format.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;
