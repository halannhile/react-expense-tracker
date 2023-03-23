import React from 'react'
// import ExpenseItem from './ExpenseItem'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css'
import Card from '../UI/Card'
import { useState } from 'react'
import ExpensesList from './ExpensesList'

export default function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('All');

  let filteredExpenses = props.items;
  if (filteredYear !== 'All') {
    filteredExpenses = props.items.filter((expense) => 
      expense.date.getFullYear().toString() === filteredYear
    );
  }
  
  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
  };

  return (
      <li>
      <Card className='expenses'>

        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />

        <ExpensesList items={filteredExpenses}/>

      </Card>
      </li>
  )
}

