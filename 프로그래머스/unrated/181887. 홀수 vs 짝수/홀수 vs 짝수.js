function solution(num_list) {
    let sumArr = [0, 0];
    
    num_list.forEach((e, i) => i % 2 === 0 ? sumArr[0] += e : sumArr[1] += e);
    
    return Math.max(...sumArr)
}