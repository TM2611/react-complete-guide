import { useState } from "react";

import useInput from "../hooks/use-input";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validateName = (name) => {
  return name.trim().length === 0;
};

const SimpleInput = (props) => {
  const {
    value: enteredName,
    valueInvalid: enteredNameInvalid,
    valueChangeHandler: nameChangeHandler,
    inputInvalid: nameInputInvalid,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput
  } = useInput(validateName);

  const {
    value: enteredEmail,
    valueInvalid: enteredEmailInvalid,
    valueChangeHandler: emailChangeHandler,
    inputInvalid: emailInputInvalid,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useInput(validateEmail);


  let formInvalid = false;

  if (enteredNameInvalid || enteredEmailInvalid) {
    formInvalid = true;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (enteredNameInvalid || enteredEmailInvalid) {
      return;
    }
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputInvalid
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputInvalid && <p className="error-text">Email must be valid</p>}
      </div>
      <div className="form-actions">
        <button disabled={formInvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
