const spanTotal = document.querySelector("#span-total");
const inputForm = document.querySelectorAll('form input');
const measurementContainer = document.querySelector('.measurement-container');
let area = null;
let sqRootFormula = null;
let actualCost = null;
let total = 0;

function printMeasurements(parent, width, height, quantity){
    let div = document.createElement('div');
    let widthElement = document.createElement('span');
    let heightElement = document.createElement('span');
    let quantityElement = document.createElement('span');
    let h1 = document.createElement('h1');

    widthElement.innerText = width;
    heightElement.innerText = height;
    quantityElement.innerText =  quantity;
    h1.innerText = `${widthElement.innerText} x ${heightElement.innerText}. Quantity: ${quantity}`
    div.appendChild(h1);
    
    parent.appendChild(div);
}

function findCostOfCabinet(width, height, quantity=null){
    if(quantity != ""){
        area = (width * height) * quantity;
        sqRootFormula = area/122;
        actualCost = sqRootFormula * 10.4;
        console.log(`${width} x ${height}: $${Math.round(actualCost)}`);
        printMeasurements(measurementContainer, width, height, quantity)
        total += actualCost;
        area = null;
        sqRootFormula = null;
        actualCost = null;
    } else {
    area = width * height;
    sqRootFormula = area/122;
    actualCost = sqRootFormula * 10.4;
    console.log(`${width} x ${height}: $${Math.round(actualCost)}`);
    printMeasurements(measurementContainer, width, height)
    total += actualCost;
    area = null;
    sqRootFormula = null;
    actualCost = null;
    }
}

const buttonMeasureAdd = document.querySelector('.button-add');

buttonMeasureAdd.addEventListener('click', ()=>{
    findCostOfCabinet(Number(inputForm[0].value), Number(inputForm[1].value), Number(inputForm[2].value))
    resetTotal(spanTotal, total)
})






