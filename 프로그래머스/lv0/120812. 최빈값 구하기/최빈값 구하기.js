function solution(paramArr) {    
    setArr = Array.from(new Set(paramArr));
    cntArr = [];
    
    for(let e1 of paramArr){
        for(let i in setArr){
            if(cntArr[i] === undefined) cntArr.push(0);
            if(e1 === setArr[i]){
                cntArr[i]++;
            }
        }
    }
    
    let cntArrCopy = Array.from(cntArr);
    cntArrCopy.sort((a, b) => {
        return b - a;
    });
    
    if(cntArrCopy[0] === cntArrCopy[1]) return -1;
    
    console.log(cntArrCopy[0])
    console.log(cntArr.indexOf(cntArrCopy[0]))
    
    return setArr[cntArr.indexOf(cntArrCopy[0])];
}