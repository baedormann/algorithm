function solution(num_str) {
    return num_str.split('').reduce((acc, item) => acc = Number(acc) + Number(item))
}