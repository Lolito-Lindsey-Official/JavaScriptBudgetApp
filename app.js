// Select the necessary HTML elements using their IDs
let income = document.getElementById('income');
let expenses = document.getElementById('expenses');
let calculate = document.getElementById('calculate');
let output = document.getElementById('output');

// Event Listener for Calculate Button
calculate.addEventListener('click', function() {
    let totalIncome = Number(income.value); // User's total income
    let totalExpenses = Number(expenses.value); // User's total expenses

    let difference = totalIncome - totalExpenses; // Calculate the difference

    // Display the result
    if(difference > 0) {
        output.innerText = "You have a surplus of $" + difference.toFixed(2); 
    } 
    else if (difference === 0) {
        output.innerText = `You have a balanced budget.`;
    }
    else {
        output.innerText = "You have a deficit of $" + Math.abs(difference).toFixed(2);
    }
});
