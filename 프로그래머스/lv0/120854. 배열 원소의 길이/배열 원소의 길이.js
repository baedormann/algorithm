function solution(strlist) {
    let lengthArr = [];
    strlist.map(e => lengthArr.push(e.length));
    
    return lengthArr;
}