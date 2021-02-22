var OrgChart = {
    name: 'Micheal', subordinates: [
        {
            name: 'Andy', subordinates: [
                { name: 'Dwight', subordinates: [] },
                { name: 'Kevin', subordinates: [] }
            ]
        }
    ]
}
var fn = function (topEmployee) {
    console.log(topEmployee.name);
    for (var i = 0; i < topEmployee.subordinates.length; i++) {
        fn(topEmployee.subordinates[i]);
    }

}