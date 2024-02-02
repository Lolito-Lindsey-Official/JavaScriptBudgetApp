// Select the necessary HTML elements using their IDs
let income = document.getElementById('income');
let expense = document.getElementById('expenses');
let calculate = document.getElementById('calculate');
let output = document.getElementById('output');

// Event Listener for Calculate Button
calculate.addEventListener('click', function() {

    // Reset the error messages
    output.textContent = ' ';

    // Convert the string values from the DOM to numeric values
    let totalIncome = Number(income.value); 
    let totalExpenses = Number(expense.value);

    // If the income or the expense values are empty, inform the user
    if (income.value.trim() === "" || expense.value.trim() === " ") {
        output.innerText = "Please fill in all the fields.";
        return;
    }

    let difference = totalIncome - totalExpenses; // Calculate the difference

    // Display the result
    if(difference > 0) {
        output.innerText = `Budget surplus: $${difference.toFixed(2)}`; 
    } 
    else if (difference === 0) {
        output.innerText = `You have a balanced budget.`;
    }
    else {
        output.innerText = `Budget deficit of $${Math.abs(difference).toFixed(2)}`;
    }
});
