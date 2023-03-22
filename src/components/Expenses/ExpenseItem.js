// import React, { useState } from 'react';

import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

export default function ExpenseItem(props) {

  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   // state updating function
  //   // when triggered, will not only assign new value to a variable
  //   // but also trigger the Component function to be run again
  //   setTitle('Updated!');
  //   console.log(title);
  // };

  return (
    // component function: 
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  )
}









