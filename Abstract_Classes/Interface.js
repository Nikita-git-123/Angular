var interClass1 = /** @class */ (function () {
    function interClass1() {
        this.tech = "Angular";
    }
    return interClass1;
}());
console.log(new interClass1().tech);
console.log("==========================");
var face1 = {
    tech: "Spring"
};
var face2 = {
    tech: "Java"
};
var face3 = {
    tech: "JSP"
};
console.log(face1.tech);
console.log(face2.tech);
console.log(face3.tech);
console.log("==========================");
var interClass2 = /** @class */ (function () {
    function interClass2() {
    }
    interClass2.prototype.stack = function () {
        return "Full stack .....";
    };
    return interClass2;
}());
console.log(new interClass2().stack());
console.log("==========================");
var face4 = {
    stack: function () {
        return "Face4 : Inter2: Stack().... Full Stack..........";
    },
};
var face5 = {
    stack: function () {
        return "Face5 : Inter2: Stack().... Full Stack..........";
    },
};
console.log(face4.stack());
console.log(face5.stack());
console.log("==========================");
var face6 = {
    var_one: "Hello var1......",
    var_two: "Hello var2......"
};
console.log(face6.var_one, "===", face6.var_two);
console.log("==========================");
var face7 = {
    mean: function () {
        return "MEAN => MONGO EXPRESSJS ANGULAR NODEJS ";
    },
    mern: function () {
        return "MERN => MONGO EXPRESSJS REACT NODEJS ";
    },
    mevn: function () {
        return "MEVN => MONGO EXPRESSJS VUEJS NODEJS ";
    }
};
console.log(face7.mean());
console.log(face7.mern());
console.log(face7.mevn());
console.log("==========================");
var face8 = {
    mean: function () {
        return "MEAN => MONGO EXPRESSJS ANGULAR NODEJS ";
    },
    mern: function () {
        return "MERN => MONGO EXPRESSJS REACT NODEJS ";
    },
    mevn: function () {
        return "MEVN => MONGO EXPRESSJS VUEJS NODEJS ";
    }
};
console.log(face8.mean());
console.log(face8.mern());
console.log(face8.mevn());
console.log("==========================");
