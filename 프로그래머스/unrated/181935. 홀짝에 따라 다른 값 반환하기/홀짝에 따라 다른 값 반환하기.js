function solution(n) {
    const arr = [];

    // n 이하의 값 중에서 짝수를 arr 배열에 담는다.
    
    for(let i = 0; i<= n; i++){
        if(i % 2 == 0) {
            arr.push(i)
        }
    }

    // 짝수 배열의 각 요소를 제곱하여 합산한다.
    const sumOfSquares = arr.map(item => item * item).reduce((acc, curr) => acc + curr, 0);

    // n이 홀수인 경우, n 이하의 홀수의 합을 반환한다.
    if (n % 2 !== 0) {
        let sumOfOdds = 0;
        for (let i = 1; i <= n; i += 2) {
            sumOfOdds += i;
        }
        return sumOfOdds;
    }

    // n이 짝수인 경우, 짝수의 제곱 합을 반환한다.
    return sumOfSquares;
}
