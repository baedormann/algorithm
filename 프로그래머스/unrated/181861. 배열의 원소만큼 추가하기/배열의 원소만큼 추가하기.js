function solution(arr) {
    var numArr = [];
    
    arr.forEach(e => {
        let iter = e;
        while(iter > 0){
            numArr.push(e);
            iter--;
        }
    });
    
    return numArr;
}