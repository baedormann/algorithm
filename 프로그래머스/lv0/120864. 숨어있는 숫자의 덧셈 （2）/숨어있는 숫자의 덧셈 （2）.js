function solution(my_string) {
    let sum = 0;
    let sumStr = '';
    
    for(let i in my_string){
        if(!Number.isNaN(parseInt(my_string[i])))
            sumStr += my_string[i];
        else{
            sumStr === '' ? sum += 0 : sum += parseInt(sumStr);
            sumStr = '';
        }
    }
    
    return sumStr === '' ? sum : sum + parseInt(sumStr);
}