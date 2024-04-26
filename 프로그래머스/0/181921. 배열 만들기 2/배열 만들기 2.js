function solution(l, r) {
    const isZeroOrFive = num => {
        while (num > 0) {
            const digit = num % 10;
            if (digit !== 0 && digit !== 5) {
                return false;
            }
            num = Math.floor(num / 10);
        }
        return true;
    };

    const numbers = Array.from({ length: r - l + 1 }, (_, index) => l + index);
    const result = numbers.filter(num => isZeroOrFive(num));
    
    return result.length > 0 ? result : [-1];
}
