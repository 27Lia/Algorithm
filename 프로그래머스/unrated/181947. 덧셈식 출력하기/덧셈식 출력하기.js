const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const first = input[0];
    const second = input[1];
    const result = `${first} + ${second} = ${Number(first)+Number(second)}`
    console.log(result)
    // console.log(Number(input[0]) + Number(input[1]));
});
