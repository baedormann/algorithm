function solution(my_string) {
    var reversStr = '';
    
    for(let i = my_string.length - 1; i >= 0; i--){
        reversStr += my_string[i];
    }
    
    return reversStr;
}