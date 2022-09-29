import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022"); //useState returns state and a function for updating state

  const selectYearHandler = (filteredYear) => {
    setSelectedYear(filteredYear);
    // console.log(filteredYear); //would not show year value updated by prev line, as setSelectedYear *schedules* new year to be changed.
    // During subsequent re-renders, the first value returned by useState will always be the most recent state after applying updates.
  };
  const filteredExpenses = props.items.filter(
    (x) => x.date.getFullYear() === Number(selectedYear)
  );

  let expensesContent = <p>No Expenses for this year</p>;

  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id} // Helps React identify which instances of a component have changed
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onSelectYearFilter={selectYearHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
