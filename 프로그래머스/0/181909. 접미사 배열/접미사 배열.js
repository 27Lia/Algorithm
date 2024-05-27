function solution(my_string) {
    // 모든 접미사를 저장할 배열
    var suffixes = [];

    // 문자열의 모든 접미사를 생성하여 배열에 추가
    for (let i = 0; i < my_string.length; i++) {
        suffixes.push(my_string.substring(i));
    }

    // 접미사 배열을 사전순으로 정렬
    suffixes.sort();

    // 정렬된 접미사 배열을 반환
    return suffixes;
}


