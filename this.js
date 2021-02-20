console.log(typeof this); //object

var employee = {
    name: 'Jeff',
    updateSalary: function () {
        console.log(this);
    },
    newSalary: function () {
        var fn = function () {
            console.log(this);
        };
        fn();
    }
};
employee.updateSalary();//Object {name: 'Jeff'}
employee.newSalary();//window is this (logged for browsers)

var Address = function (line1) {
    this.line1 = line1;
};
Address.prototype.updateZip = function () {
    console.log(this);
};
var addr = new Address('399 reservation');
addr.updateZip();

var zipCode = function (newZip, country) {
    console.log(this);
}
var zip = {
    zip: '93933'
}
zipCode.call(zip, '93955', 'US');//call
zipCode.apply(zip, ['93955', 'US']);//use apply to pass array as arguments

var salaryUpdater = function () {

}