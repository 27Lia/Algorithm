function solution(numLog) {
    let answer = '';
    const operations = ["w", "s", "d", "a"];
    for (let i = 1; i < numLog.length; i++) {
        const diff = numLog[i] - numLog[i - 1];
        if (diff === 1) {
            answer += operations[0];
        } else if (diff === -1) {
            answer += operations[1];
        } else if (diff === 10) {
            answer += operations[2];
        } else if (diff === -10) {
            answer += operations[3];
        }
    }
    return answer;
}
