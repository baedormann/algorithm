function solution(letter) {
    let charArr = letter.split(' ');
    let morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }
    let morseMap = new Map();
    
    for(let i in morse){
        morseMap.set(i, morse[i])
    }
    
    let msg = '';
    
    for(let i of charArr){
        msg += morseMap.get(i)
    }
    
    return msg
}