function solution(number, n, m) {
    // number를n으로 나눴을때 0이면 배수 1을 리턴
    // number를m으로 나눴을때 0이면 배수 1을 리턴
    // => ~이면서 &&사용
    // 둘다 0으로 안떨어지면 0을 리턴
    return (number % n === 0 && number % m === 0) ? 1 : 0;
 
}