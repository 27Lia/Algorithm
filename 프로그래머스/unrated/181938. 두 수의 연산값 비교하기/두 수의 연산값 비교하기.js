function solution(a, b) {
    
    
    // a ⊕ b와 2 * a * b 중 더 큰 값을 return
    const combination1 = String(a) + String(b);
    const combination2 = 2 * a * b;

    // 같거나 a + b가 더 크면 a+b를 리턴
    if(combination1 >= combination2 )  {
            return Number(combination1)
        }
    else {
         return combination2
    }
}



