function solution(numbers) {
    var avg = 0;
    
    for(let i in numbers){
        avg += numbers[i]
    }
    
    avg /= numbers.length;
    
    return avg;
}