// 1. 함수 표현식

function funcA() {
  console.log("funcA");
}

let varA = funcA; // 호출이 아닌 varA에 funcA를 매핑
console.log(varA);
/*
결과값 : 
function funcA(){
    console.log('funcA');
}
*/
varA(); // 'funcA', varA에 담아둔 funcA 실행

varB(); // 함수 선언이 아니기 때문에 호이스팅 불가능
let varB = function () {
  // varB에 익명함수를 정의
  console.log("funcB");
};

// 2. 화살표 함수
let varC = (value) => value + 1; // 단순 값 반환일 시 {}, return 생략 가능

varC(10); // 11
