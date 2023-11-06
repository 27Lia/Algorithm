const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');

}).on('close', function () {
    str = input[0];
    n = Number(input[1]);
    let repeatedString = str.repeat(n);
    console.log(repeatedString);
});

//str.repeat(n) 메소드는 JavaScript에서 제공하는 String 객체의 메소드 중 하나이다.
//호출하는 문자열 str을 n번 반복하여 새로운 문자열을 만들고 반환한다.
//str는 반복하고자 하는 기존의 문자열이고, n은 정수로, 반복하고자 하는 횟수를 나타낸다.