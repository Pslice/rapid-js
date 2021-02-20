(function () {
    console.log('IIFE');
});

var app = {};
var Jquery = {};
(function (ns, $) {
    ns.name = 'None';
    console.log($ === Jquery);
})(app, Jquery);

+function () {
    var employeeName = 'Jill';
    console.log('Executed');
}();

console.log(employeeName);