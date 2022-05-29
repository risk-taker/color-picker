import React from "react";
import SelectedColorDiv from "../../components/selectedColorDiv/SelectedColorDiv";
import styles from "./Colors.module.css";
import { useState } from "react";

// blue=#322aa5
// green=#44a52a
// orange=#a5992a
// red=#a52a34
// pink=#d634bd

const Colors = () => {
  const [selectedColor, setSelectedColor] = useState("#322aa5");

  const changeColor = (id, e) => {
    console.log("clicked");
    if (id === 1) {
      setSelectedColor("#322aa5");
    }
    if (id === 2) {
      setSelectedColor("#44a52a");
    }
    if (id === 3) {
      setSelectedColor("#a5992a");
    }
    if (id === 4) {
      setSelectedColor("#a52a34");
    }
    if (id === 5) {
      setSelectedColor("#d634bd");
    }
  };

  return (
    <>
      <SelectedColorDiv colorPickerOption={selectedColor} />
      <div className={`${styles.grid}`}>
        <div
          className={`${styles.gridItem1}`}
          onClick={(e) => changeColor(1, e)}
        ></div>
        <div
          className={`${styles.gridItem2}`}
          onClick={(e) => changeColor(2, e)}
        ></div>
        <div
          className={`${styles.gridItem3}`}
          onClick={(e) => changeColor(3, e)}
        ></div>
        <div
          className={`${styles.gridItem4}`}
          onClick={(e) => changeColor(4, e)}
        ></div>
        <div
          className={`${styles.gridItem5}`}
          onClick={(e) => changeColor(5, e)}
        ></div>
      </div>
    </>
  );
};

export default Colors;
