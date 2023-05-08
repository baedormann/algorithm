function solution(num_list) {
    let oddArr = [];
    let evenArr = [];
    
    for(let i of num_list){
        i % 2 === 0 ? evenArr.push(i) : oddArr.push(i);
    }
    
    return parseInt(oddArr.join('')) + parseInt(evenArr.join(''))
}