function solution(num_list) {
    // 홀수와 짝수를 저장할 빈 문자열 초기화
    let oddStr = '';
    let evenStr = '';

    // num_list의 각 요소를 순회하며 홀수와 짝수를 분리
    for (let num of num_list) {
        if (num % 2 === 0) { // 짝수인 경우
            evenStr += num;
        } else { // 홀수인 경우
            oddStr += num;
        }
    }

    // 홀수 문자열과 짝수 문자열을 숫자로 변환하여 더함
    let oddNumber = parseInt(oddStr, 10);
    let evenNumber = parseInt(evenStr, 10);

    return oddNumber + evenNumber;
}
