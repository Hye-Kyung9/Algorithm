function solution(name, yearning, photo) {
    var scoreMap = {}; //name:yearning객체
    for (var i = 0; i < name.length; i++) {
        scoreMap[name[i]] = yearning[i]; //객체생성
    }
    
    return photo.map(x => 
        x.reduce((acc,cur)=> acc + (scoreMap[cur] || 0), 0)
    );
}