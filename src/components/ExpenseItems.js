import React from 'react';
import './ExpenseItems.css'

export default function ExpenseItems() {
  const expenseDate = new Date(2022, 2, 12);
  const expenseTitle = 'Car Insurance';
  const expenseAmpunt = 295.67;
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className = 'expense-item__price'>{expenseAmpunt}</div>
      </div>
    </div>
  )
}


