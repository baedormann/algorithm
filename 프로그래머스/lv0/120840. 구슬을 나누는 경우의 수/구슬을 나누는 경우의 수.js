function solution(balls, share) {
    let numer = 1;
    let denom1 = 1;
    let denom2 = 1;
    
    for(let i = 1; i <= balls; i++){
        numer *= i;
    }
    
    for(let i = 1; i <= balls - share; i++){
        denom1 *= i;
    }
    
    for(let i = 1; i <= share; i++){
        denom2 *= i;
    }
    
    return Math.round(numer / (denom1 * denom2))
}