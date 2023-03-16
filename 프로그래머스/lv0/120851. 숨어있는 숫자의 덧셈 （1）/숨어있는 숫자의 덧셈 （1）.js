function solution(my_string) {
    let sum = 0;
    
    for(let i = 0; i < my_string.length; i++){
        if(my_string[i] / 1) sum += +my_string[i]
    }
    
    return sum;
}