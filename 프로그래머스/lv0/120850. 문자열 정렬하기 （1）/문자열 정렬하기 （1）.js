function solution(my_string) {
    let ascArr = [];
    
    for(let i = 0; i < my_string.length; i++){
        if(my_string[i] % 1 === 0) ascArr.push(+my_string[i]);
    }
    
    ascArr.sort(function(a, b){return a - b})
    
    return ascArr;
}