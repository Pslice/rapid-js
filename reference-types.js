var n = 42;
var s = "Patrick";
var b = true;

var a = n; //copies n to new memory location

var o = {
    name: 'pat'
}
var o2 = o; //objects share the reference in memory
o2.name = 'Tim'; //this will change o too