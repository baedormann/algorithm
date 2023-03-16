function solution(my_string) {
    let vowelArr = ['a', 'e', 'i', 'o', 'u'];
    let concatStr = '';
    
    for(let i = 0; i < my_string.length; i++){
        var isVowel = false;
        
        for(let j = 0; j < vowelArr.length; j++){
            if(my_string[i] == vowelArr[j]){
                isVowel = true;
                
            }
            if(j == vowelArr.length - 1 && isVowel == false)
                concatStr += my_string[i];
        }
    }
    
    return concatStr;
}