function solution(myString, pat) {
    // 최대 길이의 부분 문자열을 찾기 위한 재귀 함수
    function findLongestEndingSubstring(currentIndex, currentSubstring, maxLengthSubstring) {
        if (currentIndex >= myString.length) {
            return maxLengthSubstring;
        }
        
        if (myString.substring(currentIndex, currentIndex + pat.length) === pat) {
            const updatedSubstring = myString.substring(0, currentIndex + pat.length);
            if (updatedSubstring.length > maxLengthSubstring.length) {
                maxLengthSubstring = updatedSubstring;
            }
        }
        
        return findLongestEndingSubstring(currentIndex + 1, currentSubstring + myString[currentIndex], maxLengthSubstring);
    }
    
    return findLongestEndingSubstring(0, "", "");
}

