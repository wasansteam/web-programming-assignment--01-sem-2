document.addEventListener('DOMContentLoaded', () => {
    
    // Select input elements and button
    const btn = document.getElementById('calculateBtn');
    const resultDisplay = document.getElementById('totalResult');

    // Add click event listener to the button
    btn.addEventListener('click', () => {
        
        // Retrieve current values from fields
        const price = parseFloat(document.getElementById('pricePerLiter').value);
        const liters = parseFloat(document.getElementById('litersPurchased').value);

        // Validate that inputs are numbers
        if (!isNaN(price) && !isNaN(liters)) {
            // Perform total calculation
            const total = price * liters;
            
            // Output the result to the p tag, formatted to 2 decimal places
            resultDisplay.textContent = `Total Cost: £${total.toFixed(2)}`;
        } else {
            resultDisplay.textContent = "Error: Invalid Input";
        }
    });
});
