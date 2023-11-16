function solution(ineq, eq, n, m) {
    // 조건에 따른 비교 수행
    if (ineq === ">" && eq === "=") {
        return n >= m ? 1 : 0;
    } else if (ineq === "<" && eq === "=") {
        return n <= m ? 1 : 0;
    } else if (ineq === ">" && eq === "!") {
        return n > m ? 1 : 0;
    } else if (ineq === "<" && eq === "!") {
        return n < m ? 1 : 0;
    }

    // 주어진 조건이 없는 경우 0을 반환
    return 0;
}

// ">", "=" : 이 경우 n이 m보다 크거나 같으면 참입니다.
// "<", "=" : 이 경우 n이 m보다 작거나 같으면 참입니다.
// ">", "!" : 이 경우 n이 m보다 크면 참입니다.
// "<", "!" : 이 경우 n이 m보다 작으면 참입니다.
