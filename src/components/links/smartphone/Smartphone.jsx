import React from "react";
import Styles from "./smartphone.module.css";
import smartPhoneIcon from "../../../assets/images/illustration-phone-mockup.svg";

export const Smartphone = () => {
  return (
    <div className={Styles.smartphoneCont}>
      <img className={Styles.smartphone} src={smartPhoneIcon}></img>
    </div>
  );
};
