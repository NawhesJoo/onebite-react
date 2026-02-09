// 함수

// 함수 선언
function greeting() {
  console.log("hello");
}

console.log("호출 전");
greeting(); // greeting 함수 실행
console.log("호출 후");
/*
호출 전
hello
호출 후
*/

function getArea(width, height) {
  // width, height는 매개변수
  return width * height; // 결과값을 반환 후 함수 종료
  console.log("hi"); // 실행 안됨
}

getArea(10, 20); // 200, 10과 20은 인수. getArea 함수의 width에 10, height에 20을 인자로 전달하여 실행
getArea(20, 30); // 600

// 호이스팅 ( 끌어올리다 )
main(); // 선언보다 호출을 먼저해도 실행됨. 결과 : 'another''main'
function main() {
  function another() {
    // 중첩함수, 함수 안에 함수 정의 가능
    console.log("another");
  }
  another(); // 정의한 함수도 호출 가능
  console.log("main");
}
