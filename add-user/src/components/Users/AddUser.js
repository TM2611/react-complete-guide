import './AddUser.css'
import Button from '../UI/Button'
import { useState } from "react";

const AddUser = (props) => {
    const [username, setUsername] = useState("")
    const [age, setAge] = useState("")


    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    };

    const ageChangeHandler = (e) => {
        setAge(e.target.value);
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();
        if (age.trim().length === 0 || username.trim().length === 0) {
            debugger
            return;
        }
        const id =  Math.random().toString()
        props.onAddUser({id, username, age});

    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div>
              <label>Username</label>
              <input type="text" onChange={usernameChangeHandler}/>
              <label>Age (Years)</label>
              <input type="number" onChange={ageChangeHandler} />
            </div>
              <Button type="submit">Add User</Button>
        </form>
    );
  };
  export default AddUser;