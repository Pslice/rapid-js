var total = 5.1 + 3.3;
console.info(total) //8.3999999 floats are done quickly but are not as accurate
console.info(total.toFixed(2)); //8.4 with toFixed method

var totalSubtract = 300 - undefined;
console.log(totalSubtract);//NaN
totalSubtract = 300 - null;
console.log(totalSubtract);//300

var obj = {
    valueOf: function () { //valueOf property is recognized by operator
        return 200;
    }
}
var totalObj = 300 - obj;
console.log(totalObj);//100

var totalMultiply = 1.1 * 1.1;
console.log(totalMultiply); //1.2100000000000002
console.log(totalMultiply.toFixed(2)); //1.21
//infinity
totalMultiply = 2 * infinity; //infinity
totalMultiply = -2 * infinity //-infinity

var totalModulus = 9 % "   4   ";
console.log(totalModulus); //1 works with strings and white space

var totalIncrement = 5
var next = totalIncrement++;
console.log(totalIncrement);
var level; //not assigned
console.log(level++); //NaN
var nullNum = null;
console.log(nullNum++)//1, null is treated as 0 for numeric operations.

var num1 = parseInt('1010', 2);
var num2 = parseInt('0110', 2);
console.log(num1);
console.log(num2);
var binNum = num1 | num2;
console.log(binNum.toString(2));
var binExNum = num1 ^ num2;
var numBin = parseInt('0001', 2); //1
numBin = numBin << 2;
console.log(numBin); //4 or parseInt('0100', 2);

