// Variables:
let numberString = "";
let operator = "";
let screen = "";
let numbers = [];
let operators = [];
let i = 0;
let ii = 0;

//DOM(s)
let screenTextDOM = document.querySelector('#screenText');
let oneDOM = document.querySelector('#one').onclick = (event) => {
    numberBtn(1);
}
let twoDOM = document.querySelector('#two').onclick = (event) => {
    numberBtn(2);
}
let threeDOM = document.querySelector('#three').onclick = (event) => {
    numberBtn(3);
}
let fourDOM = document.querySelector('#four').onclick = (event) => {
    numberBtn(4);
}
let fiveDOM = document.querySelector('#five').onclick = (event) => {
    numberBtn(5);
}
let sixDOM = document.querySelector('#six').onclick = (event) => {
    numberBtn(6);
}
let sevenDOM = document.querySelector('#seven').onclick = (event) => {
    numberBtn(7);
}
let eightDOM = document.querySelector('#eight').onclick = (event) => {
    numberBtn(8);
}
let nineDOM = document.querySelector('#nine').onclick = (event) => {
    numberBtn(9);
}
let zeroDOM = document.querySelector('#zero').onclick = (event) => {
    numberBtn(0);
}
let pointDOM = document.querySelector('#point').onclick = (event) => {
    numberBtn('.');
}
let additionDOM = document.querySelector('#addition').onclick = (event) => {
    operatorBtn("+");
    convertNumber(numberString);
    numberString = "";
}
let multiplicationDOM = document.querySelector('#multiplication').onclick = (event) => {
    operatorBtn("×");
    convertNumber(numberString);
    numberString = "";
}
let divisionDOM = document.querySelector('#division').onclick = (event) => {
    operatorBtn("÷");
    convertNumber(numberString);
    numberString = "";
}
let subtractionDOM = document.querySelector('#subtraction').onclick = (event) => {
    operatorBtn("-");
    convertNumber(numberString);
    numberString = "";
}
let equalSignDOM = document.querySelector('#equalSign').onclick = (event) => {
    convertNumber(numberString);
    calculation();
    numberString = "";
}

//-----------------------FUNCTIONS-----------------------------

//Calculation
function calculation(){
    let result = numbers[0];
    for (let i = 0; i < operators.length; i++) {
        const operator = operators[i];
        const nextNumber = numbers[i + 1];
        // Perform the operation based on the operator
        if (operator === '+') {
            result += nextNumber;
        } else if (operator === '-') {
            result -= nextNumber;
        } else if (operator === '×') {
            result *= nextNumber;
        } else if (operator === '÷') {
            result /= nextNumber;
        }
    }
    clearScreen();
    screenTextDOM.innerHTML = result;
}

//Operator Button's Processes
function operatorBtn(operatorBtn){
    reviseScreenText(operatorBtn);
    operators[ii] = operatorBtn;
    ii++;
}

//Number Button's Processes
function numberBtn(number){
    numberString = numberString+number;
    reviseScreenText(number);
}

//Revising Screen Text
function reviseScreenText(text){
    screen = screenTextDOM.innerHTML;
    screenTextDOM.innerHTML = screen + text;
    screen = ""; //Clear the "screen" variable for the new data
}

//Converting string into a number
function convertNumber(stringNumber){
    number = Number(stringNumber);
    numbers[i] = number;
    i++;
}

//Clear the screen
function clearScreen(){
    screenTextDOM.innerHTML = "";
}

//Clear the number array
function clearNumberArray(){
    numbers = [];
    operators = [];
    i = 0;
    ii = 0;
}

//Delete
function deleteScreen(){
    let screenText = screenTextDOM.innerHTML;
    let lastIndexOfText = screenText.lastIndexOf("");
    let newText = screenText.slice(0,lastIndexOfText-1);
    if(screenText.slice(-1)==='+'||
        screenText.slice(-1) === '-' ||
        screenText.slice(-1) === '×' ||
        screenText.slice(-1) === '÷' ){
        operators[ii-1] = "";
        ii-=1;
        reverseConvertNumber();
    }else if (screenText.slice(-1) === '0' ||
        screenText.slice(-1) === '1' ||
        screenText.slice(-1) === '3' ||
        screenText.slice(-1) === '4' ||
        screenText.slice(-1) === '5' ||
        screenText.slice(-1) === '6' ||
        screenText.slice(-1) === '7' ||
        screenText.slice(-1) === '8' ||
        screenText.slice(-1) === '9' ||
        screenText.slice(-1) === '.') {
        numberString = numberString.slice(0, numberString.lastIndexOf("")-1);
        console.log("number string: " + numberString);
        console.log("numbers: " + numbers);
    }
    
   clearScreen();
   reviseScreenText(newText);
}

//Reverse converting the string into an integer
function reverseConvertNumber(){ 
    numberString = numbers[i-1];
    numbers.splice(i-1);//Emptying the array
    i-=1;
}

//Window Loading Processes
window.onload= ()=>{
    reviseScreenText("");
}