function solution(array) {
    let maxNo = Math.max(...array);
    
    return [maxNo, array.indexOf(maxNo)];
}