import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const expenses = props.items;
  const [selectedYear, setSelectedYear] = useState('2022');
  const selectYearHandler = (filteredYear) => {
    setSelectedYear(filteredYear);
  };

  return (
    <div>
      <ExpensesFilter selected={selectedYear} onSelectYearFilter={selectYearHandler} />
      <Card className="expenses">
        {expenses.map((expense) => (
          <ExpenseItem
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
