// 조건문

// 1. if 조건문 ( if 문 )
let num = 10;

if (num >= 10) {
  console.log("10 이상");
  console.log("참");
} else if (num >= 5) {
  console.log("5 이상");
} else if (num >= 3) {
  console.log("3 이상");
} else {
  console.log("거짓");
}

// 2. switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 더 직관적
let aniimal = "cat";

switch (animal) {
  case "cat":
    console.log("고양이");
    break;

  case "dog":
    console.log("개");
    break;

  case "bear":
    console.log("곰");
    break;

  default: // else
    console.log("기타");
}
