function solution(my_str, n, strArr=[]) {
    let newStr = my_str.substring(0, n);
    
    if(newStr.length !== 0) {
        strArr.push(newStr);
        solution(my_str.substring(n), n, strArr);
    }
    
    return strArr
}