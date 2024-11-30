"use strict";
var a = 12;
let arr = [1, 2, 3, 4, 5];
let arr1 = ['hello', 10];
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["USER"] = "user";
    UserRoles["SUPER_ROLE"] = "super_role";
})(UserRoles || (UserRoles = {}));
console.log(UserRoles.ADMIN);
let b;
b = 12;
b = 'hello';
if (typeof b === 'string') {
    b.toUpperCase();
}
function abcd(user) {
    console.log(user.name);
}
function abcde(user) {
    console.log(user.admin);
}
abcde({ name: 'hello', age: 12, gender: 'male', admin: true });
abcd({ name: 'hello', age: 12, gender: 'male' });
let c = 12;
function abcdef(user) {
    console.log(user.age);
    user.getDetails('hello');
}
class Device {
    constructor(name) {
        this.name = name;
    }
}
class phone extends Device {
    constructor(name) {
        super(name);
    }
    getDetails() {
        console.log(this.name);
    }
}
let di = new phone("milton");
// let device = new Device();
// let device1 = new Device();
class HumanMaker {
    constructor(name, age, age1) {
        this.age = age;
        this.age1 = age1;
        this.name = name;
    }
}
let human = new HumanMaker('hello', 12);
class chaman {
    constructor() {
        this.name = 'chaman';
    }
    getDetails() {
        this.name;
    }
}
class BottleMaker {
    constructor() {
        this.name = 'chamann';
    }
}
class BottleMaker1 extends BottleMaker {
    constructor() {
        super(...arguments);
        this.materal = 'metal';
    }
}
let bottle = new BottleMaker1();
class user2 {
    constructor(name) {
        this.name = name;
    }
}
let user1 = new user2('chaman');
class chaman1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getNames() {
        return this.name;
    }
    get name1() {
        return this.name;
    }
    set name2(name) {
        this.name = name;
    }
    setNames(name) {
        this.name = name;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
}
let chaman2 = new chaman1('chaman', 12);
chaman2.getNames();
chaman2.setNames('hello');
chaman2.getAge();
chaman2.setAge(13);
chaman2.name1;
chaman2.name2 = 'hello';
class snell {
}
snell.namekumar = 'chaman';
snell.name;
function abcdzd(name, cb) {
}
abcdzd('hello', (value) => {
    console.log(value);
});
function aaaa(obj) {
    console.log(obj.key);
}
aaaa({ name: 'hello', age: 12, key: 'hello' });
function bbbb(a, b) {
    return "hello";
}
bbbb('hello', 'hello');
class Tvkkaremote {
    switchOffTV() {
        console.log('TV is off');
    }
}
class carkaremote {
    switchoffcar() {
        console.log('car is off');
    }
}
const tv = new Tvkkaremote();
const car = new carkaremote();
function switchoffkaro(device) {
    if (device instanceof Tvkkaremote) {
        device.switchOffTV();
    }
    else if (device instanceof carkaremote) {
        device.switchoffcar();
    }
}
switchoffkaro(tv);
