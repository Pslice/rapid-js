//Browser Object Model
//window
console.log(window.innerWidth + ',' + window.outerWidth);
window.open('https://www.foxthermal.com', '_blank');

console.log(new Date().getSeconds());
var id = setTimeout(function () {
    console.log(new Date().getSeconds());
}, 1000);
clearTimeout(id);

var interval = setInterval(function () {
    var secs = new Date().getSeconds();
    console.log(secs)
})