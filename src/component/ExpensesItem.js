import ExpensesDate from "./ExpensesDate";
import "./ExpensesItem.css";

function ExpensesItem(props) {
  return (
    <div className="expense-item">
      <ExpensesDate date={props.date} />
      <div>
        <h2 className="expense-item__description">{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpensesItem;
