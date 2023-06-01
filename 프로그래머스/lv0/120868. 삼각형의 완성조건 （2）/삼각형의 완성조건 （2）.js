function solution(sides) {
    return sides[0] > sides[1]
    ? (sides[1] + sides[0]) - (sides[0] - sides[1]) - 1
    : (sides[0] + sides[1]) - (sides[1] - sides[0]) - 1
    
}