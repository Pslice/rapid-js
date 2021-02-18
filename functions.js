var Employee = function (name) {
    this.name = name;
};
var newEmployee = new Employee('PC');

console.log(typeof newEmployee); //object
console.log(newEmployee.name); //PC