import React, { useRef, useState } from "react";
import styles from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
    const [invalidAmount, setInvalidAmount] = useState(false);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmountStr = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmountStr

    if(enteredAmountStr.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
        setInvalidAmount(true);
        return;
    }
    props.onAddToCart(enteredAmountNumber);

  };
  return (
    <div>
      <form className={styles.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Amount"
          inputConfig={{
            type: "number",
            id: `amount_${props.id}`,
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
        {invalidAmount && <p>Please enter a valid amount (1-5)</p>}
      </form>
    </div>
  );
};

export default MealItemForm;
