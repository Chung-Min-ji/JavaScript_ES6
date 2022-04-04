//--1. 심볼(Symbol) 타입이란?
// 타입이란 말에서 알 수 있듯이 ES6에서 도입된 primitive 타입 중 하나 -> 객체의 속성으로 사용
// 심볼의 사전적 의미 -> 상징 -> 심볼형을 사용하면 -> 유일무이한 값(고유한 값)을 가짐
// ** 즉, 심볼형 값은 immutable. 

//--2. primitive : Number, String, Null, Undefined, Boolean, Symbol(ES6)
//     reference : Object(object, function, array,...)

//--3. 왜 객체의 속성으로 심볼을 사용하나?
// 충돌을 피하기 위함 (고유한 값을 만들어내므로)
// 예를 들어, 배열 객체를 만들어서 "배열명.length" -> 배열의 길이 리턴 -> 같은 이름의 length로 덮어쓰면 overriding 되는 문제 발생.
// 이 떄, 배열의 길이값은 그대로 유지하면서, 같은 이름의 length 속성을 추가하고자 할 때 -> 심볼 사용하여 문제 해결
let ar = [1, 2, 3, 4, 5];
console.log(ar.length); //5 -> 배열의 길이 -> 즉, 요소 수를 알 수 있는 내장된 속성 'length' 

ar.length = 50; // ar 배열에 length 속성을 정의하고 50을 할당 -> 내장속성을 overriding
console.log(ar.length); // 50

console.log("-------------------심볼 사용");

// 심볼 사용
let ar2 = [1, 2, 3, 4, 5];
const length = Symbol('length');
ar2[length] = 50; // [] 대괄호 안에 심볼 변수명. ar2 배열의 length 속성에 50을 할당
console.log(ar2.length); //5
console.log(ar2[length]); //50