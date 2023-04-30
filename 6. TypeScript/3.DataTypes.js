// Number
var integer = 1232132;
var decimal = 234.23;
// Boolean
var yesno = true;
// String
var namem = "Hello, World";
// List
var days = ["Monday", "Tuesday", "Wednesday", "Thursday"];
// Array
var months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// Object
var student = {
    named: "Darshan Khairnar",
    "class": "BEMEC21364",
    college: "D.Y.Patil College of Engineering, Akurdi"
};
// Tuple
var shape = ["Triangle", 3];
// Eneum
var ddays;
(function (ddays) {
    ddays[ddays["MONDAY"] = 0] = "MONDAY";
    ddays[ddays["TUESDAY"] = 1] = "TUESDAY";
})(ddays || (ddays = {}));
;
console.log(ddays.MONDAY);
// Printing statement
console.log(student.named);
