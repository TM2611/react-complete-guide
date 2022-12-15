import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameInvalid = enteredName.trim().length === 0;
  const nameInputInvalid = enteredNameInvalid && enteredNameTouched;

  let formInvalid = false;

  if (enteredNameInvalid) {
    formInvalid = true;
  }

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true);

    if (enteredNameInvalid) {
      return;
    }
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={formInvalid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
