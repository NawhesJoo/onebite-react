// 형 변환 (Type Casting)

// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환 하는 것

let num = 10;
let str = "20";

const result1 = num + str; // 1020

// 2. 명시적 형 변환
// -> 프로그래머 내장함수 등을 이용하여 직접 형 변환 하는 것
// 문자열 -> 숫자
let str1 = "10";
let strToNum1 = Number(str1); // 20

const result2 = 10 + strToNumber1; // 20

let str2 = "10개";
let strToNum2 = Number(str2); // NaN
let strToNum3 = parseInt(str2); // 10 (숫자가 앞에 있어야 함)

// 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1); // numToStr1 + "입니다" -> "20입니다"
