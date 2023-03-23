function solution(emergency) {
    let arr = [...emergency];
    let indexArr = [];
    
    arr.sort((a, b) => b - a)
    
    for(let i = 0; i < arr.length; i++){  
        indexArr.push(arr.indexOf(emergency[i]) + 1);
    }
    
    return indexArr;
}