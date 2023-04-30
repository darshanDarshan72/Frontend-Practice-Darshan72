var person = /** @class */ (function () {
    function person(f, l, r, m) {
        this.first_name = f;
        this.last_name = l;
        this.roll_no = r;
        this.marraied = m;
    }
    person.prototype.isMarried = function () {
        return this.marraied;
    };
    person.prototype.greet = function () {
        return "Hello, Mr " + this.first_name + " " + this.last_name;
    };
    return person;
}());
var p1 = new person("Darshan", "Khairnar", 1232, false);
console.log(p1.greet());
