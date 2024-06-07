function solution(my_string, indices) {
    const charArray = my_string.split('');
    
    const resultArray = charArray.filter((char, index) => !indices.includes(index));
    const resultString = resultArray.join('');
    
    return resultString;
}
