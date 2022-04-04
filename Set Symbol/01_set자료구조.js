//-- set 사용법
// 생성 : new / 추가 : add / 삭제 : delete

// 생성
let ar3 = new Set(); // 비어있는 set(집합) 하나 생성
console.log(ar3); //object set객체 반환
console.log("------------------");

// 추가
ar3.add('a');
ar3.add('b');
ar3.add('c');
console.log(ar3);
console.log("ar3[0] = " + ar3[0]); //'a' 가 아니라 undefined. 배열과는 다르다
console.log("------------------");

// 사이즈 (length가 아님)
ar3.add('c');
ar3.add('c');
ar3.add('c');
console.log("ar3.size =" + ar3.size); //3. 중복 허용되지 않음
console.log("------------------");

// 삭제
ar3.delete('a');
console.log("after ar3.delete('a')")
console.log(ar3); // a, b
console.log("------------------");

// 삭제 -> 한꺼번에 모두 삭제
ar3.clear();
console.log("after ar3.clear()");
console.log(ar3);