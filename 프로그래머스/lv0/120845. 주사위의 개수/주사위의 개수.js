function solution(box, n) {
    let cntArr = [];
    let volume = 1;
    
    for(let i = 0; i < box.length; i++){
        cntArr.push(Math.floor(box[i] / n));
    }
    
    for(let i = 0; i < cntArr.length; i++){
        volume *= cntArr[i];
    }
    
    return volume;
}