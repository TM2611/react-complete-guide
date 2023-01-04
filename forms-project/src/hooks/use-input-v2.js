import { useState, React } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueInvalid = validateValue(enteredValue);
  const inputInvalid = valueInvalid && isTouched;
  
  const inputChangeHandler = (e) => {
    setEnteredValue(e.target.value);
  };

  const inputBlurHandler = (e) => {
    setIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    enteredValue,
    valueInvalid,
    inputInvalid,
    inputChangeHandler,
    inputBlurHandler,
    reset
  };
};

export default useInput;
