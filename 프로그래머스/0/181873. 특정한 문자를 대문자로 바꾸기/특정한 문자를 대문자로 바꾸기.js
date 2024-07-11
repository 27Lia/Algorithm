function solution(my_string, alp) {
    var regex = new RegExp(alp, 'g');
    var answer = my_string.replace(regex, alp.toUpperCase());
    return answer;
}
