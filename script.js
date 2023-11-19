const gameboard=(function(){
    let board=[
                ["","",""],
                ["x","","x"],
                ["x","x",""]]
    const displayBoard=() =>{
        let boardDisplay=""
        for(let i=0;i<board.length;i++)
        {
            for(let k=0;k<board[i].length;k++)
            {
                boardDisplay+=k!=2?board[i][k]+"|":board[i][k]
            }
            boardDisplay+=i!=2?"\n-----\n":""
        }
        return boardDisplay;
    };
    const addTile=(marker,tileRow,tileColum)=>{
        board[tileColum][tileRow]=marker
    }
    const checkScenarioRow=(i)=>{
        
    }
    const checkIfWon=(marker)=>{
        for(let i=0;i<board.length;i++)
        {
            for(let k=0;k<board[i].length;k++)
            {
                switch(k){
                    case 0:
                       if(i==0 && board[i][k]==marker){
                        if(board[1][0]==board[i][k]&&board[2][0]==board[i][k])
                            return true
                        else if(board[1][1]==board[i][k]&&board[2][2]==board[i][k])
                            return true
                        else if(board[0][1]==board[i][k]&&board[0][2]==board[i][k])
                            return true
                       }
                       else if(i==1 && board[i][k]==marker){
                        if(board[0][0]==board[i][k]&&board[2][0]==board[i][k])
                            return true
                        else if(board[1][1]==board[i][k]&&board[1][2]==board[i][k])
                            return true
                        

                       }
                       else if(i==2 && board[i][k]==marker){
                        if(board[0][0]==board[i][k]&&board[1][0]==board[i][k])
                            return true
                        else if(board[1][1]==board[i][k]&&board[2][0]==board[i][k])
                            return true
                        else if(board[1][1]==board[i][k]&&board[0][2]==board[i][k])
                            return true
                       }
                    break
                    case 1:
                        if(i==0 && board[i][k]==marker){
                            if(board[1][1]==board[i][k]&&board[2][1]==board[i][k])
                                return true
                           }
                           else if(i==1 && board[i][k]==marker){
                            if(board[0][0]==board[i][k]&&board[2][0]==board[i][k])
                                return true
                            else if(board[1][0]==board[i][k]&&board[1][2]==board[i][k])
                                return true
    
                           }
                           else if(i==2 && board[i][k]==marker){
                            if(board[0][0]==board[i][k]&&board[1][0]==board[i][k])
                                return true
                            else if(board[1][1]==board[i][k]&&board[2][0]==board[i][k])
                                return true
                            else if(board[i][1]==board[i][k]&&board[i][2]==board[i][k])
                                return true
    
                           }
                    break
                    case 2:
                        if(board[i][k]==marker&&board[i][k]==board[1][2]&&board[i][k]==board[2][2])
                        {
                            return true
                        }
                    break
                }
            }
        }
        return false
    }
    return {displayBoard,addTile,checkIfWon}
})();
function Player(marker,name){
    return{marker,name}
}
console.log(gameboard.checkIfWon("x"))
