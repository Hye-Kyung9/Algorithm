function solution(s) {
    let stack = []; // 여는 괄호 '('를 저장할 스택
    
    for (const el of s) {
        if (el === '(') {
            stack.push(el);
        } else {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }
    
    return stack.length === 0;
}



// function solution(s){
//     const obj = {}; // 괄호 개수를 저장할 객체
    
//     for(const el of s) {
//         obj[el] = (obj[el] || 0) + 1;
//     }
    
//     if (s[s.length - 1] === '(' || s.charAt(0) ===')') return false;
//     if ((obj['('] || 0) !== (obj[')'] || 0)) return false; 

//     return true;
// }

/*
올바르지 못한 괄호
1. 마지막이 (로 끝나는 경우
2. (의 갯수와 )의 갯수가 다른경우
+3. )로 시작하는경우 ????????????/
+4. 헉스 "())((()))(()" 이런케이스가 잇구나
*/