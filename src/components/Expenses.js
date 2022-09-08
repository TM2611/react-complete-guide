import ExpenseItem from "./ExpenseItem";
import Class from "./Card.js"

function Expenses(props) {
  const expenses = props.items;
  return (
    <Class className="expenses">
      {expenses.map(expense => (
        <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
      ))}
    </Class>
  
  );
}

export default Expenses;
