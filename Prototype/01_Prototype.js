//--1. Prototype 이란?
// 자바스크립트는 프로토타입 기반의 언어이다. -> 이를 기반으로 확장과 재사용성을 높임
// 사전적 의미 > Prototype : 원형
// 객체의 *프로토타입(원형)* 을 가지고 새로운 *객체* 를 생성해가는 프로그래밍 방식.
// ** 즉, 생성된 객체는 자기 자신의 *프로토타입* 을 갖는다 -> 즉, 자기 자신이 만들어지게 된 *원형(=부모)* 을 안다. **


//--2. Prototype vs Class
// 지금은 js도 Class 를 문법적으로 지원하기 시작했지만, 원래 js는 *프로토타입* 기반의 언어이다.
// 즉, 기존에는 Class 라는게 없었다.
// 그래서, 객체의 원형인 *프로토타입* 을 이용하여 객체의 *확장*, *재사용*, *싱속* 등을 구현해냄.
// Prototype 객체는 new 연산자에 의해 생성된 객체 -> 공유 프로퍼티, 메서드 등을 제공하기 위해 사용됨


//--3. 예
const fruit = { name: 'apple' };
console.log(fruit.name); //apple

//3-1. 속성추가
fruit.expiration = '20240705';
console.log(fruit.expiration);

//3-2. 속성 있는지 없는지 체크 -> hasOwnProperty() 메서드 사용
console.log(fruit.hasOwnProperty('expiration')); // true
console.log(fruit.hasOwnProperty('country')); // false

console.log(fruit); // [[Prototype]]: Object 의 메서드인 hasOwnProperty()를 상속받아서 사용 가능

const fruit2 = {
    name: 'apple',
    expiration: '20240705',
    hasOwnProperty: function() {
        console.log('하이');
    }
};

fruit2.hasOwnProperty(); // 함수 Overriding