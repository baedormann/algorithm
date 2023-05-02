function solution(num_list) {
    let prod = 1;
    let sum = 0;
    
    num_list.map(e => {
        prod *= e;
        sum += e;
    });
  
    return prod < sum**2 ? 1 : 0;
}