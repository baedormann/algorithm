function solution(spell, dic) {
    let cnt = 0;
    
    for(let word of dic){
        let setWord = Array.from(new Set(word));
        
        for(let char of spell){
            if(setWord.includes(char)) cnt++;
        }
        
        if(cnt === spell.length) return 1;
        cnt = 0;
    }
    
    return 2;
}