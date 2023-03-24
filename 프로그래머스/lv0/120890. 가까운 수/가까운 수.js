function solution(array, n) {
    array.sort((a, b) => {return a - b})
    let nearest = array[0];
    
    for(let i = 0; i < array.length; i++){
        let diff = getAbsolute(array[i] - n);
        let nDiff = getAbsolute(nearest - n);

        if(diff < nDiff){
            nearest = array[i];
        }
    }
    
    return nearest;
}

let getAbsolute = (num) => {
    return num >= 0 ? num : -num;
} 