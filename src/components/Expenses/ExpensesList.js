import React from 'react'

import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

export default function ExpensesList(props) {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found.</h2>
    }

    return (
        // unordered list: 
        <ul className="expenses-list">
                {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    )
}
