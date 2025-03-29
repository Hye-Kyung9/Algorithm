function solution(numbers) {
    let answer = Array(numbers.length).fill(-1); // 기본값 -1로 초기화
    let stack = []; // 스택 (인덱스 저장)

    for (let i = 0; i < numbers.length; i++) {
        // 스택이 비어있지 않고, 현재 값이 스택 top 인덱스의 값보다 크면
        while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
            let index = stack.pop(); // 뒷 큰수를 찾지 못한 값의 인덱스
            answer[index] = numbers[i]; // 현재 값이 뒷 큰수
        }
        stack.push(i); // 현재 인덱스를 스택에 저장
    }

    return answer;
}







// function solution(numbers) {
//     let answer = [];

//     for (let i = 0; i < numbers.length; i++) {
//         let found = false;

//         for (let j = i + 1; j < numbers.length; j++) {
//             if (numbers[j] > numbers[i]) {
//                 answer.push(numbers[j]);
//                 found = true;
//                 break;
//             }
//         }

//         if (!found) answer.push(-1);
//     }

//     return answer;
// }