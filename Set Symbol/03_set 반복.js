let ar = ['a', 'b', 'c', 'd'];

//--1. 전통적인 for 반복문
for (let i = 0; i < ar.length; i++) {
    console.log(ar[i]);
}
console.log("--------------");


//--2. forEach()
ar.forEach(function(x) {
    console.log(x);
})

ar.forEach(val => console.log(val));

//-3. set 반복 출력 -> keys(), values()
let testSet3 = new Set(['tiger', 'lion', 'dog', 'cat']);
testSet3.add('hipo');
console.log(testSet3[0]); //tiger (x), undefined. 배열이 아니기 때문에 인덱스 사용 불가

for (let i in testSet3) { //'in' -> undefined
    console.log(i);
}

for (let i of testSet3) { //'of' -> 요소 출력됨
    console.log(i);
}

console.log("--------------");

let arr = [...testSet3]; // spread 연산자 (...) -> set 요소를 하나씩 꺼내서 배열로 변경
console.log(arr[0]); // tiger

console.log("--------------keys");

//--3.1 keys() 메서드 : Iterator 객체 반환 -> next() 이용 가능
const key_itr = testSet3.keys(); //iterator 객체를 key_itr 에 할당
console.log(key_itr);
console.log(key_itr.next().value); //tiger (next가 포인터를 옮겨주는 역할을 함. next()를 반드시 해 주어야 첫번째 값 가리킴. jdbc의 rs랑 같다..!)
console.log(key_itr.next().value); //lion

console.log("--------------values");
//--3.2 values() 메서드 : Iterator 객체 반환 -> next()
const val_itr = testSet3.values();
console.log(val_itr.next().value); //tiger
console.log(val_itr.next().value); //lion


//--4. for..of 반복문으로 출력
for (let i in testSet3) {
    console.log(i); //출력 안됨 (**in)
}

for (let i of testSet3) {
    console.log(i); //출력됨 (**of)
}


//--5. entries() 메서드
// Set 각각의 요소들을 -> 배열 형태의 [value, value] 쌍으로 만들어주는 메서드
let testSet5 = new Set();

testSet5.add('홍길동');
testSet5.add('이순신');
testSet5.add('정민지');

const entries = testSet5.entries();

for (let i of entries) {
    console.log(i);
} //['홍길동', '홍길동'], ['이순신', '이순신'], ['정민지', '정민지]