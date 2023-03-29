function solution(a, b) {
    let aa = a;
    let bb = b;
    
    for(let i = aa; i > 0; i--){
        if(b % i === 0 && a % i === 0){
            a = a / i;
            b = b / i;
            break;
        }
    }
    
    bb = b;
    for(let i = 0; i < bb; i++){
        if(b % 2 === 0) b /= 2;
        if(b % 5 === 0) b /= 5;
        if(b === 1) return 1;
    }
    
    return 2;
}