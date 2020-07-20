// create variables for the welcome message
var greeting = "howdy";
var name = "molly";
var message = ', please check your order:';
// concatenate the three variables above to create the welcome message
var welcome = greeting + ' ' + name + message;

//create variables to hold details about the sign
var sign = 'montague House';
var tiles = sign.length;
var subTotal = tiles * 5;
var shipping = 7;
var grandTotal = subTotal + shipping;

//get element that has id of greeting
var el = document.getElementById('greeting');
//replace content of that element with the personalised welcome
el.textContent = welcome;

//get the element that has the id of userSign then update its contents
var elSign =document.getElementById('userSign');
elSign.textContent = sign;

//get the element that has the id of tiles then update is contents
var elTile = document.getElementById('tiles');
elTile.textContent = tiles;

//get the element that has the id of subtotal then update its contents
var elSubTotal = document.getElementById('subTotal');
elSubTotal.textContent = "$" + subTotal;

//get the element that has an id of shipping then update its contents
var elShipping = document.getElementById('shipping');
elShipping.textContent = "$" + shipping;

//get the element that has an id of grandTotal and then update its contents
var elGrandTotal = document.getElementById('grandTotal');
elGrandTotal.textContent = '$' + grandTotal;

