// Select the necessary HTML elements using their IDs
let income = document.getElementById('income');
let expense = document.getElementById('expenses');
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
    output.textContent = ' ';

    // Convert the string values from the DOM to numeric values
    let totalIncome = Number(income.value); 
    let totalExpenses = Number(expense.value);

    if (income.value.trim() === "" || expense.value.trim() === " ") {
        output.innerText = "Please fill in all the fields.";
        return;
    }

    // Cannot have a negative income
    if (totalIncome < 0) {
            incomeError.innerText = "Cannot have a negative income";
            return;
    }
    
    // Cannot have a negative expense
    if (totalExpenses < 0) {     
            expensesError.innerText = "Cannot have a negative expense";
            return;
    }

    let difference = totalIncome - totalExpenses; // Calculate the difference

    // Display the result
    if(difference > 0) {
        output.innerText = `You have a budget surplus of ${difference.toFixed(2)}`; 
    } 
    else if (difference === 0) {
        output.innerText = `You have a balanced budget.`;
    }
    else {
        output.innerText = `You have a budget deficit of ${Math.abs(difference).toFixed(2)}`;
    }
});
