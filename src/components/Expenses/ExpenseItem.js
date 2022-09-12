import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); //useState returns state and a function for updating state

  const clickHandler = (e) => {
    setTitle('Updated');
    console.log(title) //shows old title value, as setTitle schedules new title to be changed
  };

  return (
    <Card className="expense-item">       
        <ExpenseDate date={props.date}/>  {/*props.x is an OBJECT with just the 'x' property  */}
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{`£${props.amount}`}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
