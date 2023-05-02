function solution(arr, k) {
    if(k % 2 !== 0) for(let i in arr) arr[i] *= k;
    else for(let i in arr) arr[i] += k;

    return arr;
}