function solution(intStrs, k, s, l) {
    var answer = [];
    
    // intStrs 배열의 각 원소를 순회
    for (let str of intStrs) {
        // 부분 문자열을 추출
        let substr = str.substring(s, s + l);
        // 부분 문자열을 정수로 변환
        let num = parseInt(substr, 10);
        // 변환된 정수가 k보다 큰 경우, answer 배열에 추가
        if (num > k) {
            answer.push(num);
        }
    }
    
    return answer;
}
