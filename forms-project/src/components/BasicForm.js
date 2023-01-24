import useInput from "../hooks/use-input-reducer";

const isValidName = (name) => {
  return name.trim().length !== 0;
};

const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const BasicForm = (props) => {
  const {
    enteredValue: enteredFname,
    enteredValueInvalid: enteredFnameInvalid,
    inputInvalid: fNameInputInvalid,
    inputChangeHandler: fNameChangeHandler,
    inputBlurHandler: fNameBlurHandler,
    reset: resetFname
  } = useInput(isValidName);

  const {
    enteredValue: enteredLname,
    enteredValueInvalid: enteredLnameInvalid,
    inputInvalid: lNameInputInvalid,
    inputChangeHandler: lNameChangeHandler,
    inputBlurHandler: lNameBlurHandler,
    reset: resetLname
  } = useInput(isValidName);

  const {
    enteredValue: enteredEmail,
    enteredValueInvalid: enteredEmailInvalid,
    inputInvalid: emailInputInvalid,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail
  } = useInput(isValidEmail);

  const onSubmitHandler = (e) => {
    if (enteredFnameInvalid || enteredLnameInvalid || enteredEmailInvalid) {
        return;
    }
    resetFname();
    resetLname();
    resetEmail();

  };

  const firstNameClasses = fNameInputInvalid? 'form-control invalid' : 'form-control'
  const lastNameClasses = lNameInputInvalid? 'form-control invalid' : 'form-control'
  const emailClasses = emailInputInvalid? 'form-control invalid' : 'form-control'

  let formInvalid = fNameInputInvalid || lNameInputInvalid || emailInputInvalid;

  return (
    <form>
      <div className="control-group">
        <div className={firstNameClasses}>
          <label htmlFor="fname">First Name</label>
          <input
            type="text"
            id="fname"
            value={enteredFname}
            onChange={fNameChangeHandler}
            onBlur={fNameBlurHandler}
          />
          {fNameInputInvalid && <p className="error-text">First name must not be empty</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            value={enteredLname}
            onChange={lNameChangeHandler}
            onBlur={lNameBlurHandler}
          />
          {lNameInputInvalid && <p className="error-text">Last name must not be empty</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
            type="text"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailInputInvalid && <p className="error-text">Please enter a valid email</p>}
      </div>
      <div className="form-actions">
        <button disabled={formInvalid} onSubmit={onSubmitHandler}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
