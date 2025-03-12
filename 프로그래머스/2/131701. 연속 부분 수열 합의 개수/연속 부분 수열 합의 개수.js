function solution(elements) {
    const n = elements.length;
    const extended = [...elements, ...elements]; // 원형 수열을 표현하기 위해 두 배로 확장 [7, 9, 1, 1, 4, 7, 9, 1, 1, 4]
    const sums = new Set(); // 중복제거 객체

    // 부분 수열 길이 (1부터 n까지)
    for (let length = 1; length <= n; length++) {
        for (let start = 0; start < n; start++) { //시작 위치
            let sum = 0;

            // length만큼 연속된 부분합 구하기
            for (let i = 0; i < length; i++) {
                sum += extended[start + i];
            }
            sums.add(sum);
        }
    }
    
    return sums.size;
}