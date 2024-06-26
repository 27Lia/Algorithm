function solution(names) {
    return names.reduce((acc, curr, index) => {
        if (index % 5 === 0) {
            acc.push(curr);
        }
        return acc;
    }, []);
}
