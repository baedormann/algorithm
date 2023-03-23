function solution(i, j, k) {
    var cnt = 0;
    
    for(let a = i; a <= j; a++){
        for(let b = 0; b < a.toString().length; b++){
            if(a.toString()[b] === k.toString()) cnt++
        }
    }
    
    return cnt;
}