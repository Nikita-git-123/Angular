
class one{
    private tech1:string;
    private tech2:string;
    private tech3:string;

    constructor() {
        this.tech1="Angular";
        this.tech2="Spring";
        this.tech3="MySQL";
    }

    public getTech1():string {
        return this.tech1;
    }

    public getTech2():string {
        return this.tech2;
    }

    public getTech3():string {
        return this.tech3;
    }

}

let obj1:one= new one();

console.log(obj1.getTech1(), obj1.getTech2(), obj1.getTech3());
console.log("============================================");

class meanClass{
    public mean():string{
        return "MEAN Stack Development";
    }
}

class mernClass extends meanClass{
    public mern():string{
        return "MERN Stack Development";
    }
}

class mevnClass extends mernClass{
    public mevn():string{
        return "MEVN Stack Development";
    }
}

let obj:mevnClass=new mevnClass();
console.log(obj.mean());
console.log(obj.mern());
console.log(obj.mevn());
console.log("============================================");

class classOne{
    public fun_one():string{
        return "Function One !!!!"
    }
}


class classTwo extends classOne{
    public fun_two():string{
        return "Function Two !!!!";
    }
}

let one1:classOne=new classOne();
let two2:classTwo=new classTwo();
console.log(one1.fun_one());
console.log(two2.fun_two());
console.log("============================================");

class classCons{
    constructor(public arg1:string,public arg2:string,public arg3:string){

    }
}

let cons1:classCons=new classCons("Angular","Spring Boot","Oracle");
console.log(cons1.arg1,cons1.arg2,cons1.arg3);
let cons2:classCons=new classCons("React","Dotnet Web API","SQL Server");
console.log(cons2.arg1,cons2.arg2,cons2.arg3);
console.log("============================================");

class classOverRide1{
    public dbFunc():string{
        return "MYSQL Database Connected"
    }
}

class classOverRide2 extends classOverRide1{
    public dbFunc(): string {
      //  return "MONGO DB Database is Connected"
      return super.dbFunc();
    }
}

console.log(new classOverRide2().dbFunc());
console.log("============================================");

class classFunc{

    public my_func(arg1:number,arg2:number):void;
    public my_func(arg1:string,arg2:string):void;
    public my_func(arg1:boolean,arg2:boolean):void;

    public my_func(arg1:any,arg2:any):void{
        console.log("Argument1 ==> ",arg1);
        console.log("Argument2 ==> ",arg2);
    }
}
let func:classFunc=new classFunc();
func.my_func(10,10);

func.my_func("Hello","EveryOne");

func.my_func(true,false);
console.log("============================================");

class classStatic{
    static wish:string="Hello Static";

   // constructor(){
    //    this.wish="hello";
    //}

    static getWish():string{
        return this.wish;
    }
}

//new class1().wish;
// new class1().getWish();


console.log(classStatic.getWish());
console.log(classStatic.wish);
console.log("============================================");