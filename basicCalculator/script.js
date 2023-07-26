const display=document.querySelector(`.screen`);
const keys=document.querySelector(`.operators`);

let displayValue = 0;


updateDisplay();
function updateDisplay() {
    display.value = displayValue;
    console.log("aa");
}


keys.addEventListener("click",function(e){
    
});