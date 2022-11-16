import React, { useState } from "react";
import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesItem from "./ExpensesItem";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    if (filteredYear === "all") {
      return props.items;
    }
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpense.length === 0 ? (
          <p>No expenses for {filteredYear}</p>
        ) : (
          filteredExpense.map((expense) => (
            <ExpensesItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
}

export default Expenses;
