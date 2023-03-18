import ExpenseItems from "./components/ExpenseItems";

function App() {

  const expenses = [
    {id: "e1", title: "Car Insurance", amount: 194.67, date: new Date(Date.now())},
    {id: "e2", title: "House Insurance", amount: 194.67, date: new Date(Date.now())},
    {id: "e3", title: "Health Insurance", amount: 194.67, date: new Date(Date.now())},
    {id: "e4", title: "General Insurance", amount: 194.67, date: new Date(Date.now())}
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItems title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItems>
      <ExpenseItems title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItems>
      <ExpenseItems title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItems>
      <ExpenseItems title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItems>
    </div> 
  );
}

export default App;
