import React from 'react'
import ExpenseItems from './ExpenseItems'

export default function Expenses(props) {
  return (
    <div className="expenses">
        {props.items.map((expense_item) => (
        <ExpenseItems 
          title={expense_item.title} 
          amount={expense_item.amount} 
          date={expense_item.date}
        />    
      ))}    
    </div>
  )
}
