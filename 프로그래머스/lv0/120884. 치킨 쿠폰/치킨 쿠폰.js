function solution(chicken) {
    let coupon = chicken;
    let cnt = 0;
    
    while(coupon >= 10){    
        let newChicken = Math.floor(coupon / 10);
        coupon -= newChicken * 9;
    
        cnt += newChicken
    }
    
    return cnt;
    
}