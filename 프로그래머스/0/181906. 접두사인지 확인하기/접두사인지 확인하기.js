function solution(my_string, is_prefix) {
    // 문자열이 주어진 접두사로 시작하는지 확인하는 메서드 사용
    if (my_string.startsWith(is_prefix)) {
        return 1; // 접두사인 경우 1 반환
    } else {
        return 0; // 접두사가 아닌 경우 0 반환
    }
}
