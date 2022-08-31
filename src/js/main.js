console.log('hello~');

let myName = "ejlee";
let email = "eojin312@naver.com";
let hello = `Hello ${myName}`;

let number = 1;
let opacity = 1.56;

let checked = true;
let isShow = false;

let obj = {abc: 123};

let empty = null;

let user = {
    name: myName,
    age: 21,
    isValid: true
};

let family = ['ejlee', 'hjlee', 'jwlee', 'bmjung', 'kjlee'];

const integer = 1;

console.log(myName);
console.log(email);
console.log(hello);

console.log(number);
console.log(opacity + number);

console.log(checked);
console.log(isShow);

console.log("boolean" + myName === "ejlee" ? checked : isShow);

console.log(obj.abc);

console.log(empty);

console.log(family);

console.log(user); // 위에서 생성한 객체 잘나오는지

console.log(`my age is ${user.age}`);

console.log(`hello ${family.at(0)}`); // family.get(0); 을 해보고싶었음

function helloFunc() {
    console.log(`hello function ~! ${user.name}`);
}

helloFunc();

function returnFunc() {
    return 123;
}

let integerA = returnFunc();

console.log(integerA);

function sum(a, b) {
    return a + b;
}

let something = sum(1, 2);

console.log(something);

let world = function () {
    console.log('world');
};

world();


