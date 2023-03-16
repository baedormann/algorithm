function solution(num_list) {
    var EvenOddArr = [0, 0];
    
    num_list.map(x => x % 2 == 0 ? EvenOddArr[0]++ : EvenOddArr[1]++)
    
    return EvenOddArr;
}