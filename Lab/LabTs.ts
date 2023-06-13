//#region  1
{
    let arrOfNumbers: number[] = [1, 2, 3, 5, 6];
    let castedToStringsArr: string[] = [];
    arrOfNumbers.forEach(number => {
        castedToStringsArr.push(number.toString());
    });
    console.log(castedToStringsArr);
}
//#endregion

//#region 2 
{
    let arr: (number | string)[] = [1, "Assem", 3, "Hazem", 6];
    console.log(arr);
}
//#endregion

//#region 3
{
    enum State {
        ready = "ready",
        steady = "steady",
        go = "go"
    }
    let state: State = State.ready;
    console.log(state);
}
//#endregion

//#region 4
{
    type NumOrbool = (Number | Boolean)
    let numOrbool: NumOrbool = 1;
    console.log(numOrbool);
    numOrbool = true;
    console.log(numOrbool);
}
//#endregion

//#region 5
{
    let func = function (a: number = 0, b?: number): number {
        if (b == undefined) { b = 10; }
        return a + b;
    }
    console.log(func(1, 2));
}
//#endregion

//#region 6
{
    interface IEmployee {
        readonly id: number,
        name: string,
        email: string,
    }

    abstract class EmployeeAbs implements IEmployee {
        constructor(
            readonly id: number,
            public name: string,
            private username: string,
            public email: string,
            protected address: {
                street: string;
                suite: string;
                city: string;
                zipcode: string;
                geo: { lat: string; lng: string; };
            }
        ) { }

    }
    class Employee extends EmployeeAbs {
        constructor(
            id: number,
            name: string,
            username: string,
            email: string,
            address: {
                street: string;
                suite: string;
                city: string;
                zipcode: string;
                geo: { lat: string; lng: string; };
            }) {
            super(id, name, username, email, address);
        }

    }
    class Manager extends Employee {
        constructor(
            id: number,
            name: string,
            username: string,
            email: string,
            address: {
                street: string;
                suite: string;
                city: string;
                zipcode: string;
                geo: { lat: string; lng: string; };
            }) {
            super(id, name, username, email, address);
        }
        viewAddress(): string {
            return `${this.address.street} - ${this.address.suite} - ${this.address.city} `;
        }
    }

    let e1 = new Employee(1, "Assem", "assemmorsy", "assemmorsy@outlook.com", { street: "mohamed fared", suite: "first", city: "tanta", zipcode: "12322", geo: { lat: "3123.12", lng: "3213.12" } });
    console.log(e1);
    let m1 = new Manager(1, "Assem", "assemmorsy", "assemmorsy@outlook.com", { street: "mohamed fared", suite: "first", city: "tanta", zipcode: "12322", geo: { lat: "3123.12", lng: "3213.12" } });
    console.log(m1.viewAddress());
}
//#endregion