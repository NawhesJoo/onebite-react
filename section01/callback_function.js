// 1. 콜백함수
function main(value) {
  console.log(value);
}

function sub() {
  console.log("i am sub");
}

main(sub);
/* 결과값
sub(){
    console.log("i am sub");
}
*/

function main(value) {
  value();
}

function sub() {
  console.log("i am sub");
}

main(sub);
/* 결과값
i am sub
*/

// 2. 콜백함수의 활용
function repeat(count) {
  for (let idx = 1; i <= count; idx++) {
    console.log(idx);
  }
}

repeat(5);
// 결과값 : 1 2 3 4 5

function repeatDouble(count) {
  for (let idx = 1; i <= count; idx++) {
    console.log(idx * 2);
  }
}

repeatDouble(5);
// 결과값 : 2 4 6 8 10

function repeat2(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat2(5, function (idx) {
  console.log(idx);
});
// 결과값 : 1 2 3 4 5
repeat2(5, function (idx) {
  console.log(idx * 2);
});
// 결과값 : 2 4 6 8 10
