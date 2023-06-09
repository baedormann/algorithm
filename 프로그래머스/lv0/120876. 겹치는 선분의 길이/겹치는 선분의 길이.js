function solution(lines) {
    let newArr = lines.map(e => Array.from(new Set(e.map((e1, i1) => i1 === e.length - 1 ? e1 - 0.5 : e1 + 0.5))));
    let acc = [];
    
    newArr.map((e, i) => {
        if(e[1] === undefined) acc.push(e[0]);
        for(let j = e[0]; j <= e[1]; j++){
            acc.push(j)
        }
    });
    //return newArr;
    
    let arr1 = [];
    let arr2 = []
    acc.forEach(e => {
        !arr1.includes(e) 
            ? arr1.push(e) 
            : !arr2.includes(e) ? arr2.push(e) : null;   
    })
    return arr2.length;
}