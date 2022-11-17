import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameInvalid, setEnteredNameInvalid] = useState(false);
  const [enteredNameEdited, setEnteredNameEdited] = useState(false);

  const nameInputInvalid = enteredNameInvalid && enteredNameEdited

  const nameInputChangeHandler = (e) => {
    setEnteredName(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();

    setEnteredNameEdited(true)

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
