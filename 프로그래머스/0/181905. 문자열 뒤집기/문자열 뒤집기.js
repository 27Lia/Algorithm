function solution(my_string, s, e) {
    // 첫 번째 부분: 시작 인덱스 s 이전의 부분
    let part1 = my_string.slice(0, s);
    
    // 두 번째 부분: 인덱스 s부터 e까지의 부분 (이 부분을 뒤집습니다)
    let part2 = my_string.slice(s, e + 1).split('').reverse().join('');
    
    // 세 번째 부분: 인덱스 e 이후의 부분
    let part3 = my_string.slice(e + 1);
    
    // 세 부분을 합쳐서 결과 문자열을 만듭니다
    let answer = part1 + part2 + part3;
    
    return answer;
}
