// Class Declaration
class person
{
    public first_name:string;
    public last_name:string;
    public roll_no:number;
    public marraied:boolean;

    constructor(f:string,l:string,r:number,m:boolean)
    {
        this.first_name = f;
        this.last_name = l;
        this.roll_no = r;
        this.marraied = m;
    }

    public isMarried():boolean 
    {
        return  this.marraied;
    }
    
    public greet():string 
    {
        return "Hello, Mr " + this.first_name + " " + this.last_name;
    }
    
}

// Object creation
let p1 = new person("Darshan","Khairnar",1232,false);
console.log(p1.greet());