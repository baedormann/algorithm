function solution(n) {
    var nToStr = n.toString();
    var sum = 0;

    for(let i = 0; i < nToStr.length; i++){
        sum += parseInt(nToStr[i]);
    }

    return sum;
}