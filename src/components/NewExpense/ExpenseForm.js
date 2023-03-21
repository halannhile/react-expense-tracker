import React from 'react'
import './ExpenseForm.css'
import { useState } from 'react';

export default function ExpenseForm(props) {

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
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);};
    
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);};

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);};
    
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate) // parse date string and convert to Date object
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

  return (
    <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text"
                 value = {enteredTitle} 
                 onChange={titleChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" 
                value = {enteredAmount}
                min = "0.01" 
                step="0.01" 
                onChange={amountChangeHandler}/>
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" 
                value = {enteredDate}
                min = "2019-01-01" 
                max = "2025-12-31" 
                onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__action">
            <button type="submit">Add Expense</button>
        </div>
    </form>
  )
}