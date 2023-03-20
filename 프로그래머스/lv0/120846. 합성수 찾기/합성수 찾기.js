function solution(n) {
    let cnt = 0;
    
    for(let i = 4; i <= n; i++){
        for(let j = i - 1; j > 1; j--){
            if(i % j === 0) {
                cnt++;
                break;
            }
        }
    }
    
    return cnt;
}