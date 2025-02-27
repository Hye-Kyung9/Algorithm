function solution(players, callings) {
    let idx;
    let curName;
    let frontName;
    const idxList = {}
    
    players.forEach((name,index)=>idxList[name]=index)
    
    for(let call of callings){
        
        idx = idxList[call]
        
        curName = players[idx]
        frontName = players[idx-1]
        
        idxList[call]-=1
        idxList[frontName]+=1
        players[idx] = frontName
        players[idx-1] = curName
    }    

    return players;
}
