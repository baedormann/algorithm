function solution(age) {
    ageStr = '';
    
    for(let i = 0; i < age.toString().length; i++){
        ageStr += String.fromCharCode(parseInt(age.toString()[i]) + 97);
    }
    
    return ageStr;
}