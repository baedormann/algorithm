function solution(dot) {
    let biVal = 0;
 
    if(dot[0] > 0) biVal += 10;
    if(dot[1] > 0) biVal++;
    
    switch(biVal){
        case 0: return 3;
        case 1: return 2;
        case 10: return 4;
        case 11: return 1;
    }
}