function solution(id_pw, db) {
    let msg = 'fail';
    
    for(let i in db){
        if(id_pw[0] === db[i][0]){
            if(id_pw[1] === db[i][1])
                msg = 'login';
            else 
                msg = 'wrong pw';
            
            return msg;
        }
    }
    
    return msg;
}