import { useState, React } from "react";

const useInput = (isValidValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueInvalid = !isValidValue(enteredValue);
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
