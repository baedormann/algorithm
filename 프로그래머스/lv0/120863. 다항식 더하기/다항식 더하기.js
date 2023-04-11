function solution(polynomial) {
    let termArr = polynomial.split(' + ');
    let xSum = 0;
    let constSum = 0;
    let newExpr = '';
    
    for(let i of termArr){
        if(i.endsWith('x')){
            if(i !== 'x') xSum += Number(i.substring(0, i.length - 1));
            else xSum++;
        }
        else constSum += Number(i);
    }
    
    if(xSum) {
        if(xSum !== 1) newExpr += xSum;
        
        newExpr += 'x';
        
        if(constSum) newExpr += ' + ';
    }
    
    if(constSum) newExpr += constSum;
    console.log(newExpr)
    return newExpr;
}