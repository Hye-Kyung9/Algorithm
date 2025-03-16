function solution(n) {
    let binaryOne = n.toString(2).split("1").length-1;
    let result = n+1;
    
    while(result.toString(2).split("1").length-1 !== binaryOne){
        result++
    }
    
    return result;
}