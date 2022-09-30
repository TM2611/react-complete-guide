import ExpenseForm from "./ExpenseForm";
import { useState } from "react";
import "./NewExpense.css";

//Receives expense data from child (ExpenseForm), assigns the expense an ID and passes expense to parent (App)
const NewExpense = (props) => {
    
    const onAddNewExpense = () => {
        setNewExpenseContent(expenseForm)
    }
    const addExpenseButton = <button onClick={onAddNewExpense}>Add Expense</button>;
    const [newExpenseContent, setNewExpenseContent] = useState(addExpenseButton)
    
    const submitExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setNewExpenseContent(addExpenseButton);
  };

  const cancelExpenseHandler = () => {
    setNewExpenseContent(addExpenseButton);
  };

  const expenseForm = (
    <ExpenseForm onCancelExpense={cancelExpenseHandler} onSubmitExpenseData={submitExpenseDataHandler} />
  );

  return <div className="new-expense">{newExpenseContent}</div>;
};

export default NewExpense;
