// 생성시 값 추가
let ar = new Set().add('a').add('b');
console.log(ar);

// 출력 -> Spread 연산자(...) 사용 -> Iterable 객체의 요소를 하나씩 분리하여 전개 (펼침 연산자)
let testArr = ['k', 'o', 'r', 'e', 'a'];
console.log(...testArr); // k o r e a
console.log([...testArr]); //['k', 'o', 'r', 'e', 'a']

console.log([...
    'hello'
]); //['h', 'e', 'l', 'l', 'o']