interface person{
    first_name:string;
    last_name:string;
    roll_no:number;
    marraied:boolean;

    isMarrid():boolean;
    greet():string;
}


class employee implements person
{
    public first_name: string;
    public last_name: string;
    public roll_no: number;
    public marraied: boolean;

    constructor(f:string,l:string,r:number,m:boolean)
    {
        this.first_name = f;
        this.last_name = l;
        this.roll_no = r;
        this.marraied = m;
    }
    public isMarried(): boolean {
        throw new Error("Method not implemented.");
    }

    public isMarrid(): boolean {
        return this.marraied
    }

  
    public greet(): string {
        return "Hello " + this.first_name +  " " + this.last_name ;
    }

}

let e1 = new employee("Darshan","Khairnar",124,true);

console.log(e1.isMarrid());