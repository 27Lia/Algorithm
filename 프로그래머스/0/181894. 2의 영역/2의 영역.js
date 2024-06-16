function solution(arr) {
    // 2의 인덱스를 찾기
    const indices = arr.map((value, index) => value === 2 ? index : -1).filter(index => index !== -1);
    
    // 2가 없는 경우
    if (indices.length === 0) {
        return [-1];
    }
    
    // 2의 첫 번째와 마지막 인덱스를 사용하여 부분 배열 추출
    const start = indices[0];
    const end = indices[indices.length - 1];
    return arr.slice(start, end + 1);
}
