function solution(numbers, numArr = []) {
    let strArr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  
    for(let i in strArr)
        numbers = numbers.replaceAll(strArr[i], i);
    
    return parseInt(numbers);
}
