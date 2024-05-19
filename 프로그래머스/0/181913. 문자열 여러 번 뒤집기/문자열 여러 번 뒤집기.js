function solution(my_string, queries) {
    // 문자열을 배열로 변환
    let strArray = my_string.split('');

    // 각 쿼리에 대해 순회
    for (let i = 0; i < queries.length; i++) {
        let s = queries[i][0];
        let e = queries[i][1];
        
        // 부분 문자열을 뒤집기
        while (s < e) {
            let temp = strArray[s];
            strArray[s] = strArray[e];
            strArray[e] = temp;
            s++;
            e--;
        }
    }
    
    // 배열을 문자열로 변환하여 반환
    return strArray.join('');
}
