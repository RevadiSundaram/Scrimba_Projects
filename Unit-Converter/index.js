/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterOp = document.getElementById("output-meter");
const literOp = document.getElementById("output-liter");
const kiloOp = document.getElementById("output-kilo");

document.getElementById("submit").addEventListener("click", function(){

const inputNumber = document.getElementById("input-number").value;
    console.log(inputNumber);
    meterOp.textContent = `${inputNumber} meters = ${calcMeter(inputNumber)} feet | ${inputNumber} feet = ${calcFeet(inputNumber)} meters`;
    literOp.textContent = `${inputNumber} liters = ${calcLiter(inputNumber)} gallon | ${inputNumber} gallons = ${calcGallon(inputNumber)} kilo`;
    kiloOp.textContent = `${inputNumber} kilos = ${calcKilo(inputNumber)} pound | ${inputNumber} pounds = ${calcPound(inputNumber)} kilo`;
});

function calcMeter(number){
    return (number * 3.281).toFixed(3);
}
function calcFeet(number){
    return (number / 3.281).toFixed(3);
}
function calcLiter(number){
    return (number * 0.264).toFixed(3);
}
function calcGallon(number){
    return (number / 0.264).toFixed(3);
}
function calcKilo(number){
    return (number * 2.204).toFixed(3);
}
function calcPound(number){
    return (number / 2.204).toFixed(3);
}