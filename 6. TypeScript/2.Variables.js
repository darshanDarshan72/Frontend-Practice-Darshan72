var NewClass = /** @class */ (function () {
    function NewClass() {
        // Global variable
        this.num1 = 234;
    }
    NewClass.prototype.myFunction = function (name) {
        // Local variables
        var num2 = 22;
        return "Hello, my friend" + name + num2;
    };
    // Static variables
    NewClass.count = 0;
    return NewClass;
}());
var newObj = new NewClass();
console.log(newObj.myFunction("Darshan"));
