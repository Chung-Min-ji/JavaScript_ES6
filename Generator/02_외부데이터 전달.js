// Generator 함수 외부에서 데이터 받기

// next() 와 yield가 중간에서 번갈아가며 데이터를 주고받기 때문에 가능.
// next() -> yield 키워드까지 실행하고 stop -> 제어권을 함수 외부로 양도(yield) -> 이 때 yield 뒤의 값이 반환

console.clear();

function* testGen2() {
    const a = yield 1;
    const b = yield(a * 1);
    const c = yield(b + 2);
    return a * b * c;
}

const iter2 = testGen2();
console.log(iter2.next()); //{value:1, done:false}
console.log(iter2.next(100)); // 현재 포인터가 위치한 a에 100이 할당됨. {value:100, done:false}
console.log(iter2.next(48)); // 현재 포인터가 위치한 b에 48 할당. {value:50, done:false}
console.log(iter2.next(2)); //c에 2 할당. a, b는 위에서 할당한 100, 48. {value:9600, done:true}