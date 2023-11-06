function solution(my_string, overwrite_string, s) {
    var answer = '';
 // 전체 문자 my_string에서 첫 문자열 부터 s까지 추출 ex) He
 // 전체 문자 my_string에서 s + 덮어쓸 문자의 수부터 끝까지 추출 ex) d 
    const a = my_string.slice(0,s)
    const b = my_string.slice(s + overwrite_string.length)
        return answer = a + overwrite_string + b;
}

// slice() 메서드는 두 개의 인자를 받는데, 첫 번째 인자는 추출 시작 인덱스이고, 두 번째 인자는 추출을 종료할 인덱스입니다.