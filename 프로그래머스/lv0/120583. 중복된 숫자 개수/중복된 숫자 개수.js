function solution(array, n) {
    var answer = 0;
    
    for(let i = 0; i < array.length; i++){
        array[i] === n ? answer++ : '';
    }
    
    return answer;
}