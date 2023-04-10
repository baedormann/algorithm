function solution(score) {
    //0. 각 요소에 2번째 요소에 index값을 추가한다.
    for(let i in score){
        score[i].push(i);
    }
    
    //1. 각 요소배열의 0번째 값, 1번째 값의 합을 구한다.
    //2. 내림차순 정렬한다.
    score.sort((a, b) => {
        return (b[0] + b[1]) - (a[0] + a[1]);
    })
    
    //3. 2번째 값으로 3번째 index에 등수 값을 추가한다.(합이 같으면 같은 등수로 취급한다.).
    let dupCnt = 0;
    for(let i in score){
        if(score[i][0] + score[i][1] === score[i-1]?.[0] + score[i-1]?.[1]){
            dupCnt++;
        }
        else dupCnt = 0;
        
        score[i].push(i - dupCnt + 1);
    }
    
    //4. 2번째 값으로 원래 순서대로 되돌린다.
    score.sort((a, b) => {
        return a[2] - b[2];
    })
    
    let rankArr = [];
    
    for(let i of score) rankArr.push(i[3])
    
    // . 원본 배열 각 요소의 순위를 담은 배열을 반환한다.
    return rankArr;
}