function solution(my_string) {
    let newStr = '';
    
    for(let i = 0; i < my_string.length; i++){
        my_string[i] == my_string[i].toUpperCase() 
            ? newStr += my_string[i].toLowerCase() 
            : newStr += my_string[i].toUpperCase();
    }
    
    return newStr;
}