const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];
let arr = []; // 결과를 담을 빈 배열 생성

rl.on('line', function (line) {  // 입력받은 한 줄을 input 배열에 저장합니다.
    input = [line];
    const str = input[0]  // 첫 번째 입력값을 str 변수에 할당합니다.
    for(let i = 0; i < str.length; i++) { // str의 각 문자에 대하여 루프를 실행합니다.
        if(str[i] === str[i].toUpperCase()) {  // 만약 문자가 대문자라면,
            arr.push(str[i].toLowerCase());   // 해당 문자를 소문자로 변환하여 arr 배열에 추가합니다.
        } else { // 소문자라면, 해당 문자를 대문자로 변환하여 arr 배열에 추가합니다.
            arr.push(str[i].toUpperCase());
        }
    }
}).on('close',function(){
   console.log(arr.join(""))   
});

// 결과를 담을 빈 배열을 생성
// for문을 사용하여 각 문자를 반복
// if문을 사용하여 각문자의 대소문자를 판별하여 변환 후 빈배열에 추가
// 결과를 담은 배열을 join 메서드로 문자열로 변환하여 출력함 

// -----------------------------------------------------------------------

// join 메서드에 전달하는 인자는 배열의 각 요소 사이에 삽입될 문자열을 정의합니다.
// 만약 join 메서드에 빈 문자열 ""을 전달하면, 배열의 요소들이 아무런 문자 없이 연속해서 병합됩니다.

// 예를 들어:

// ["a", "b", "c"].join("")는 "abc"를 반환합니다.
// ["a", "b", "c"].join("-")는 "a-b-c"를 반환합니다.