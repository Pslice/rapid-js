var value = parseInt('12b1234');
console.log(value)//12

value = parseInt(' ');
console.log(value)//NaN

value = parseInt('C000', 16);
console.log(value)//49152