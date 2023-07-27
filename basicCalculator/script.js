const display=document.querySelector('.screen');
const keys=document.querySelector('.operators');

let displayValue = '0';
let firstvalue=null;
let operator=null;
let secondValue=false;

updateDisplay();
function updateDisplay() {
    display.textContent= displayValue;
    
    console.log("aa");
}


keys.addEventListener("click",function(e){
    const element=e.target;
    if(!element.matches('button'))return;
    value=element.value;

    switch(value){
    case '+':
    case '-':
    case '*':
    case '/':
    case '=':
    case '%':
    case '-+':
    
        handleOperator(value);
        break;
    case '.':
        inputDecimal();
        break;
    case 'C':
        clear();
        break;
    default:
        inputNumber(value);
    }
        updateDisplay();
    // if(element.classList.contains('opr')){
    //     handleOperator(element.value);
    //     updateDisplay();
    //     return;
    // }
    // if(element.classList.contains('decimal')){
    //     inputDecimal();
    //     updateDisplay();
    //     return;
    // }
    // if(element.classList.contains('islemSil')){
    //     clear();
    //     updateDisplay();
    //     return;
    // }
    
    // //console.log('number',element.value);
    // inputNumber(element.value);
    // updateDisplay();
    
});
function inputNumber(num){
    

    if(secondValue){
        displayValue=num;
        secondValue=false;
    }else{
        if (displayValue === '0') {
        displayValue = num;
    } else {
        displayValue += num;
    }
    }

    // displayValue=displayValue==='0'? num: displayValue+num;
}
function inputDecimal(){
    
    if(!displayValue.includes('.')){
        displayValue +='.';
    }
}
function clear(){
    displayValue = '0';
    if(!displayValue.includes('.','-','+','*','/','=','%')){
        displayValue +='';
    }
}
function handleOperator(nextOperator){
    const value=parseFloat(displayValue);

    if(operator&& secondValue){
        operator=nextOperator;
        return;
    }

    if (firstvalue===null){
        firstvalue=value;
    }
    else if(operator){
        const result=calculate(firstvalue,value,operator);
        displayValue=`${parseFloat(result.toFixed(7))}`;
        firstvalue=result;
    }
    secondValue=true;
    operator=nextOperator;
}

function calculate(first, second, operator){
    if(operator==='+'){
        return first + second;
    }
    else if(operator==='-'){
        return first - second;
    }
    else if(operator === '*'){
        return first*second;
    }
    else if(operator === '/'){
        return first/second;
    }
    else if(operator === '%'){
        return first/second;
    }
    else if(operator === '='){
        return second;
}else{
    return 0;
}
}