function solution(arr1, arr2) {
    var answer = [];
    for(var i=0; i < arr1.length; i++){
        var current = [];
        for(var j=0; j < arr1[i].length; j++){
            current.push(arr1[i][j]+arr2[i][j]);
        }
        answer.push(current)
    }
    return answer;
}