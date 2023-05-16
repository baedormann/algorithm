function solution(my_string) {
    my_string = my_string.split('').filter(e => e !== ' ').map(e => Number.isNaN(parseInt(e)) ? e : parseInt(e) );
    let num = 0;
    let total = 0;
    let lastOper;
    let nth = 1;
    
    for(let i = 0; i < my_string.length; i++){
        let curItem = my_string[i];
        if(curItem === '+' || curItem === '-'){
            lastOper = curItem;
            nth = 1;
            total += num;
            num = 0;
            continue;
        }
        
        switch(lastOper){
            case null:
            case undefined: num = num * 10 + curItem;
                break;
            case '+': num = num * nth + curItem;
                break;
            case '-': num = num * nth - curItem;
                break;
        }
        
        nth = 10;
    }
    total += num;
    
    return total;
}