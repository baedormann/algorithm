function solution(n) {
    let numArr = [];
    
    let i = 2;
    while(n > 0){
        if(n % i === 0) {
            n /= i;
            numArr.push(i);
            console.log(numArr)
        }
        else i++;

        if(i > n) break;
    }
    
    return [...new Set(numArr)];
}