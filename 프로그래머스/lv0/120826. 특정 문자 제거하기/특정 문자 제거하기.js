function solution(my_string, letter) {
    let indexArr = [];
    let subStr = '';
    let subStrIndex = 0;
    
    for(let i = 0; i < my_string.length; i++){
        if(my_string[i] == letter) indexArr.push(i)
    }
    
    for(let i = 0; i < indexArr.length; i++){
        subStr += my_string.substring(subStrIndex, indexArr[i])
        subStrIndex = indexArr[i] + 1;
    }
    
    subStr += my_string.substring(subStrIndex, my_string.length)
    
    return subStr;
}