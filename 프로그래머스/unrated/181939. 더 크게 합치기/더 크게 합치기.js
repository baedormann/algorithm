function solution(a, b) {
    a = a.toString();
    b = b.toString();
    
    return parseInt(a + b > b + a ? a + b : b + a);
}