abstract class abs1{
    public fun_one():string{
        return "Function one";
    }

    abstract fun_two():string;
}

class abs2 extends abs1 {
    public fun_two():string{
        return "Function two";
    }
}

console.log(new abs2().fun_one());
console.log("==========");
console.log(new abs2().fun_two());