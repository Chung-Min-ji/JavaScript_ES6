// 비동기 처리에는 다양한 방법들이 존재 -> Promise, Generator 등

// 호출 스케쥴링 함수 : setTimeout(), setInterval()
// setTimeout() : 일정 시간 "후에" 함수를 한 번만 실행.
// setInterval() : 일정시간마다 함수를 "주기적"으로 실행.

function testHello() {
    console.log("Hello");
}

function testHello2(t) {
    console.log(t);
}

testHello(); // 그냥 호출
setTimeout(testHello, 3000); // 지연 호출 -> 시간 단위는 ms(1000 = 1초)
setTimeout((a) => console.log(a), 5000, '안녕하세요.');

// 호출 스케쥴링 취소 : clearTimeout
// setTimeout 호출 -> 타이머 식별자 반환. 
const tid = setTimeout(console.log("안녕하세요 222"), 2000);
console.log("tid : ", tid);