import React from "react";
import styles from "./SelectedColorDiv.module.css";

const SelectedColorDiv = (props) => {
  const { colorPickerOption } = props;
  // const colorPickerOption = "#322aa5";
  console.log(props);

  return (
    <>
      <div className={`${styles.center}`}>
        {/* <div className={`${styles.selectedColorDiv}`}>working good</div> */}
        <div
          style={{
            width: "160px",
            height: "180px",
            backgroundColor: colorPickerOption,
          }}
        ></div>
      </div>
    </>
  );
};

export default SelectedColorDiv;
