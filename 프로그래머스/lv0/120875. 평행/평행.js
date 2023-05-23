function solution(dots) {
    let i = Math.abs(dots[0][0] - dots[1][0])
    let j = Math.abs(dots[0][1] - dots[1][1])
    let k = Math.abs(dots[2][0] - dots[3][0])
    let l = Math.abs(dots[2][1] - dots[3][1])
    
    if(i/j === k/l) return 1;
    else return 0;
}