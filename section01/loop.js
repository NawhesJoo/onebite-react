// 반복문

// for
for (let idx = 0; idx < 5; idx++) {
  // 초기식; 조건식; 증강식
  console.log(idx);
} // 결과 : 0 1 2 3 4

for (let idx = 0; idx < 10; idx++) {
  console.log(idx);
  if (idx >= 5) {
    break;
  }
} // 결과 : 0 1 2 3 4

for (let idx = 0; idx < 10; idx++) {
  if (idx % 2 === 0) {
    continue;
  }
  console.log(idx);
} // 결과 : 1 3 5 7 9
