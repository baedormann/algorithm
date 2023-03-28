function solution(keyinput, board) {
    let nowXy = [0, 0];
    let maxX = (board[0] - 1) / 2;
    let maxY = (board[1] - 1) / 2;
    
    for(let i in keyinput){

        
        if(keyinput[i] == 'up' && nowXy[1] + 1 <= maxY) {    
            nowXy[1]++;
        }
        else if(keyinput[i] == 'down' && nowXy[1] - 1 >= -maxY) {
            nowXy[1]--;   
        }
        else if(keyinput[i] == 'left' && nowXy[0] - 1 >= -maxX) {
            nowXy[0]--; 
        }
        else if(keyinput[i] == 'right' && nowXy[0] + 1 <= maxX) {
            nowXy[0]++;
        }
    }
    
    return nowXy;
}