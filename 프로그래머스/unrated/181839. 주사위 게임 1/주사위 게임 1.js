function solution(a, b) {
    if((a - b) % 2 !== 0) return 2 * (a + b);
    else return a % 2 === 0 ? Math.abs(a - b) : a*a + b*b
}