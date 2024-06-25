function solution(num_list) {
    const sums = num_list.reduce((acc, current, index) => {
        if (index % 2 === 0) {
            acc[0] += current;
        } else {
            acc[1] += current;
        }
        return acc;
    }, [0, 0]);

    return Math.max(sums[0], sums[1]);
}

