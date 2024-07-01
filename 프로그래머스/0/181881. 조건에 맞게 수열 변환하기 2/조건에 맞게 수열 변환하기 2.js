function solution(arr) {
    const process = (num) => {
        if (num >= 50 && num % 2 === 0) {
            return num / 2;
        } else if (num < 50 && num % 2 !== 0) {
            return num * 2 + 1;
        }
        return num;
    };
    
    let iterations = 0;
    let prevArr;
    
    while (true) {
        prevArr = arr.slice();
        arr = arr.map(process);
        
        if (arr.every((value, index) => value === prevArr[index])) {
            break;
        }
        
        iterations++;
    }
    
    return iterations;
}
