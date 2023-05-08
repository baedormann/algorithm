function solution(rny_string) {
    let str = '';
    
    for(let i of rny_string)
        i === 'm' ? str += 'rn' : str += i;
    
    return str;
}