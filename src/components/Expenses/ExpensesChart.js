import React from 'react'
import Chart from '../Chart/Chart'

// props will be filteredExpenses here since we want to display chart by month for each year

export default function ExpensesChart(props) {
    // chartDataPoint is an array of objects
    // because Chart receives props as an object
    const chartDataPoints = [
        { label: 'Jan', value:0 },
        { label: 'Feb', value:0 },
        { label: 'Mar', value:0 },
        { label: 'Apr', value:0 },
        { label: 'May', value:0 },
        { label: 'Jun', value:0 },
        { label: 'Jul', value:0 },
        { label: 'Aug', value:0 },
        { label: 'Sep', value:0 },
        { label: 'Oct', value:0 },
        { label: 'Nov', value:0 },
        { label: 'Dec', value:0 },
    ];

    // loop through each expense item in filteredExpenses
    // add expense amount to is respective month
    for (const expense in props.expenses) {
        const expenseMonth = expense.date.getMonth(); // Jan = 0
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    // at this point, chartDataPoints has been updated with total value of expense for each month

    return (
        <Chart dataPoints={chartDataPoints} />
    )
}




