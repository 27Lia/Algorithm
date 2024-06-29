function solution(arr, queries) {
    return queries.reduce((updatedArr, [s, e]) => {
        return updatedArr.map((val, idx) => {
            if (idx >= s && idx <= e) {
                return val + 1;
            }
            return val;
        });
    }, arr);
}