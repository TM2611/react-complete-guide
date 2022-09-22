import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const expenses = props.items;
  const [selectedYear, setSelectedYear] = useState('2022'); //useState returns state and a function for updating state
  const selectYearHandler = (filteredYear) => {
    setSelectedYear(filteredYear);
    // console.log(filteredYear); //shows old year value, as setSelectedYear *schedules* new yearto be changed
  };


  return (
    <div>
      <ExpensesFilter selected={selectedYear} onSelectYearFilter={selectYearHandler} />
      <Card className="expenses">
        {expenses.map((expense) => (
          <ExpenseItem
            key={expense.id} // Helps React identify which instances of a component have changed
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
