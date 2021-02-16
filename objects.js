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
