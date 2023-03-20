function solution(numbers) {
    numbers.sort(function(a, b){
        return b - a;
    });
    
    let length = numbers.length - 1;
    let multiMax = numbers[0] * numbers[1];
    let multiMin = numbers[length] * numbers[length - 1];
    
    return  multiMax > multiMin ? multiMax : multiMin;
    
}