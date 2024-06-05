function solution(my_string) {
    const alphabetCount = (acc, char) => {
        if (char >= 'A' && char <= 'Z') {
            acc[char.charCodeAt(0) - 'A'.charCodeAt(0)]++;
        } else if (char >= 'a' && char <= 'z') {
            acc[char.charCodeAt(0) - 'a'.charCodeAt(0) + 26]++;
        }
        return acc;
    };

    return my_string.split('').reduce(alphabetCount, new Array(52).fill(0));
}
