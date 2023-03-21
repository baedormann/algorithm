function solution(num_list, n) {
    let newArr = [];
    
    for(let i = 0; i < num_list.length; i++){
        if( (i + n) % n === 0 )
            newArr.push([]);
    
        newArr[Math.floor(i / n)].push(num_list[i]);
    }
    
    return newArr;
}