//hoisting executed lines should be done after declarations except global functions
var total = price * qty
var price = 3;
var qty = 2;
console.log(total) //NaN because price and qty become undefined before they are assigned

//primitives
qty = 2;
price = 0.99;
console.log(price * qty); //1.98
price = "0.99";

var oct = 070; //0 in front is octal
console.log(oct) //56
var hex = 0x10;
console.log(hex); //16
var e = 3.2e4;
console.log(e); //32000
var ne = 3.2e-4;
console.log(ne); //0.00032


//undefined vs null

//scopes: global, function, block