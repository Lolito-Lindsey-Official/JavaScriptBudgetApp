// Select the necessary HTML elements using their IDs
let income = document.getElementById('income');
let expenses = document.getElementById('expenses');
let calculate = document.getElementById('calculate');
let output = document.getElementById('output');
// Select additional HTML elements for error messages
let incomeError = document.getElementById('incomeError');
let expensesError = document.getElementById('expensesError');

// Event Listener for Calculate Button
calculate.addEventListener('click', function() {

    // Reset the error messages
    incomeError.textContent = ' ';
    expensesError.textContent = ' ';

    let totalIncome = Number(income.value); // User's total income
    let totalExpenses = Number(expenses.value); // User's total expenses

        // If the income or expense inputs are empty, let the user know
        if (income.value.trim() === '' || expenses.value.trim() === '') {
            output.innerText = "Please enter both an income and expense.";
            // Exiting the function
            return;
        }

    // Cannot have a negative income
    if (totalIncome < 0 || totalExpenses < 0) {
        if (totalIncome < 0) {
            output.innerText = "";
            incomeError.innerText = "Cannot have a negative income";
        }
    
        // Cannot have a negative expense
        if (totalExpenses < 0) {
            output.innerText = "";
            expensesError.innerText = "Cannot have a negative expense";
        }

        // Exiting the function
        return;
    }

    let difference = totalIncome - totalExpenses; // Calculate the difference

    // Display the result
    if(difference > 0) {
        output.innerText = `Awesome! You have a budget surplus of ${difference.toFixed(2)}.`; 
    } 
    else if (difference === 0) {
        output.innerText = `Well done. You have a balanced budget.`;
    }
    else {
        output.innerText = `Please note: You have a budget deficit of ${Math.abs(difference).toFixed(2)}.`;
    }
});
