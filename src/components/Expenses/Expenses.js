import React, { useState } from "react";
import ExpenseItem from "./../ExpenseItem/ExpenseItem";
import ExpensesFilter from "./../ExpensesFilter/ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("2021");

  const filteredExpenses = props.expenses.filter(
    (item) => item.date.getFullYear() === Number(year)
  );

  const mappedExpenses = filteredExpenses.map((item) => (
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />
  ));

  const filterHandler = (selectedYear) => {
    setYear(selectedYear);
  };

  return (
    <div className="expenses">
      <ExpensesFilter onFilter={filterHandler} selected={year} />
      <ExpensesChart expenses={filteredExpenses} />
      {filteredExpenses.length === 0 && <h1>NO EXPENSES FOUND FOR THIS YEAR</h1>}
      {filteredExpenses.length > 0 && mappedExpenses}
    </div>
  );
};

export default Expenses;
