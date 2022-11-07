import React from "react";
import styles from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  return (
    <div>
      <form className={styles.form}>
        <Input label="Amount" inputConfig={{type:"number", id:`amount_${props.id}`, min:'1', max:'5', step:'1', defaultValue:'1'}} />
        <button>+ Add</button>
      </form>
    </div>
  );
};

export default MealItemForm;
