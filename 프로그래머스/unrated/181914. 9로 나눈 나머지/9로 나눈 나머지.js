function solution(number) {
    return number.split('').map(e => parseInt(e)).reduce((acc, cur) => acc += cur) % 9;
}