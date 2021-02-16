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