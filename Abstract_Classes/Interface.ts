interface inter1{
    tech:string;
}

class interClass1 implements inter1 {
    tech:string="Angular";
}

console.log(new interClass1().tech);
console.log("==========================");

let face1:inter1={
    tech:"Spring"
}

var face2:inter1={
    tech:"Java"
}

let face3:inter1={
    tech:"JSP"
}

console.log(face1.tech);
console.log(face2.tech);
console.log(face3.tech);
console.log("==========================");   

interface inter2 {
    stack():string;
}

class interClass2 implements inter2{
    public stack(): string {
        return "Full stack .....";
    }
}

console.log(new interClass2().stack());
console.log("==========================");

let face4:inter2={
    stack:():string=> {
        return "Face4 : Inter2: Stack().... Full Stack.........."
    },
}

let face5:inter2={
    stack:():string=> {
        return "Face5 : Inter2: Stack().... Full Stack.........."
    },
}

console.log(face4.stack());
console.log(face5.stack());
console.log("==========================");


interface inter3{
    var_one:string;
}

interface inter4 extends inter3{
    var_two:string;
}

let face6:inter4={
    var_one:"Hello var1......",
    var_two:"Hello var2......"
}

console.log(face6.var_one, "===", face6.var_two);
console.log("==========================");

interface inter5{
    mean():string;
}

interface inter6 extends inter5{
    mern():string;
}

interface inter7 extends inter6{
    mevn():String;
}

let face7:inter7={
    mean:():string=>{
        return "MEAN => MONGO EXPRESSJS ANGULAR NODEJS ";
    },

    mern:():string=>{
        return "MERN => MONGO EXPRESSJS REACT NODEJS ";
    },

    mevn:():string=>{
        return "MEVN => MONGO EXPRESSJS VUEJS NODEJS ";
    }
}

console.log(face7.mean());
console.log(face7.mern());
console.log(face7.mevn());
console.log("==========================");

interface inter5{
    mean():string;
}

interface inter6 {
    mern():string;
}

interface inter7 extends inter5, inter6{
    mevn():String;
}

let face8:inter7={
    mean:():string=>{
        return "MEAN => MONGO EXPRESSJS ANGULAR NODEJS ";
    },

    mern:():string=>{
        return "MERN => MONGO EXPRESSJS REACT NODEJS ";
    },

    mevn:():string=>{
        return "MEVN => MONGO EXPRESSJS VUEJS NODEJS ";
    }
}

console.log(face8.mean());
console.log(face8.mern());
console.log(face8.mevn());
console.log("==========================");