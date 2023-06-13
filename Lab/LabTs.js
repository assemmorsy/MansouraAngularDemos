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
//#region  1
{
    var arrOfNumbers = [1, 2, 3, 5, 6];
    var castedToStringsArr_1 = [];
    arrOfNumbers.forEach(function (number) {
        castedToStringsArr_1.push(number.toString());
    });
    console.log(castedToStringsArr_1);
}
//#endregion
//#region 2 
{
    var arr = [1, "Assem", 3, "Hazem", 6];
    console.log(arr);
}
//#endregion
//#region 3
{
    var State = void 0;
    (function (State) {
        State["ready"] = "ready";
        State["steady"] = "steady";
        State["go"] = "go";
    })(State || (State = {}));
    var state = State.ready;
    console.log(state);
}
//#endregion
//#region 4
{
    var numOrbool = 1;
    console.log(numOrbool);
    numOrbool = true;
    console.log(numOrbool);
}
//#endregion
//#region 5
{
    var func = function (a, b) {
        if (a === void 0) { a = 0; }
        if (b == undefined) {
            b = 10;
        }
        return a + b;
    };
    console.log(func(1, 2));
}
//#endregion
//#region 6
{
    var EmployeeAbs = /** @class */ (function () {
        function EmployeeAbs(id, name, username, email, address) {
            this.id = id;
            this.name = name;
            this.username = username;
            this.email = email;
            this.address = address;
        }
        return EmployeeAbs;
    }());
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(id, name, username, email, address) {
            return _super.call(this, id, name, username, email, address) || this;
        }
        return Employee;
    }(EmployeeAbs));
    var Manager = /** @class */ (function (_super) {
        __extends(Manager, _super);
        function Manager(id, name, username, email, address) {
            return _super.call(this, id, name, username, email, address) || this;
        }
        Manager.prototype.viewAddress = function () {
            return "".concat(this.address.street, " - ").concat(this.address.suite, " - ").concat(this.address.city, " ");
        };
        return Manager;
    }(Employee));
    var e1 = new Employee(1, "Assem", "assemmorsy", "assemmorsy@outlook.com", { street: "mohamed fared", suite: "first", city: "tanta", zipcode: "12322", geo: { lat: "3123.12", lng: "3213.12" } });
    console.log(e1);
    var m1 = new Manager(1, "Assem", "assemmorsy", "assemmorsy@outlook.com", { street: "mohamed fared", suite: "first", city: "tanta", zipcode: "12322", geo: { lat: "3123.12", lng: "3213.12" } });
    console.log(m1.viewAddress());
}
//#endregion
