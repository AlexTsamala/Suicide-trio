import React from "react";
import Styles from "./smartphone.module.css";
import smartPhoneIcon from "../../../assets/images/illustration-phone-mockup.svg";
import arrowR from "../../../assets/images/icon-arrow-right.svg";
export const Smartphone = () => {
  return (
    <div className={Styles.smartphoneCont}>
      <img className={Styles.smartphone} src={smartPhoneIcon}></img>
      <div className={Styles.platformsArr}>
        <div className={`${Styles.platform} ${Styles.github}`}>
          Github
          <img src={arrowR}></img>
        </div>
        <div className={`${Styles.platform} ${Styles.frontendmentor}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              fill="#737373"
              d="M2.667 7.333v1.334h8L7 12.333l.947.947L13.227 8l-5.28-5.28L7 3.667l3.667 3.666h-8Z"
            />
          </svg>
        </div>
        <div className={`${Styles.platform} ${Styles.twitter}`}>
          <img src={arrowR}></img>
        </div>
        <div className={`${Styles.platform} ${Styles.linkedin}`}>
          <img src={arrowR}></img>
        </div>
        <div className={`${Styles.platform} ${Styles.youtube}`}>
          <img src={arrowR}></img>
        </div>
        <div className={`${Styles.platform} ${Styles.facebook}`}>
          <img src={arrowR}></img>
        </div>
        <div className={`${Styles.platform} ${Styles.twitch}`}>
          <img src={arrowR}></img>
        </div>
        <div className={`${Styles.platform} ${Styles.devto}`}>
          <img src={arrowR}></img>
        </div>
        <div className={`${Styles.platform} ${Styles.codewars}`}>
          <img src={arrowR}></img>
        </div>
        <div className={`${Styles.platform} ${Styles.freecodecamp}`}>
          <img src={arrowR}></img>
        </div>
        <div className={`${Styles.platform} ${Styles.gitlab}`}>
          <img src={arrowR}></img>
        </div>
        <div className={`${Styles.platform} ${Styles.hashnode}`}>
          <img src={arrowR}></img>
        </div>
        <div className={`${Styles.platform} ${Styles.stackoverflow}`}>
          <img src={arrowR}></img>
        </div>
        <div className={`${Styles.platform} ${Styles.codepen}`}>
          <img src={arrowR}></img>
        </div>
      </div>
    </div>
  );
};
