// 1. 제너레이터란?
//-- 1. 함수인데, 일반적인 함수와 조금 다르게 동작함.
//-- 2. 보통 함수는 값을 한 개(또는 없거나) 반환하는데 -> 제너레이터는 여러개의 값을 반환.
//      함수(제너레이터) 외부에서 함수가 실행되는 중간에 특정 부분에서 멈추고, 값을 외부에서 받아 하나씩 반환.
//-- 3. 함수에 '*' 를 붙이면 제너레이터 함수.
//-- 4. 함수의 실행을 특정 키워드(yield = 내주다, 양도하다) 에서 멈추고 -> 필요한 시점에서 다시 재개.
//      즉, 함수 중간에서 실행을 멈춘다. 이 때, 제어권은 호출자에게 양도(yield)하고, 호출자에 의해 재개됨.

function* testGen() {
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

// testGen()이라는 제너레이터 함수를 호출하면, 바로 코드가 실행되는 것이 아니라
// Iterator 객체를 반환 -> 관례상 it 또는 iter 라는 변수명으로 받음.
// 객체이므로 내부적으로 어떤 메서드를 가지게 됨. => next() 메서드(제너레이터의 주요 메서드)

const iter = testGen(); // iterator 객체를 반환 -> next() 메서드 존재.
//                         next() 실행될 때마다, 처음 나오는 yield 까지 실행하고 멈춤 (또는 제어권을 호출자에게 양도함)
//                         yield 에서 멈췄을 때, yield 뒤의 "값(value)" 을 반환.
//                         만약 yield 키워드 뒤에 아무런 값이 없으면 "undefined" 반환.
//                         next() 메서드는 항상 value, done 2개의 속성을 가진 객체를 반환.
console.log(iter.next()); // {value : 1, done : false}
console.log(iter.next());
console.log(iter.next());
console.log(iter.next()); // {value : 4, done : true}
console.log(iter.next()); // {value : undefined, done : true}