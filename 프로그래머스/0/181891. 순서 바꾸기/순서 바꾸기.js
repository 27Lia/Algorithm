function solution(num_list, n) {
    let part1 = num_list.slice(n);
    let part2 = num_list.slice(0, n);
    var answer = part1.concat(part2);
    return answer;
}
