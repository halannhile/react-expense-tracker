import React from 'react'
import './ExpenseForm.css'
import { useState } from 'react';

export default function ExpenseForm() {

    // MULTIPLE-STATE APPROACH: 

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    
    // const titleChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredTitle: event.target.value };        
    //     })
    // };

    // const amountChangeHandler = (event) => {
    //     setUserInput((prevState) => {
    //         return { ...prevState, enteredAmount: event.target.value };
    //     })
    // };

    // const dateChangeHandler = (event) => {
    //     setUserInput((prevState)=> {
    //         return { ...prevState, enteredDate: event.target.value };
    //     })
    // };

    
    // MANY SINGLE STATES APPROACH: 
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredTitle, setEnteredTitle] = useState('');

  return (
    <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min = "0.01" step="0.01" onChange={amountChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min = "2019-01-01" max = "2025-12-31" onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__action">
            <button type="submit">Add Expense</button>
        </div>
    </form>
  )
}
