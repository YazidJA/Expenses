import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [clicked, setClicked] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setClicked(false);
  };

  const addExpenseHandler = () => {
    setClicked(true);
  };

  const cancelHandler = () => {
    setClicked(false);
  };

  return (
    <div className="new-expense">
      {clicked && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelHandler}
        />
      )}
      {!clicked && <button onClick={addExpenseHandler}>Add New Expense</button>}
    </div>
  );
};

export default NewExpense;
