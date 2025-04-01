function solution(myString) {
    var answer = myString.split("x")
    const filteredArr = answer.filter(item => item !== "")
    return filteredArr.sort();
}