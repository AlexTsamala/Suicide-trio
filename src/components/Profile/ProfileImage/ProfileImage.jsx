import { useState } from "react";
import Styles from "./ProfileImage.module.css";
import UploadImage from "./icon-upload-image.svg";
import { useForm } from "react-hook-form";

const ProfileImage = ({ userImageForMobile, setUserImageForMobile }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(userImageForMobile);

  const handleImageChange = (event) => {
    setUserImageForMobile(URL.createObjectURL(event.target.files[0]));
  };

  const handleUpload = () => {
    if (userImageForMobile) {
      console.log("Uploading image:", userImageForMobile);
    }
  };
  console.log(userImageForMobile);

  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.container}>
          <h1 className={Styles.title}>Profile picture</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={Styles.image_box_and_rules}>
              <div className={Styles.upload_image_box}>
                <div className={Styles.rame}>
                  {userImageForMobile && (
                    <img
                      className={Styles.user_image}
                      // src={selectedImage}
                      src={userImageForMobile}
                      alt="userImage"
                    />
                  )}
                  <div className={Styles.custom_file_input}>
                    <input
                      className={Styles.image_input}
                      type="file"
                      name="picture"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                </div>
                <img src={UploadImage} alt="UploadImageIcon" />
                <span className={Styles.upload_image_text}>+ Upload Image</span>
              </div>
              <p className={Styles.upload_rules}>
                Image must be below 1024x1024px. Use PNG or JPG format.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileImage;
