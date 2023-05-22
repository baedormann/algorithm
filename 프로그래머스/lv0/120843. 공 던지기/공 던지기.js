function solution(numbers, k) {
    let i = 1 + k * 2 - 2;
    
    while(i > numbers.length) i -= numbers.length
        
    return i;
    
   
}