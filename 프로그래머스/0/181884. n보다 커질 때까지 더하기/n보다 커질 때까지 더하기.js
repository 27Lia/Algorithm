function solution(numbers, n) {
    let sum = 0;
    return numbers.reduce((acc, num) => {
        if (acc <= n) {
            sum += num;
        }
        return sum;
    }, 0);
}
