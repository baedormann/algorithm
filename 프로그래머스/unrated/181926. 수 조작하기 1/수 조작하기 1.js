function solution(n, control) {
    for(let i in control){
        switch(control[i]){
            case 'w': n++;
                break;
            case 's': n--;
                break;
            case 'd': n += 10;
                break;
            case 'a': n -= 10;
        }    
    }
    
    return n;
}