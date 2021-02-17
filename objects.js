var project = new Object(); //constructor function
project.name = "Project PAT";
console.log(project.name); //dot notation

project.securityLevel = 3;
project.updateDue = function () {
    return today();
}
console.log(project['securityLevel']); //bracket notation
var securityField = 'securityLevel';
console.log(project[securityField]);//using a variable to show notation

var probject = {
    name: 'Emperor',
    securityLevel: 2,
    due: function () {
        return true;
    },
    team: ['Hol Horse', 'Patrick', 'Jotaro']
};
console.log(probject.name);
console.log(probject.team[1]);

var tasker = {
    tasks: [
        {
            name: 'task 1'
        },
        {
            name: 'task 2'
        }
    ]
}
console.log(tasker.tasks[1].name);
//prototype
var protoProject = anyObject;
protoProject.someFunction();
//this will look at protoProject.prototype.prototype->until it finds the function

var protoman = {
    name: 'Megaman'
};
console.log(protoman.toString()); //[object Object]
console.log(typeof Object.prototype); //object
console.log(typeof Object.prototype.toString); //function

console.log(protoman.prototype); //undefined
console.log(protoman.__proto__); //object, but should never use __proto__
console.log(protoman.__proto__ === Object.prototype); //true every object has this prototype object

var secretProject = Object.create(project); //create method
console.log(secretProject.securityLevel); //3

console.log(secretProject.__proto__ === Object.prototype);//this is false because the create method will create an object with prototype but it will be another level in based on the original.
console.log(secretProject.__proto__.__proto__ === Object.prototype);//true

