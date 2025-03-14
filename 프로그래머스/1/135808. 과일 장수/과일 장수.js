function solution(k, m, score) {
    let answer = 0;
    score.sort((a, b) => b - a);
    
    for (let i = 0; i < score.length; i = i + m) {
        const min = score[i + m - 1];
        if (min) answer += min * m;
    }
    
    return answer;
}


// function solution(k, m, score) {
//     var answer = 0;
    
//     let sort = score.sort((a,b)=>b-a);
//     let newArr = [];
    
//     for (let i = 0; i < score.length; i += m) {
//         if(sort.slice(i, i + m).length === m){
//             newArr.push(sort.slice(i, i + m));
//         }
//     }
    
//     for(let j = 0; j < newArr.length; j++){
//         answer += Math.min(...newArr[j]) * m
//         // console.log(Math.min(...newArr[j]))
        
//         // newArr.reduce((cur,acc)=>{
//         //     Math.min(cur)
//         // })
//     }
    
//     return answer;
// }

// // 사과 점수 1 ~ k (k를 왜준거지? 필요없는거 아닌가)
// // m개씩 묶음 [4,4,4], [4,4,4], [2,2,2], [2,1,1]

// // 1. 크기순으로 배열 정렬
// // 2. m개씩 slice 하면서 새로운 배열에 담기
// // 3. for문을 돌면서, 각 배열의 가격 계산 (해당배열의 가장 작은 수)*(m) 해서 answer에 더하기