import React from "react";
import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList"
import "../src/App.css";

const App = () => {
  const [userList, setUserList] = useState("");
  const addUserHandler = (userInfo) => {
    setUserList(previousUserList => {
        return [...previousUserList, userInfo,];
    })
  };

  return (
    <div>
      <section id="add-user-form">
        <AddUser onAddUser={addUserHandler} />
      </section>
      <section id="user-list-container">
        <UserList userList={userList}/>
      </section>
    </div>
  );
};

export default App;
