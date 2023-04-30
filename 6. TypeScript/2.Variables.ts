class NewClass
{
    // Global variable
    public num1:number = 234;

    // Static variables
    public static count:number = 0;

    public myFunction(name:string):string
    {
        // Local variables
        let num2:number = 22;
        return "Hello, my friend" + name + num2;
    }
}

let newObj = new NewClass();
console.log(newObj.myFunction("Darshan"));