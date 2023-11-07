function solution(arr) {
    var answer = '';
    answer = arr.join("")
    return answer;
}

// ! 헷갈린점
// replace 메소드는 문자열에서 사용되며, 문자열 내에서 일부를 다른 문자열로 치환할 때 사용됩니다.
// 배열의 원소들을 하나의 문자열로 합치고 싶다면, 배열의 join 메소드를 사용해야 합니다. 