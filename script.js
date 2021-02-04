//ticket prices
const firstClassTicketPrice = 150;
const economyClassTicketPrice = 100;

//setting up initial values
let firstClassQuantity = 0;
document.getElementById('firstClassQuantity').value = firstClassQuantity;

let ecoClassQuantity = 0;
document.getElementById('ecoClassQuantity').value = ecoClassQuantity;

let firstClassTotalPrice = Math.round(firstClassQuantity * firstClassTicketPrice);
// console.log(firstClassTotalPrice);

let ecoClassTotalPrice = Math.round(ecoClassQuantity * economyClassTicketPrice);
// console.log(ecoClassTotalPrice);

let subTotal = Math.round(firstClassTotalPrice + ecoClassTotalPrice);
document.getElementById('subTotal').innerHTML = '$' + subTotal;

let vat = (subTotal * 10)/100;
document.getElementById('vat').innerHTML = '$' + vat;

let totalTicketPrice = subTotal;
document.getElementById('total').innerHTML = '$' + totalTicketPrice;


//first class ticket increase
const firstClassPlus = document.getElementById('firstClassIncrease');
firstClassPlus.addEventListener('click', firstClassIncrease);
function firstClassIncrease(){

  if(firstClassQuantity >= 0){
    //temporaryIncreaseQuantityFC for first class temporary quantity ; FC means First Class
    let temporaryIncreaseQuantityFC = increaseQuantity(firstClassQuantity);
    firstClassQuantity = temporaryIncreaseQuantityFC;
    document.getElementById('firstClassQuantity').value = firstClassQuantity;
    firstClassTotalPrice = ticketPrice(firstClassQuantity,firstClassTicketPrice);
    // console.log(firstClassTotalPrice);
    calculateTotal();
  }

  else{
    alert('Ticket Quantity cannot be NEGATIVE.');
    document.getElementById('firstClassQuantity').value = 0;
  }
}

//first class ticket decrease
const firstClassMinus = document.getElementById('firstClassDecrease');
firstClassMinus.addEventListener('click', firstClassDecrease);
function firstClassDecrease(){
  if(firstClassQuantity <= 0){
    alert('Ticket Quantity cannot be NEGATIVE.');
    document.getElementById('firstClassQuantity').value = 0;
  }

  else{
    let temporaryDecreaseQuantityFC = decreaseQuantity(firstClassQuantity);
    firstClassQuantity = temporaryDecreaseQuantityFC;
    document.getElementById('firstClassQuantity').value = firstClassQuantity;
    firstClassTotalPrice = ticketPrice(firstClassQuantity,firstClassTicketPrice);
    // console.log(firstClassTotalPrice);
    calculateTotal();
  }
}


//economy class ticket increase
const ecoClassPlus = document.getElementById('ecoClassIncrease');
ecoClassPlus.addEventListener('click', ecoClassIncrease);
function ecoClassIncrease(){

  if(ecoClassQuantity >= 0){
    //temporaryIncreaseQuantityECO for first class temporary quantity ; ECO means economy
    let temporaryIncreaseQuantityECO = increaseQuantity(ecoClassQuantity);
    ecoClassQuantity = temporaryIncreaseQuantityECO;
    document.getElementById('ecoClassQuantity').value = ecoClassQuantity;
    ecoClassTotalPrice = ticketPrice(ecoClassQuantity,economyClassTicketPrice);
    // console.log(ecoClassTotalPrice);
    calculateTotal();
  }

  else{
    alert('Ticket Quantity cannot be NEGATIVE.');
    document.getElementById('ecoClassQuantity').value = 0;
  }

}

//economy class ticket decrease
const ecoClassMinus = document.getElementById('ecoClassDecrease');
ecoClassMinus.addEventListener('click', ecoClassDecrease);
function ecoClassDecrease(){
  if(ecoClassQuantity <= 0){
    alert('Ticket Quantity cannot be NEGATIVE.');
    document.getElementById('ecoClassQuantity').value = 0;
  }

  else{
    let temporaryDecreaseQuantityECO = decreaseQuantity(ecoClassQuantity);
    ecoClassQuantity = temporaryDecreaseQuantityECO;
    document.getElementById('ecoClassQuantity').value = ecoClassQuantity;
    ecoClassTotalPrice = ticketPrice(ecoClassQuantity,economyClassTicketPrice);
    // console.log(ecoClassTotalPrice);

    calculateTotal();
  }
}


//common functions for quantity increase and decrease
function increaseQuantity(incQuantity){
  incQuantity = incQuantity + 1;
  return incQuantity;
}

function decreaseQuantity(decQuantity){
  decQuantity = decQuantity - 1;
  return decQuantity;
}

//common function to calculate ticket price
function ticketPrice(quantity,price){
  let totalPrice = Math.round(quantity * price);
  return totalPrice;
}


//total calculation
function calculateTotal(){
  firstClassTotalPrice = Math.round(firstClassQuantity * firstClassTicketPrice);
  ecoClassTotalPrice = Math.round(ecoClassQuantity * economyClassTicketPrice);

  subTotal = firstClassTotalPrice + ecoClassTotalPrice;
  document.getElementById('subTotal').innerHTML = '$' + subTotal;

  vat = (subTotal * 10)/100;
  document.getElementById('vat').innerHTML = '$' + vat;

  totalTicketPrice = vat + subTotal;
  document.getElementById('total').innerHTML = totalTicketPrice;
}



//Show Final Output after book button press
const bookNow = document.getElementById('bookTicket');
bookNow.addEventListener('click',function(){
  document.getElementById('header-part').style.display = 'none';
  document.getElementById('main-part').style.display = 'none';
  document.getElementById('show-part').style.display = 'block';

  document.getElementById('firstClassTicket').innerHTML = 'First Class Tickets : ' + firstClassQuantity;
  document.getElementById('firstClassFinalFare').innerHTML = 'First Class Tickets Total Fare : ' + firstClassTotalPrice;
  document.getElementById('economyTicket').innerHTML = 'Economy Class Tickets : ' + ecoClassQuantity;
  document.getElementById('economyTicketFinalFare').innerHTML = 'Economy Class Tickets Total Fare : ' + ecoClassTotalPrice;
  document.getElementById('finalSubtotal').innerHTML = 'Subtotal : ' + subTotal;
  document.getElementById('finalVat').innerHTML = 'VAT : ' + vat;
  document.getElementById('finalTotal').innerHTML = 'Total Amount to be paid : ' + totalTicketPrice;
})