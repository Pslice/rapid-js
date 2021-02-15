var n = 42;
var s = "Patrick";
var b = true;

var a = n; //copies n to new memory location

var o = {
    name: 'pat'
};
var o2 = o; //objects share the reference in memory
o2.name = 'Tim'; //this will change o too

var blog = {
    name: 'PC build'
};
var blogUpdated = blog;
blogUpdated.name = 'ThermalTake';
console.log(blog.name); //ThermalTake from the updated version

//array fundamentals
//var entries  = new Array('PC','MC','TC');
var entries = Array('PC', true, 17);
console.log(entries instanceof Array);
var arrEntries = ['PC', 'TC', 'MC'];
console.log(arrEntries[3]);//undefined with no exception thrown
var blankArray = [, , ,];
console.log(blankArray.length)//3 in most browsers except 4 in older versions of IE
entries[42] = 'Shacool';
console.log(entries.length);//43 assigning a value to 42 created all the entries in between as blank
