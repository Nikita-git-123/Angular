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
var abs1 = /** @class */ (function () {
    function abs1() {
    }
    abs1.prototype.fun_one = function () {
        return "Function one";
    };
    return abs1;
}());
var abs2 = /** @class */ (function (_super) {
    __extends(abs2, _super);
    function abs2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    abs2.prototype.fun_two = function () {
        return "Function two";
    };
    return abs2;
}(abs1));
console.log(new abs2().fun_one());
console.log("==========");
console.log(new abs2().fun_two());
