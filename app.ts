var a = 12;

let arr: number[] = [1, 2, 3, 4, 5];

let arr1: [string, number] = ['hello', 10];

enum UserRoles {
    ADMIN = "admin",
    USER =  "user",
    SUPER_ROLE = "super_role"
}

console.log(UserRoles.ADMIN);

let b:unknown;

b=12;
b='hello';

if (typeof b === 'string') {
    b.toUpperCase();
}

interface User {
    name: string,
    age: number,
    gender?: string
}

interface ADMIN extends User {
    admin: boolean;
}

function abcd(user: User) {
    console.log(user.name);
}

function abcde(user: ADMIN) {
    console.log(user.admin);
}

abcde({name: 'hello', age: 12, gender: 'male', admin: true});

abcd({name: 'hello', age: 12, gender: 'male'});


type sankhaya = number;
let c: sankhaya = 12;

type user = {
    name: string,
    age: number
}

type admin = user & {
    getDetails(user: string): void;
}

function abcdef(user: admin) {
    console.log(user.age);
    user.getDetails('hello');
}

class Device {
    constructor(public name: string) {}
}

class phone extends Device {
    constructor(name: string) {
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
    public name: string;
    constructor(name: string, public age: number, public age1?: number){
        this.name = name;
    }
}

let human = new HumanMaker('hello', 12);


class chaman {
    name = 'chaman';

    getDetails() {
        this.name;
    }
}


class BottleMaker {
    public name = 'chamann';
}

class BottleMaker1 extends BottleMaker {
    public materal = 'metal';
}

let bottle = new BottleMaker1();

class user2 {
    constructor(public readonly name: string) {}

    // changeName() {
    //     this.name = 'hello';
    // }
}

let user1 = new user2('chaman');

class chaman1 {
    constructor(public name: string, public age: number) {}

    getNames() {
        return this.name;
    }

    get name1() {
        return this.name;
    }

    set name2(name: string) {
        this.name = name;
    }

    setNames(name: string) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age: number) {
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
    static namekumar = 'chaman';
}

snell.name;

function abcdzd(name: string, cb: (value: string) => void) {

}

abcdzd('hello', (value: string) => {
    console.log(value);
});

interface halwa<T> {
    name: string;
    age: number;
    key: T;
}

function aaaa(obj: halwa<string>) {
    console.log(obj.key);
}

aaaa({name: 'hello', age: 12, key: 'hello'});

function bbbb<T>(a: T, b: T): T {
    return "hello" as T;
}

bbbb<string>('hello', 'hello');

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

function switchoffkaro(device: Tvkkaremote | carkaremote) {
    if(device instanceof Tvkkaremote) {
        device.switchOffTV();
    } else if (device instanceof carkaremote) {
        device.switchoffcar();
    }
}

switchoffkaro(tv);