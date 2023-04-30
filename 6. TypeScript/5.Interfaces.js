var employee = /** @class */ (function () {
    function employee(f, l, r, m) {
        this.first_name = f;
        this.last_name = l;
        this.roll_no = r;
        this.marraied = m;
    }
    employee.prototype.isMarrid = function () {
        return this.marraied;
    };
    employee.prototype.greet = function () {
        return "Hello " + this.first_name + " " + this.last_name;
    };
    return employee;
}());
var e1 = new employee("Darshan", "Khairnar", 124, true);
console.log(e1.isMarrid());
