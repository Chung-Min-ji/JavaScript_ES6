// 자바스크립트 함수의 내부와 객체간의 관계

// 1. 함수가 만들어지고 수행이 되어지면
// -- 1. 함수 자신(ex> Animal)과 같은 이름의 프로토타입 객체 생성.
// -- 2. Animal 함수 멤버로 prototype 속성 생성 -> "Animal 프로토타입 객체"를 가리킴(참조)
//       프로토타입 객체 => 생성자와 new 연산자를 통해 만들어내는 모든 객체의 원형이 되는 객체.

function Animal() {;; }

let tiger = new Animal();
let lion = new Animal();

// 이렇게 new 연산자와 생성자 함수 이용하여 객체 생성시 -> 각 객체에 _proto_ 속성이 자동으로 생성
// 이 속성 _proto_ 는 Animal 프로토타입 객체를 참조

console.log(tiger); //__proto__속성 확인 - constructor, _proto_ 등의 속성 가짐
console.log(lion); //__proto__속성 확인

// Animal 프로토타입 객체 = tiger, lion 과 같은 객체들의 원형이 되는 객체.
// tiger, lion 과 같은 객체들은 모두 이 Animal 프로토타입 객체에 접근이 가능.
// Animal 타입 프로토타입 객체에 맴버 하나를 추가하면 > tiger, lion과 같은 객체들도 동시에 이 멤버를 **공유**.
//  ("공유"하지 않고, 각 객체가 모두 같은 멤버를 포함해야 한다면 메모리 측면에서 비효율적임)

// Animal 프로토타입에 멤버 추가
Animal.prototype.run = function() {
    return "run";
};

console.log("-----------------------");
console.log(tiger.run());
console.log(lion.run());

// 프로토타입에 있는 메소드를 tiger, lion 객체 안에서 overriding 가능.