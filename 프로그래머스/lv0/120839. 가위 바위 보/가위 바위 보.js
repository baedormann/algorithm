function solution(rsp) {
    let winStr = ''
    
    for(let i = 0; i < rsp.length; i++){
        if(rsp[i] === '0') winStr += '5';
        else if(rsp[i] === '2') winStr += '0';
        else if(rsp[i] === '5') winStr += '2';
    }
    
    return winStr;
}