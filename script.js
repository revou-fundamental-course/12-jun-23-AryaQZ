document.getElementById('temperatureForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission
  
  var temperatureInput = parseFloat(document.getElementById('temperature').value);
  var unitSelection = document.getElementById('unit').value;
  
  var resultExplanation = '';
  var convertedTemperature = 0;
  
  if (unitSelection === 'celsius') {
      convertedTemperature = (temperatureInput * 9/5) + 32;
      resultExplanation = temperatureInput + ' derajat Celsius sama dengan ' + convertedTemperature + ' derajat Fahrenheit.';
  } else if (unitSelection === 'fahrenheit') {
      convertedTemperature = (temperatureInput - 32) * 5/9;
      resultExplanation = temperatureInput + ' derajat Fahrenheit sama dengan ' + convertedTemperature + ' derajat Celsius.';
  }
  
  document.getElementById('resultExplanation').textContent = resultExplanation;
  
  var formulaExplanation = 'Rumus Cara Menghitung: ';
  if (unitSelection === 'celsius') {
      formulaExplanation += 'Fahrenheit = (Celsius * 9/5) + 32';
  } else if (unitSelection === 'fahrenheit') {
      formulaExplanation += 'Celsius = (Fahrenheit - 32) * 5/9';
  }
  
  document.getElementById('formulaExplanation').textContent = formulaExplanation;
});
