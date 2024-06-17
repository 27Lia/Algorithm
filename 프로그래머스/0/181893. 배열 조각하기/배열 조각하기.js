function solution(arr, query) {
    for (let i = 0; i < query.length; i++) {
        let idx = query[i];
        if (i % 2 === 0) {
            // 짝수 인덱스: idx 포함 뒤 부분 자르기
            arr = arr.slice(0, idx + 1);
        } else {
            // 홀수 인덱스: idx 포함 앞 부분 자르기
            arr = arr.slice(idx);
        }
    }
    return arr;
}
