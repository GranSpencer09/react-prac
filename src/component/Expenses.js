import "./Expenses.css";
import ExpensesItem from "./ExpensesItem";

function Expenses(props) {
  return (
    <div className="expenses">
      <ExpensesItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      ></ExpensesItem>
      <ExpensesItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      ></ExpensesItem>
      <ExpensesItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      ></ExpensesItem>
      <ExpensesItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      ></ExpensesItem>
    </div>
  );
}

export default Expenses;
