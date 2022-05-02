// 프로토타입 체인
let obj1 = {
    name: "홍길동",
    age: 20,
    sayHi: function() {
        console.log("hi" + this.name);
    }
};

let obj2 = {
    name: "정민지"
};

console.log(obj2); // __proto__ : Object (최상위 객체)

obj2.__proto__ = obj1;
console.log(obj2); // __proto__ : obj1