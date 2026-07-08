document.getElementById('convert').addEventListener('click', () => {
    // Get input values
    const amount = parseFloat(document.getElementById('amount').value);
    const fromRate = parseFloat(document.getElementById('fromCurrency').value);
    const toRate = parseFloat(document.getElementById('toCurrency').value);
  
    // Check if the input is valid
    if (isNaN(amount) || amount <= 0) {
      alert('Please enter a valid amount');
      return;
    }
  
    // Perform the conversion
    const convertedValue = (amount / fromRate) * toRate;
  
    // Display the result
    document.getElementById('convertedValue').innerText = convertedValue.toFixed(2);
  });
  