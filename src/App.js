import Expenses from "./components/Expenses";

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
      <Expenses items={[expenses[0]]}/>
      <Expenses items={[expenses[1]]}/>
      <Expenses items={[expenses[2]]}/>
      <Expenses items={[expenses[3]]}/>
    </div> 
  );
}

export default App;
