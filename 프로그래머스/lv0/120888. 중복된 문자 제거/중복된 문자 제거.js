function solution(my_string) {
    let strArr = Array.from(my_string);
    let pushArr = [];
    
    for(let i in strArr){
        if(pushArr.indexOf(strArr[i]) === -1) pushArr.push(strArr[i]);
    }
    
    return pushArr.join('');
}