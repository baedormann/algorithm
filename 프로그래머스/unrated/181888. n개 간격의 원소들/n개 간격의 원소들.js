function solution(num_list, n) {
    let newArr = [];
    
    for(let i = 0; i < num_list.length; i = i + n){
        newArr.push(num_list[i]);    
    }
    
    return newArr;
}