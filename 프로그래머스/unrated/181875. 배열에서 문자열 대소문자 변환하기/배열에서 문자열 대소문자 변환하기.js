function solution(strArr) {
    for(let i in strArr){
        i % 2 === 0
        ? strArr[i] = strArr[i].toLowerCase()
        : strArr[i] = strArr[i].toUpperCase();
    }
    
    return strArr;
}