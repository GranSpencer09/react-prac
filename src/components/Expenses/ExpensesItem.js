import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesDate from "./ExpensesDate";
import "./ExpensesItem.css";

function ExpensesItem(props) {
  const [title, setTitle] = useState(props.title);
  function changeTitleClickHandler() {
    setTitle("update");
    console.log("props.title");
  }
  return (
    <Card className="expense-item">
      <ExpensesDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={changeTitleClickHandler}>Change</button>
    </Card>
  );
}

export default ExpensesItem;
