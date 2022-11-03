import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={selectedYear}
          onSelectYearFilter={selectYearHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList listContent={filteredExpenses}/>
      </Card>
    </div>
  );
};

export default Expenses;
