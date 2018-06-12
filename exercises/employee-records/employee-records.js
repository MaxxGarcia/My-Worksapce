employees = [];

var Employee = function(name, jobTitle, salary){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
}
Employee.prototype.printEmployeeForm = function(){
    console.log(this)
};

var maxx = new Employee("Maxx", "Assistant to the Assistant Branch Manager", "1$/hr");
employees.push(maxx);
var amelia = new Employee("Amelia", "Da Boss", "2$/hr");
employees.push(amelia);
var andrew = new Employee("Andrew", "Assistant Branch Manager", "10$/hr")
andrew.status = "Part Time";
employees.push(andrew);

andrew.printEmployeeForm();
console.log(employees)