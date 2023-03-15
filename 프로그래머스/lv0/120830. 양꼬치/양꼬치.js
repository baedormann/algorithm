function solution(n, k) {  
    k -= Math.floor(n / 10);
    
    return 12000 * n + 2000 * k;
}