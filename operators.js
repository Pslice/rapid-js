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
