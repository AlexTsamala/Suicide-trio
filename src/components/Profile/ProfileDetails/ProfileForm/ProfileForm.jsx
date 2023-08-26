import React from "react";
import Styles from "./ProfileForm.module.css";

const ProfileForm = () => {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.main}>
          <form className={Styles.form}>
            <div className={Styles.firstName_input_box}>
              <label htmlFor="firstName" className={Styles.label}>
                First Name*
              </label>
              <input type="text" placeholder="e.g. John" />
            </div>
            <div className={Styles.firstName_input_box}>
              <label htmlFor="lastName" className={Styles.label}>
                Last name*
              </label>
              <input type="text" placeholder="e.g. Appleseed" />
            </div>
            <div className={Styles.firstName_input_box}>
              <label htmlFor="email" className={Styles.label}>
                Email
              </label>
              <input type="text" placeholder="e.g. email@example.com" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
