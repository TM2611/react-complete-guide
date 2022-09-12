import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  const clickHandler = (e) => {
    console.log("Change title clicked");
  };

  return (
    <Card className="expense-item">       
        <ExpenseDate date={props.date}/>  {/*props.x is an OBJECT with just the 'x' property  */}
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{`£${props.amount}`}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
