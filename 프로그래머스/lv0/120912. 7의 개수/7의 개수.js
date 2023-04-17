function solution(array) {
    let cnt = 0;
    for(let number of array){
        for(let char of number.toString()){
            if(char == '7') cnt++
        }
    }
    
    return cnt;
}