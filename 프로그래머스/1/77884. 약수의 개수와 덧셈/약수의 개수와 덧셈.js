function solution(left, right) {
    let result = 0;

    //left~right사이의 수만큼 반복
    for (let i = left; i <= right; i++) {
        let count = 0;

        // 약수 개수 구하기
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) count++;
        }

        // 약수 개수가 짝수면 더하고, 홀수면 빼기
        result += count % 2 === 0 ? i : -i;
    }

    return result;
}


// 1부터 해당 수까지 for문 반복하면서, 나머지가 0인것만 담으면 되나