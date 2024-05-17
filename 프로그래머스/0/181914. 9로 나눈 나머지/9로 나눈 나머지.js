function solution(number) {
    // 각 자리 숫자를 합산합니다.
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += parseInt(number[i]);
    }

    // 합을 9로 나눈 나머지를 반환합니다.
    return sum % 9;
}
