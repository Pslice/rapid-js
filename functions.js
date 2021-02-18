var Employee = function (name, boss) {
    this.name = name;
    this.boss = boss;
    this.giveRaise = function (money) {
        return money++;
    }
};
var newEmployee = new Employee('PC');

console.log(typeof newEmployee); //object
console.log(newEmployee.name); //PC