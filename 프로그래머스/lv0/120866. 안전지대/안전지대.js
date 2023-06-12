function solution(board) {
    let bombSites = [];
    // i는 세로 방향 인덱스, j는 가로 방향 인덱스
    board.forEach((e, i) => e.forEach((e1, j) => e1 === 1 ? bombSites.push([i, j]) : false));
    
    bombSites.forEach((e, i) => {
        for(let j = -1; j <= 1; j++){
            let dangerX = e[0] + j
            
            for(let k = -1; k <= 1; k++){
                let dangerY = e[1] + k;
                
                if(dangerX < 0 || dangerY < 0 || dangerY >= board.length || dangerX >= board.length) continue;
                if(board[dangerX][dangerY] === 1) continue;    
                
                board[dangerX][dangerY] = 2;
            }    
        }
    })
    
    return board.join(',').split(',').filter(e => e === '0').length;
}