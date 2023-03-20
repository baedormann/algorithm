function solution(n) {
    let noArr = [];
    
    for(let i = n; i > 0; i--){
        if(n % i === 0) noArr.push(n / i)
    }
    
    return noArr;
}