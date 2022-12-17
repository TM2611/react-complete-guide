import { useState } from "react";
import useInput from "../hooks/use-input-v2";

const validateName = (name) => {
  return name.trim().length === 0;
};

const BasicForm = (props) => {
  const {
    enteredValue: enteredFname,
    enteredValueInvalid: enteredFnameInvalid,
    inputInvalid: fnameInputInvalid,
    inputChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetFname
  } = useInput(validateName);

  const onSubmitHandler = (e) => {
    if (enteredFnameInvalid) {
        return;
    }
    resetFname(); //enteredFname + isTouched

  };

  return (
    <form>
      <div className="control-group">
        <div className="form-control">
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            value={enteredFname}
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          />
          {fnameInputInvalid && <p>Name must not be empty</p>}
        </div>
        <div className="form-control">
          <label htmlFor="lname">Last Name</label>
          <input type="text" id="lname" />
        </div>
      </div>
      <div className="form-control">
        <label htmlFor="email">E-Mail Address</label>
        <input type="text" id="email" />
      </div>
      <div className="form-actions">
        <button onSubmit={onSubmitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
