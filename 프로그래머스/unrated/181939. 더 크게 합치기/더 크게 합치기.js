function solution(a, b) {
    // 정수 a와 b를 문자열로 변환합니다.
    const strA = String(a);
    const strB = String(b);
    
    // 두 문자열을 서로 다른 순서로 붙여 비교합니다.
    const combination1 = strA + strB;
    const combination2 = strB + strA;
    
    // 더 큰 조합을 반환하거나, 같다면 a ⊕ b를 반환합니다.
    if (combination1 >= combination2) {
        return Number(combination1);
    } else {
        return Number(combination2);
    }
}
