const display = document.getElementById('display');

const button = document.querySelectorAll('.key');
let displayValue = '';
for(key of button){
    key.addEventListener('click', (event)=>{
        buttonValue = event.target.innerText;

        if(buttonValue == 'X'){
            buttonValue = '*';
            displayValue += buttonValue;
            display.value = displayValue;
        }
        else if(buttonValue == 'C'){
            displayValue = '';
            display.value = displayValue;
        }
        else if(buttonValue == '='){
            display.value = eval(displayValue);
            displayValue = '';
        }
        else{
            displayValue += buttonValue;
            display.value = displayValue;
        }
    })
}