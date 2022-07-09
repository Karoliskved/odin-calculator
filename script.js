let display=document.querySelector(".input");
let prevOp=undefined;
let prevVal;
let currentVal;
let inputStatus=true;
var testing=0
let op

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
    return parseInt(a)/parseInt(b)
}
function updateDis(string){
    if(inputStatus==true)
    display.innerText=display.innerText+string;
    else{
         inputStatus=true;
        display.innerText=string;
    }

}
function handleOperator(op){
        
        prevVal=currentVal
        currentVal=display.innerText;
       if(currentVal!==undefined && prevVal!==undefined){
        currentVal=  operate(prevOp, prevVal, currentVal)
        prevVal=undefined
        
       }
       prevOp=op;
        inputStatus=false
    
    console.log("previous val "+prevVal)
    console.log("current " +currentVal)

    console.log(op)
   
    
}
function operate(prevOp, prevVal, currentVal){

    switch(prevOp)
        {
            case "/":
                currentVal=divide(prevVal, currentVal)
                display.innerText=currentVal
                return currentVal
                break;
            case "*":
                currentVal=mult(prevVal, currentVal)
                display.innerText=currentVal
                return currentVal
                break; 
            case "-":
                currentVal=subtract(prevVal, currentVal)
                display.innerText=currentVal
                return currentVal
                break;
            case "+":
                currentVal=add(prevVal, currentVal)
                display.innerText=currentVal
                return currentVal
                break;
        }

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

/*const btns = document.querySelectorAll('button')

btns.forEach(btn => {

   btn.addEventListener('click', event => {
        console.log( event.target.id );
   });

});*/