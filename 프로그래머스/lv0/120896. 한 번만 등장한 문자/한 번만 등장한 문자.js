function solution(s) {
    let setArr = Array.from(new Set(s));
    let strArr = Array.from(s);
    let cnt = 0;
    let resultArr = [];
    
    for(let e of setArr){
        for(let e1 of strArr){
            if(e === e1){
                if(++cnt >= 2) break;
            }
        }
        
        if(cnt === 1) resultArr.push(e);
        cnt = 0;
    }
    
    return resultArr.sort().join('');
}

