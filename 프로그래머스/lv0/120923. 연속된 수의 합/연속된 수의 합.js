function solution(num, total) {
    var numArr = [];
    var min = total % num === 0 ? total / num - ~~(num / 2) : ~~(total / num) - total % num + 1;
    
    for(let i = min; i < min + num; i++){
        numArr.push(i)
    }
    
    return numArr;
}