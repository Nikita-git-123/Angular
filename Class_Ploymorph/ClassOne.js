var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var one = /** @class */ (function () {
    function one() {
        this.tech1 = "Angular";
        this.tech2 = "Spring";
        this.tech3 = "MySQL";
    }
    one.prototype.getTech1 = function () {
        return this.tech1;
    };
    one.prototype.getTech2 = function () {
        return this.tech2;
    };
    one.prototype.getTech3 = function () {
        return this.tech3;
    };
    return one;
}());
var obj1 = new one();
console.log(obj1.getTech1(), obj1.getTech2(), obj1.getTech3());
console.log("============================================");
var meanClass = /** @class */ (function () {
    function meanClass() {
    }
    meanClass.prototype.mean = function () {
        return "MEAN Stack Development";
    };
    return meanClass;
}());
var mernClass = /** @class */ (function (_super) {
    __extends(mernClass, _super);
    function mernClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    mernClass.prototype.mern = function () {
        return "MERN Stack Development";
    };
    return mernClass;
}(meanClass));
var mevnClass = /** @class */ (function (_super) {
    __extends(mevnClass, _super);
    function mevnClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    mevnClass.prototype.mevn = function () {
        return "MEVN Stack Development";
    };
    return mevnClass;
}(mernClass));
var obj = new mevnClass();
console.log(obj.mean());
console.log(obj.mern());
console.log(obj.mevn());
console.log("============================================");
var classOne = /** @class */ (function () {
    function classOne() {
    }
    classOne.prototype.fun_one = function () {
        return "Function One !!!!";
    };
    return classOne;
}());
var classTwo = /** @class */ (function (_super) {
    __extends(classTwo, _super);
    function classTwo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    classTwo.prototype.fun_two = function () {
        return "Function Two !!!!";
    };
    return classTwo;
}(classOne));
var one1 = new classOne();
var two2 = new classTwo();
console.log(one1.fun_one());
console.log(two2.fun_two());
console.log("============================================");
var classCons = /** @class */ (function () {
    function classCons(arg1, arg2, arg3) {
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.arg3 = arg3;
    }
    return classCons;
}());
var cons1 = new classCons("Angular", "Spring Boot", "Oracle");
console.log(cons1.arg1, cons1.arg2, cons1.arg3);
var cons2 = new classCons("React", "Dotnet Web API", "SQL Server");
console.log(cons2.arg1, cons2.arg2, cons2.arg3);
console.log("============================================");
var classOverRide1 = /** @class */ (function () {
    function classOverRide1() {
    }
    classOverRide1.prototype.dbFunc = function () {
        return "MYSQL Database Connected";
    };
    return classOverRide1;
}());
var classOverRide2 = /** @class */ (function (_super) {
    __extends(classOverRide2, _super);
    function classOverRide2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    classOverRide2.prototype.dbFunc = function () {
        //  return "MONGO DB Database is Connected"
        return _super.prototype.dbFunc.call(this);
    };
    return classOverRide2;
}(classOverRide1));
console.log(new classOverRide2().dbFunc());
console.log("============================================");
var classFunc = /** @class */ (function () {
    function classFunc() {
    }
    classFunc.prototype.my_func = function (arg1, arg2) {
        console.log("Argument1 ==> ", arg1);
        console.log("Argument2 ==> ", arg2);
    };
    return classFunc;
}());
var func = new classFunc();
func.my_func(10, 10);
func.my_func("Hello", "EveryOne");
func.my_func(true, false);
console.log("============================================");
var classStatic = /** @class */ (function () {
    function classStatic() {
    }
    // constructor(){
    //    this.wish="hello";
    //}
    classStatic.getWish = function () {
        return this.wish;
    };
    classStatic.wish = "Hello Static";
    return classStatic;
}());
//new class1().wish;
// new class1().getWish();
console.log(classStatic.getWish());
console.log(classStatic.wish);
console.log("============================================");
