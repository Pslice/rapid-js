console.log(typeof this); //object

var employee = {
    name: 'Jeff',
    updateSalary: function () {
        console.log(this);
    }
}