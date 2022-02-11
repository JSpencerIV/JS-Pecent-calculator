var numField1 = document.getElementById('numField1');
var numfield2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPecentOfY');

form.addEventListener('submit', function(event) {
 
 if (!numField1.value || !numField2.value) {
     alert("Please enter values in the fields");
 } else {
 var x = parseFloat(numField1.value);
 var y = parseFloat(numField2.value);
 
     var result = x / y;
     var percent = result * 100;
     
     resultField.innerText ="Answer: " + percent + "%";
     event.preventDefault();
 }
    
});


/*first line. A variable is created-> var numberField1. Then->document. function is called to connect to html page.
Then->getElementById() function is added to collect data from numField1 variable.*/

/* when working with strings remember to use parseFloat to do math/ make computer recognize interger */


