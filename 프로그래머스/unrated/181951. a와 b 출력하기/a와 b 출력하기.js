const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');  // 입력받은 값을 공백 기준 분리
}).on('close', function () {
    // 입력받은 a와 b를 형식에 맞춰 출력
    const a = input[0]; 
    const b = input[1];
     // 템플릿 리터럴 사용
    console.log(`a = ${a}`);
    console.log(`b = ${b}`);
});
