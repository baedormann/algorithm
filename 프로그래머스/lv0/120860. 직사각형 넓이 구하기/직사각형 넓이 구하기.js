function solution(dots) {
    dots.sort((a, b) =>  a[0] - b[0])
    
    let x = Math.abs(dots[2][0] - dots[0][0]);
    let y = Math.abs(dots[1][1] - dots[0][1]);
    
    return x * y;
}