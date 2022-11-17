import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameInvalid, setEnteredNameInvalid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const nameInputInvalid = enteredNameInvalid && enteredNameTouched

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const nameInputBlurHandler = (e) => {
    setEnteredNameTouched(true);

    if (enteredName.trim().length === 0) {
        setEnteredNameInvalid(true);
        return;
      }

  };    

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setEnteredNameTouched(true)

    if (enteredName.trim().length === 0) {
      setEnteredNameInvalid(true);
      return;
    }
    setEnteredNameInvalid(false);
    console.log(enteredName);
    setEnteredName("");
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
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
