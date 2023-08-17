let displayValue = '';
function apendtodisplay(value) {
    displayValue += value;
    document.getElementById('show').value = displayValue;
  }
  function calculate() {
    try {
      const result = eval(displayValue);
      displayValue = result.toString();
      document.getElementById('show').value = displayValue;
    } catch (error) {
      displayValue = '';
      document.getElementById('show').value = 'Error';
    }
  }
  function clearDisplay() {
    displayValue = '';
    document.getElementById('show').value = displayValue;
  }
  function squareroot(){ 
    try{
    const val = Math.sqrt(displayValue);
    displayValue = val.toString();
    document.getElementById('show').value = displayValue;
} catch (error) {
    displayValue = '';
    document.getElementById('show').value = 'Error';
  }
  }
  function percentage(){
    try{
    displayValue = eval(displayValue)/100;

    document.getElementById('show').value = displayValue;
} catch (error) {
    displayValue = '';
    document.getElementById('show').value = 'Error';
  }
  }
  function removelast(){
    displayValue = displayValue.slice(0,-1);
    document.getElementById('show').value = displayValue;
  }
  
  