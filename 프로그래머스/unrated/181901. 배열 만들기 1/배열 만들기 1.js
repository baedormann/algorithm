function solution(n, k) {
    let arr = [];
    
    for(let i = k; i <= n; i++)
        if(i % k === 0) arr.push(i);
    
    return arr.sort((a, b) => a - b)
}