function solution(my_string) {
    let arr = Array.from(my_string);
    
    for(let i in arr) arr[i] = arr[i].toLowerCase();
    
    arr.sort();
    
    return arr.join('');
    
}