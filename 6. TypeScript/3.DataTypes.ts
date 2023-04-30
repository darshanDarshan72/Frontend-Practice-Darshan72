// Number
let integer: number = 1232132;
let decimal: number = 234.23;

// Boolean
let yesno: boolean = true;

// String
let namem: string = "Hello, World";

// List
let days: string[] = ["Monday", "Tuesday", "Wednesday", "Thursday"];

// Array
let months: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// Object
let student: {
    named:string;
    class:string;
    college:string;
} = {
  named: "Darshan Khairnar",
  class: "BEMEC21364",
  college: "D.Y.Patil College of Engineering, Akurdi",
};

// Tuple
let shape:[string,number] = ["Triangle",3];

// Eneum
enum ddays {MONDAY,TUESDAY};
console.log(ddays.MONDAY)


let somedata:any;
somedata=234;
console.log(somedata);
somedata = "mmnamd";
console.log(somedata);

// Printing statement
console.log(student.named)
