function solution(A, B) {
    A.sort((a, b) => a - b); //오름차순
    B.sort((a, b) => b - a); //내림차순
    
    return A.reduce((acc, cur, i) => acc + cur * B[i], 0);
}
