import React from "react";
import Styles from "./ProfileForm.module.css";

const ProfileForm = ({ firstName, setFirstName }) => {
  return (
    <>
      <div className={Styles.container}>
        <div className={Styles.main}>
          <form className={Styles.form}>
            <div className={Styles.firstName_input_box}>
              {/* FirstName */}
              <label htmlFor="firstName" className={Styles.label}>
                First Name*
              </label>
              <input
                type="text"
                placeholder="e.g. John"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={Styles.input}
              />
            </div>
            <div className={Styles.firstName_input_box}>
              {/* LastName */}
              <label htmlFor="lastName" className={Styles.label}>
                Last name*
              </label>
              <input
                type="text"
                placeholder="e.g. Appleseed"
                className={Styles.input}
              />
            </div>
            <div className={Styles.firstName_input_box}>
              {/* Email */}
              <label htmlFor="email" className={Styles.label}>
                Email
              </label>
              <input
                type="text"
                placeholder="e.g. email@example.com"
                className={Styles.input}
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
