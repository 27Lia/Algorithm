const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    n = Number(input[0]);
    // 만약 n이 짝수인가 ? n나누기 2를 했을때 나머지가 0이면 짝수 아니면 홀수 
    if (n % 2 === 0) {
        console.log(`${n} is even`)
    }
    else {
        console.log(`${n} is odd`)
    }
});