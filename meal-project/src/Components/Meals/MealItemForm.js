import React from "react";
import styles from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = () => {
  return (
    <div>
      <form className={styles.form}>
        <Input type="number" id="qty" label="Amount" value="1" />
        <button>+ Add</button>
      </form>
    </div>
  );
};

export default MealItemForm;
