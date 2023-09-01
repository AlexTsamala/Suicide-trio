import React, { useState } from "react";
import Styles from "./addLinks.module.css";
import { GetStarted } from "../getStarted/GetStarted";
import { Platform } from "../platform/Platform";
import { Smartphone } from "../smartphone/Smartphone";
import { v4 as uuidv4 } from "uuid";
import Data from "../../../../Data.json";

export const AddLinks = () => {
  const [platforms, setPlatforms] = useState([]);
  const [showGetStarted, setShowGetStarted] = useState(true);
  const [userPlatforms, setUserPlatforms] = useState([]);

  function handleAddBtn() {
    const myUUID = uuidv4();
    setShowGetStarted(false);
    setPlatforms([
      ...platforms,
      { value: "Github", label: "Github", input: "", id: myUUID },
    ]);
  }

  function handleSaveBtn() {
    const savedPlatforms = platforms.map((platform) => {
      return {
        value: platform.value,
        label: platform.label,
        input: platform.input,
        id: platform.id,
      };
    });

    const userData = JSON.parse(localStorage.getItem("currentUser"));
    const indexOfData = Data.Links.findIndex(
      (user) => user.userId === userData.userId
    );

    if (indexOfData >= 0) {
      Data.Links.splice(indexOfData, 1);
      Data.Links.push({
        userId: userData.UserId,
        platforms: [...savedPlatforms],
      });
    } else {
      Data.Links.push({
        userId: userData.UserId,
        platforms: [...savedPlatforms],
      });
    }
    const currentUserId = JSON.parse(
      localStorage.getItem("currentUser")
    ).UserId;
    const currentLinks = Data.Links.find(
      (item) => item.userId === currentUserId
    );
    setUserPlatforms([...savedPlatforms]);

    const newData = {
      Links: [
        ...Data.Links,
        { UserId: userData.UserId, Platforms: savedPlatforms },
      ],
    };

    // console.log(savedPlatforms);
  }

  return (
    <div className={Styles.body}>
      <div className={Styles.mainContainer}>
        <div className={Styles.smartLogoAndContent}>
          <Smartphone userPlatforms={userPlatforms} />
          <div className={Styles.contentAndSaveCont}>
            <div className={Styles.contentContainer}>
              <h1 className={Styles.customizeH1}>Customize your links</h1>
              <p className={Styles.customizeP}>
                Add/edit/remove links below and then share all your profiles
                with the world!
              </p>
              <button onClick={handleAddBtn} className={Styles.addButton}>
                + Add new link
              </button>
              {platforms.map((item, index) => (
                <Platform
                  key={index}
                  count={index + 1}
                  platforms={platforms}
                  setPlatforms={setPlatforms}
                  currentPlatform={item}
                />
              ))}
              {showGetStarted && <GetStarted />}
            </div>
            <div className={Styles.saveContainer}>
              <button
                onClick={handleSaveBtn}
                className={`${Styles.saveButton} ${
                  !showGetStarted ? Styles.visible : ""
                }`}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
