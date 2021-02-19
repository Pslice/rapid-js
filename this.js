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