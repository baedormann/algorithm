function solution(arr, delete_list) {
    return arr.filter(e => !delete_list.some(e1 => e === e1))
}