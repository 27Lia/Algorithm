function solution(num_list) {
    var answer = [...num_list]; // num_list를 복사하여 answer로 지정
    var length = num_list.length; // num_list의 길이

    // 마지막 두 원소를 비교
    if (num_list[length - 1] > num_list[length - 2]) {
        answer.push(num_list[length - 1] - num_list[length - 2]); // 차를 추가
    } else {
        answer.push(num_list[length - 1] * 2); // 두 배한 값을 추가
    }

    return answer;
}
