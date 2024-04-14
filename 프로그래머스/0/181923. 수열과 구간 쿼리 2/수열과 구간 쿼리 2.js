function solution(arr, queries) {
    var answer = [];

    queries.forEach(query => {
        const [s, e, k] = query; 
        let min = Infinity; 

        for (let i = s; i <= e; i++) {
            if (arr[i] > k && arr[i] < min) {
                min = arr[i];
            }
        }

        if (min === Infinity) {
            answer.push(-1); 
        } else {
            answer.push(min); 
        }
    });

    return answer;
}
