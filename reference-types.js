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

var ratings = [3, 5, 7];
console.log(ratings.join('|'));

ratings.push(5);
ratings.push(2, 4);
var firstRating = ratings.shift();
console.log(ratings.length);
console.log(firstRating);
var newRatings = ratings.concat([4, 5, 6]);
console.log(newRatings.length);
var slicedArray = newRatings.slice(1); //takes first index
slicedArray = newRatings.slice(2, 3); //takes between index 2 and 3
slicedArray = newRatings.slice(-1); //moves back one
var splicedArray = newRatings.splice(1);//
var sortedArray = [10, 9, 7, 1, 4, 3, 2];
console.log(sortedArray.sort()); //sorts by string element [1, 10, 2, 3, 4, 7, 9]

var dt = new Date('Patrick'); //will return invalid date
var realDate = new Date('02/14/2021');
var stringDate = new Date('July 7 2021');
