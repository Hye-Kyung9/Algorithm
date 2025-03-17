function solution(x) {
    var answer = true;
    const strArr = String(x).split('');
    let hap = 0;
    
    for (let i=0; i<strArr.length; i++){
        hap += Number(strArr[i]);
    }
    if(x%hap !==0) answer = false
    
    return answer
}