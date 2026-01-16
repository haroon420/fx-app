// src/js/app.js

// Import the conversion function from a separate file.
// This keeps the conversion logic separate from the UI logic.
import { convert } from "./converter.js";

// Get references to the HTML elements used in the application
const amountInput = document.getElementById("amount");
const fromSelect = document.getElementById("from-currency");
const toSelect = document.getElementById("to-currency");
const convertButton = document.getElementById("convert-button");
const resultEl = document.getElementById("result");

// Hardcoded example exchange rates used for the MVP.
const rates = {
  "USD->EUR": 0.9,
  "USD->GBP": 0.78,
  "EUR->USD": 1.11,
  "EUR->GBP": 0.86,
  "GBP->USD": 1.28,
  "GBP->EUR": 1.16,
};

// Formats a numeric value to two decimal places. 
// This is used to display currency values consistently in the UI.

function formatMoney(value) {
  return Number(value).toFixed(2);
}

// Event listener for the "Convert" button. // This function runs whenever the user clicks the button.
convertButton.addEventListener("click", () => {
  
// Read the user-entered amount and convert it to a number
  const amount = Number(amountInput.value);
// Get the selected source and target currencies  
  const from = fromSelect.value;
  const to = toSelect.value;

// Input validation: 
// Checks that a value has been entered and that is is a number and the amnount if greater than zero
  if (!amountInput.value || Number.isNaN(amount) || amount <= 0) {
    resultEl.textContent = "Please enter a valid amount.";
    return;
  }

// Special case: If the source and target currencies are the same the no conversion is required.  
  if (from === to) {
    resultEl.textContent =
  `Result: ${formatMoney(converted)} (${from} to ${to}) ` +
  `at rate ${rate}`;
  }
// Build a lookup key to find the correct exchange rate. 
// Example: "USD->GBP"
  const key = `${from}->${to}`;
  const rate = rates[key];

// Error handling: 
// If no rate exists for the selected currency pair, show an error message. 
// This reflects a known limitation of the MVP.  
  if (!rate) {
    resultEl.textContent = "No rate available for this pair (MVP limitation).";
    return;
  }
// This separation makes the code easier to test.
  const converted = convert(amount, rate);
// Display the final converted amount to the user.  
  resultEl.textContent = `Result: ${formatMoney(converted)} (${from} to ${to})`;
});
