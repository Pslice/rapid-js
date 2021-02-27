var value = parseInt('12b1234');
console.log(value)//12

value = parseInt(' ');
console.log(value)//NaN

value = parseInt('C000', 16);
console.log(value)//49152

isFinite(value); true
value = Infinity;
isFinite(value); false

isNaN(value) //flase Infinity is considered a number

var path = "\\start\\";
console.log(encodeURI(path));//%5Cstart%5C

