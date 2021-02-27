'option strict'
//function stuff
function printOrder() {
    console.info('Print Order');
};
printOrder();
function calcTotal(qty, price, currency) {
    console.log(currency); //sets to undefined
    return qty * price;
};
console.info(calcTotal(2, 4.00))
var activeOrder = function () {
    console.log('Order activated!');
};
console.log(typeof activeOrder);
activeOrder(); //variable acts as function

//if statements

var total = 9;
var free = false;

if (total < 5) {
    free = true;
} else if (total < 3) {
    free = true;
} else {
    free = false;
}
console.log(free);
//switch
var orderType = 1;
var order = 'nothing';
switch (orderType) {
    case 1:
        order = 'Pizza';
        break;
    case 2:
        order = 'Ice Cream';
        break;
    default:
        order = 'Salad';
}
console.info('Salad', order);

//while loops
var lineItems = 3;
var currentItem = 0;

while (currentItem < lineItems) {
    console.log('item ' + currentItem++);
}
currentItem = 0;
do {
    currentItem++;
    console.log(currentItem);
} while (currentItem < lineItems)

//for loops
lineItems = 3;
for (var i = 0; i < lineItems; i++) {
    console.log(i);
}
//can be written like
i = 0;
for (; i < lineItems;)  //only i < lineItems is given
    console.log(i++);   //considered bad style

for (i = 0; i < lineItems; i++) {
    console.log(i);
    if (i == 1) {
        break;  //stops loop with condition
    }
}

//nested loop

for (let i = 0; i < lineItems; i++) {
    for (let j = 0; j < lineItems; j++) {
        console.log(j + i);
    }
}
//for loop with object
var lineItem = {
    product: 'Pizza',
    price: 15.99,
    qty: 8,
}
for (var field in lineItem) {
    console.log(field + ' : ' + lineItem[field]);
}
//case sensitive, no semi-colons necessary (although best practice is to have semi-colons)
/*
the obvious multiline comment
*/