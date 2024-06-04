function solution(my_string, m, c) {
    var answer = '';
    var numRows = my_string.length / m;
    
    for (var i = 0; i < numRows; i++) {
        answer += my_string[(i * m) + (c - 1)];
    }
    
    return answer;
}
