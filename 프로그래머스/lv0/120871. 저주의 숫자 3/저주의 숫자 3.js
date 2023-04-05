function solution(n) {
    let newNum = 0;
    
    for(let i = 1; i <= n; i++){
        newNum++
        newNum = getValidNum(newNum);
    }
    
    return newNum;
}

function getValidNum(number){
    let postNum = number;
    
    if(number % 3 === 0) ++postNum;
    else if(number % 10 == 3) ++postNum;
    else if(Math.floor(number % 100 / 10) == 3) ++postNum;
    else if(Math.floor(number / 10) == 3) ++postNum;
    
    if(number === postNum) return postNum;
    else return getValidNum(postNum);
}