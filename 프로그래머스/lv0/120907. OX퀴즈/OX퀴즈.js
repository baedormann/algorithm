function solution(quiz) {
    return quiz.map(e => {
        let expr = e.split(' = ');
        let left = expr[0];
        let right = expr[1];
        
        if(left.includes(' - '))
            left = left.split(' - ').map((e, i) => i !== 1 ? +e : -e);
        else
            left = left.split(' + ').map(e => +e);
        
        console.log(left)
        return left[0] + left[1] === parseInt(right) ? 'O' : 'X'
    })
}