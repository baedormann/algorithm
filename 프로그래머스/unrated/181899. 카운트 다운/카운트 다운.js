function solution(start, end) {
    let arr = [start];
    
    while(arr[arr.length - 1] > end){
        arr.push(arr[arr.length - 1] - 1)
    }
    
    return arr;
}