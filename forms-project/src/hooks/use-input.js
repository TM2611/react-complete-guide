import { useState, React } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueInvalid = !validateValue(enteredValue);
  const inputInvalid = valueInvalid && isTouched;

  const valueChangeHandler = (e) => {
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
    value: enteredValue,
    valueInvalid,
    valueChangeHandler,
    inputInvalid,
    inputBlurHandler,
    reset
  };
};

export default useInput;
