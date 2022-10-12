import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = (props) => {
    if (props.listContent.length === 0) {
        return <h2 className="expenses-list__fallback">No Expenses for this Year</h2>
    }
    return(
        <div className="expenses-list">
            {props.listContent.map((expense) => (
                <ExpenseItem
                  key={expense.id} // Helps React identify which instances of a component have changed
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              ))}
        </div>
    )
}

export default ExpensesList