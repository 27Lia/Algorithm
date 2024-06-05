function solution(q, r, code) {
    return Array.from(code)
        .map((char, index) => ({ char, index }))
        .filter(item => item.index % q === r)
        .map(item => item.char)
        .join('');
}
