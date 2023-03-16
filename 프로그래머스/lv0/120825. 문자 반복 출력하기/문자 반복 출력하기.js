function solution(my_string, n) {
    var newStr = '';
    
    for(let i = 0; i < my_string.length; i++){
        for(let j = 0; j < n; j++){
            newStr += my_string[i];    
        }
    }
    
    return newStr;
}