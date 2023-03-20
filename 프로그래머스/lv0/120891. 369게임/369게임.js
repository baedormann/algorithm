function solution(order) {
    numArr = order.toString();
    let cnt = 0;

    Array.from(numArr).map(e => {
        if(e != 0 && e % 3 === 0) cnt++;
    })
    
    return cnt;
}