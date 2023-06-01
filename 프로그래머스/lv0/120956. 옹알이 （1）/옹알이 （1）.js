function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let cnt = 0;
    
    babbling.map(b => {
        let bLength = b.length;
        words.map( w => b.includes(w) && (bLength -= w.length) );
        if(bLength === 0) cnt++;
    })
    
    return cnt;
}