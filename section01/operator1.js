// 연산자1

// 1. 대입 연산자
let var1 = 1;

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = 1 + 2 * 10; // 21, ( 1 + 2 ) * 10 = 30

// 3. 복합 연산자
let num7 = 10;
num7 += 10; // 20
num7 -= 10; // 0
num7 *= 10; // 100
num7 /= 10; // 1
num7 %= 10; // 0

// 4. 증강 연산자
let num8 = 10;
num8++; // 후위 연산, 해당 행 실행 후 연산(다음 행부터 적용)
++num8; // 전위 연산, 해당 행에서 연산(현재 행부터 적용)

// 5. 논리 연산자
let or = true || false; // true
let and = true && false; // false
let not = !true; // false

// 6. 비교 연산자
let comp1 = 1 === 2; // false
let comp2 = 1 !== 2; // true

let comp3 = 1 == "1"; // true, 값만 비교
let comp4 = 1 === "1"; // false, 자료형도 비교

let comp5 = 2 > 1; // true
let comp6 = 2 < 1; // false
let comp7 = 2 >= 2; // true
let comp8 = 2 <= 2; // true
