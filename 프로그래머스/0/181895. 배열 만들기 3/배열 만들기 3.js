function solution(arr, intervals) {
    // 첫 번째 구간 추출
    const [a1, b1] = intervals[0];
    const firstSegment = arr.slice(a1, b1 + 1);

    // 두 번째 구간 추출
    const [a2, b2] = intervals[1];
    const secondSegment = arr.slice(a2, b2 + 1);

    // 두 구간을 합쳐 새로운 배열 생성
    return firstSegment.concat(secondSegment);
}