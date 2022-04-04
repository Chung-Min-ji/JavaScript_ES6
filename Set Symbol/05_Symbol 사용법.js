//--4. 심볼(Symbol) 사용법(생성법)
// 배열 객체에 어떤 속성을 넣고자 한다면, 동시에 반복문에서 속성이 나타나지 않게 (**은닉화) 하고자 한다면
// 심볼을 사용할 수 있다.

//--4.1 심볼은 new 연산자 사용 X -> Symbol() 함수 사용하여 생성
let symbol = Symbol();
let nSymbol = Symbol('name'); //name = description 인자

//--4.2 괄호 안은 비워두고 생성해도 되고, 문자열을 넣어 생성해도 됨
// 보통 이 때의 문자열은 단순 디버깅 용도이거나, 단순 섪명일 뿐, 고유한 값을 가지는데 있어서 어떤 영향을 끼치지는 않는다.
// 따라서, description 인자는 심볼의 고유값을 구분하지는 못한다. -> 심볼은 매번 심볼함수 호출시 새로운 심볼값을 생성해내기 때문.
let symbol2 = Symbol('personName');
let symbol3 = Symbol('personName');

console.log(symbol2);
console.log(symbol3);
console.log(symbol2 === symbol3); //false. Symbol() 괄호 안의 인자값은 단순 description역할.


//--5. 심볼의 출력 형태
// 이때, 심볼값은 문자열 형태로 변환할 수 없기 때문에 출력은 console.log 로 콘솔에 출력.
let symbol5 = Symbol('age');
// alert(symbol5); // Cannot convert a Symbol value to a string 에러 발생


//--6. 심볼형은 for..in 구문으로 반복시 출력되지 않음 (은닉성)
// 배열 객체에 속성을 추가하면 -> for..in 반복문으로 출력시 해당 속성도 같이 출력됨
let ar6 = [1, 2, 3, 4, 5];
ar6.someProperty = 10; // 배열에 속성 추가

for (i in ar6) {
    console.log(i); // 0,1,2,3,4,somProperty (인덱스, 속성값 출력)
}

let symbol6 = Symbol('otherProperty');
ar6[symbol6] = 10;

console.log(ar6[symbol6]); // 10

for (i in ar6) {
    console.log(i); // symbol6은 출력 안됨
}