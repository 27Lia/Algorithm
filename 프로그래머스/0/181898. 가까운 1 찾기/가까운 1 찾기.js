function solution(arr, idx) {
    // idx부터 배열의 끝까지 순회
    for (let i = idx; i < arr.length; i++) {
        // 값이 1인 경우 해당 인덱스를 반환
        if (arr[i] === 1) {
            return i;
        }
    }
    // 값이 1인 인덱스를 찾지 못하면 -1을 반환
    return -1;
}
