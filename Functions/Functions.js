function calculateDiscount(price, discount) {
    if (discount === void 0) { discount = 0.4; }
    var discountAmt = price * discount;
    console.log("Discount Amount : ", discountAmt);
    console.log("======================================");
}
calculateDiscount(5000, 0.5);
calculateDiscount(4000);
function FactorialFunc(number) {
    if (number <= 0) {
        return 1;
    }
    else {
        return (number * FactorialFunc(number - 1));
    }
}
console.log(" Factorial of 10 is : ", FactorialFunc(10));
console.log("======================================");
function Details(name, salary, age) {
    console.log("Emp name: ", name);
    console.log("Emp Salary : ", salary);
    if (age != undefined) {
        console.log("Emp Age : ", age);
    }
    console.log("======================================");
}
Details("Nikita", "100000", "20");
Details("Namrata", "150000");
function additionFunc() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
    }
    console.log("Sum : ", sum);
    console.log("======================================");
}
additionFunc(1, 2, 5, 4, 5, 7, 8, 4);
var newmsg = function () {
    console.log("Welcome to Lamda Function");
    console.log("======================================");
};
newmsg();
