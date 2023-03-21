import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

// dummy data to initialize our data with
const DUMMY_EXPENSES = [
  {id: "e1", title: "Car Insurance", amount: 194.67, date: new Date(Date.now())},
  {id: "e2", title: "House Insurance", amount: 194.67, date: new Date(Date.now())},
  {id: "e3", title: "Health Insurance", amount: 194.67, date: new Date(Date.now())},
  {id: "e4", title: "General Insurance", amount: 194.67, date: new Date(Date.now())}
];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // note: since the new array should depend on the previous state of the array, this approach is not recommended
    // setExpenses([expense, ...expenses])
    
    // recommended approach:
    // spread operator can also be used in arrays, not just objects
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
