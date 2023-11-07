function solution(str1, str2) {
    let answer = '';
    for(let i = 0; i < str1.length; i++) {
        answer += str1[i] + str2[i] ;
    }
    return answer;
}

// 첫 번째 반복(i=0)에서 str1의 첫 번째 문자(str1[0])와 str2의 첫 번째 문자(str2[0])를 answer에 추가합니다.
// 두 번째 반복(i=1)에서 str1의 두 번째 문자(str1[1])와 str2의 두 번째 문자(str2[1])를 answer에 추가합니다.