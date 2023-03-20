function solution(n, numlist) {
    let newArr = [];
    
    numlist.map(e => {
        if(e % n === 0) newArr.push(e);
    })
    
    return newArr;
}