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

  // to communicate up from ExpenseForm child to NewExpense parent: 
  // child is passing the value for isAddingExpenseReset to parent
  const addexpenseButtonClickHandler = isAddingExpenseReset => {
    setIsAddingExpenses(isAddingExpenseReset)
  };

  let formContent = <button onClick={clickAddExpenseHandle}>Add new expense</button>;

  if (isAddingExpense) {
    formContent = 
    <ExpenseForm onSaveExpenseData = {onSaveExpenseDataHandler} onClickButton = {addexpenseButtonClickHandler}/>
  };


  return (
    <div className = "new-expense">
        {formContent}
    </div>
  )
};


