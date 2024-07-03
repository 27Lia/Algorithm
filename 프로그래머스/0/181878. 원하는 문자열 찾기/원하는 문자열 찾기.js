function solution(myString, pat) {
    const lowerMyString = myString.toLowerCase();
    const lowerPat = pat.toLowerCase();

    const answer = lowerMyString.includes(lowerPat) ? 1 : 0;

    return answer;
}
