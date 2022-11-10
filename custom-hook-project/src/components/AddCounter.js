import React from "react";
import Card from "../UI/Card";
import styles from "./AddCounter.module.css";
import Button from "../UI/Button.js";

const AddCounter = (props) => {
  const addIncreasingBtnHandler = (e) => {
    props.onAddIncBtn();
  };

  const addDecreasingBtnHandler = (e) => {
    props.onAddDecBtn();
  };
  return (
    <Card>
      <div className={styles["add-counter"]}>
        <p>Add a counter</p>
        <Button onClick={addIncreasingBtnHandler}>
          Add Increasing Counter
        </Button>
        <Button onClick={addDecreasingBtnHandler}>
          Add Decreasing Counter
        </Button>
      </div>
    </Card>
  );
};

export default AddCounter;
