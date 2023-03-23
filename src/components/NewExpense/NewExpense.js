import React, { useState } from 'react'

import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpense(props) {

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString(),
      };
      props.onAddExpense(expenseData);
  };

  const [isAddingExpense, setIsAddingExpenses] = useState(false);

  const clickAddExpenseHandle = () => {
    setIsAddingExpenses(true)
  };

  let formContent = <button onClick={clickAddExpenseHandle}>Add new expense</button>;

  if (isAddingExpense) {
    formContent = 
    <ExpenseForm onSaveExpenseData = {onSaveExpenseDataHandler}/>
  };

  return (
    <div className = "new-expense">
        {formContent}
    </div>
  )
};


