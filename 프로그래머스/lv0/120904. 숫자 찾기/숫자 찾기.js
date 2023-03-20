function solution(num, k) {
    let noArr = Array.from(num.toString());
 
    for(let i = 0; i < noArr.length; i++){
        if(noArr[i] == k) return i + 1;
    }
    
    return -1;
}