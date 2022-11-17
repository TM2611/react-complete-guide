import { useState } from "react";

const SimpleInput = (props) => {
    const [enteredName, setEnteredName] = useState('')

    const nameInputChangeHandler = (e) =>{
        setEnteredName(e.target.value)
    }

    const formSubmitHandler = (e) =>{
        e.preventDefault()

        if (enteredName.trim().length === 0 ) {
            return 
        }
        console.log(enteredName);
        setEnteredName('');
    }
  return (
    <form onSubmit={formSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}/>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
