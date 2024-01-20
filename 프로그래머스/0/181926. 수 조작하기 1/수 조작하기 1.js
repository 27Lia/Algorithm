function solution(n, control) {
    // control 문자열의 각 문자에 대하여
    for (let i = 0; i < control.length; i++) {
        // 현재 문자를 char 변수에 저장
        const char = control[i];
        
        // 문자에 따라 n의 값을 변경
        switch (char) {
            case 'w':
                n += 1;
                break;
            case 's':
                n -= 1;
                break;
            case 'd':
                n += 10;
                break;
            case 'a':
                n -= 10;
                break;
        }
    }
    // 변경된 n 값을 반환
    return n;
}
