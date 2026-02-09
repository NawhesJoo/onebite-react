// 스코프
// -> 전역(전체 영역)스코프 / 지역(특정 영역) 스코프
// -> 전역 스코프 : 전체 영역에서 접근 간능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcA() {
  let b = 2; // 지역 스코프
  console.log(a);

  function funcB() {} // 지역 스코프 -> 함수 내에서 선언하면 지역 스코프. 조건문이나 반복문 내에서 선언하면 전역 스코프
}
funcA(); // 결과값 : a
console.log(b); // 오류 발생
funcB(); // 오류 발생

if (true) {
  let c = 1; // 지역 스코프
}
console.log(c); // 오류 발생

for (let i9 = 0; i < 10; i++) {
  let d = 1; // 지역 스코프
}
console.log(d); // 오류 발생
console.log(i); //오류 발생

funcB(); // 오류 발생
