let display=document.querySelector(".input");
let prevOp=undefined;
let prevVal=undefined;
let currentVal=undefined;
let inputStatus=true;
let numberEntered=false;

function add(a, b){
    return parseInt(a)+parseInt(b)
}
function subtract(a, b){

    return parseInt(a)-parseInt(b)
}
function mult(a, b){
    return parseInt(a)*parseInt(b)
}
function divide(a, b){
   
    if(b==0)
    return "aint that funny"
    else
    return parseFloat(a)/parseFloat(b)
}
function updateDis(string){
    if(inputStatus && display.textContent!=="0")
    display.textContent=display.textContent+string;
    else{
        inputStatus=true;
        display.textContent=string;
    }

}
function handleOperator(op){
        prevVal=currentVal
        currentVal=display.textContent;
       if(currentVal!==undefined && prevVal!==undefined){
        currentVal=  operate(prevOp, prevVal, currentVal)
        prevVal=undefined
       }
       prevOp=op;
        inputStatus=false 
        numberEntered=false
}
function operate(prevOp, prevVal, currentVal){
    switch(prevOp)
        {
            case "/":
                currentVal=divide(prevVal, currentVal)
              
                display.textContent=currentVal
                return currentVal
                break;
            case "*":
                currentVal=mult(prevVal, currentVal)
                display.textContent=currentVal

                return currentVal
                break; 
            case "-":
                currentVal=subtract(prevVal, currentVal)
                display.textContent=currentVal
                return currentVal
                break;
            case "+":
                currentVal=add(prevVal, currentVal)
                display.textContent=currentVal
                return currentVal
                break;
        }
}
function handleEqual(){
    prevVal=currentVal
    currentVal=display.textContent;
    operate(prevOp, prevVal, currentVal)

    currentVal=undefined

}
function handleBackspace(){
    if(display.textContent!=="0")
    display.textContent=display.textContent.slice(0, -1)
}
function handleClear(){
    display.textContent=0
    prevOp=undefined;
    prevVal=undefined;
    currentVal=undefined;
    inputStatus=true;
}


const  buttons = document.querySelectorAll('.number')

buttons.forEach(item=>{
    item.addEventListener('click', ()=>{updateDis(item.innerHTML)})
}
)
const  operators = document.querySelectorAll('.operation')

operators.forEach(operator=>{
    operator.addEventListener('click', ()=>{handleOperator(operator.innerHTML)})
}
)
const  clear = document.querySelector('.clear')
clear.addEventListener('click', ()=>{handleClear()})
const  backspace = document.querySelector('.backspace')
backspace.addEventListener('click', ()=>{handleBackspace()})
const  equal = document.querySelector('.equal')
equal.addEventListener('click', ()=>{handleEqual()})


