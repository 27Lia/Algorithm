function solution(num_list) {
    const countDivisions = (num) => {
        let count = 0;
        while (num > 1) {
            if (num % 2 === 0) {
                num /= 2;
            } else {
                num = (num - 1) / 2;
            }
            count++;
        }
        return count;
    };

    return num_list.map(countDivisions).reduce((acc, curr) => acc + curr, 0);
}


