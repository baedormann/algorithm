function solution(before, after) {    
    let arrBefore = Array.from(before).sort();
    let arrAfter = Array.from(after).sort();
    
    for(let i in arrBefore){
        if(arrBefore[i] !== arrAfter[i])
            return 0;
    }
    
    return 1;
}