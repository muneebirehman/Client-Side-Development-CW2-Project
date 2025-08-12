$(document).ready(function() {
    
    // Function to perform all calculations and updates
    function updateBudget() {
        // Get values from all input fields
        const income = parseFloat($('#income').val()) || 0;
        const rent = parseFloat($('#rent').val()) || 0;
        const food = parseFloat($('#food').val()) || 0;
        const wifi = parseFloat($('#wifi').val()) || 0;

        // Calculate total expenses and balance
        const totalExpenses = rent + food + wifi;
        const balance = income - totalExpenses;

        // Update the display for total expenses
        $('#total-expenses-display').text(`$${totalExpenses.toFixed(2)}`);

        // Update the display for remaining balance and change color based on value
        const balanceDisplay = $('#balance-display');
        balanceDisplay.text(`$${balance.toFixed(2)}`);

        if (balance >= 0) {
            balanceDisplay.removeClass('negative').addClass('positive');
        } else {
            balanceDisplay.removeClass('positive').addClass('negative');
        }
    }

    // Call the function on page load to initialize
    updateBudget();

    // Attach the updateBudget function to all number inputs.
    // The 'input' event fires whenever the value of an <input> element changes.
    $('.input-group input[type="number"]').on('input', updateBudget);
    
});