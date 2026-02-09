// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성) key(문자열, 숫자값) : value
let person = {
  name: "주세환",
  age: 28,
  hobby: "game",
  extra: {},
  "like cat": true,
};

// 3. 객체 프로퍼티 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
console.log(name); // "주세환"

let name2 = person.name2; // 오류가 아닌 undefined

let age = person["age"]; // 따옴표 없으면 오류
let age2 = person["age2"]; // undefined
console.log(age); // 28

let property = "hobby";
let hobby = person[property]; // property에 들어있는 hobby를 인식하여 "game"을 불러옴

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "라면";

// 3.3 프로퍼티 수정
person.job = "educator";
person["favoriteFood"] = "고기";

// 3.4 프로퍼티 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; // true
let result2 = "cat" in person; // false
