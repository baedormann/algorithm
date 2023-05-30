function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let cnt = 0;
    
    babbling.forEach(b => {
        let bLength = b.length;
        words.forEach( w => b.includes(w) && (bLength -= w.length) );
        if(bLength === 0) cnt++;
    })
    
    return cnt;
}