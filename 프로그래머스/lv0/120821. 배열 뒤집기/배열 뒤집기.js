function solution(num_list) {    
    let reverseArr = [];
    
    for(let i = num_list.length - 1; i >= 0; i--){
        reverseArr.push(num_list[i])
    }
    
    return reverseArr;  
}