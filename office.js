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
var fn = function showAllEmployees(topEmployee) {
    console.log(topEmployee.name);
    for (var i = 0; i < topEmployee.subordinates.length; i++) {
        showAllEmployees(topEmployee.subordinates[i]);
    }
};

var fn2 = fn;
fn2(OrgChart);