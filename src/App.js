import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {

  const expenses = [
    {id: "e1", title: "Car Insurance", amount: 194.67, date: new Date(Date.now())},
    {id: "e2", title: "House Insurance", amount: 194.67, date: new Date(Date.now())},
    {id: "e3", title: "Health Insurance", amount: 194.67, date: new Date(Date.now())},
    {id: "e4", title: "General Insurance", amount: 194.67, date: new Date(Date.now())}
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense)
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
