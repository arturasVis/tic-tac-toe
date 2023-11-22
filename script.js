const gameboard=(function(){
    let nextMarker="x"
    const nodeList=document.querySelectorAll(".cell")
    nodeList.forEach((node)=>{
        node.addEventListener("click",(e)=>{
            if(node.innerHTML=="")
            {
                const tile=document.createElement("img")
                if(nextMarker=="x"){
                    tile.setAttribute("src","images/x.png")
                    tile.style.width="50px"
                }else if(nextMarker=="o"){
                    tile.setAttribute("src","images/circle.png")
                    tile.style.width="50px"
                }
                node.appendChild(tile)
                addTile(nextMarker,node.id)
                game.changeState()
            }
            
        })
    })
    let board={"0":"","1":"","2":"",
                "3":"","4":"","5":"",
                "6":"","7":"","8":""
    }
    const clearBoard=()=>{
        for(let[key,value] in Object.entries(board))
        {
            board[key]=""
        }
        nodeList.forEach((node)=>{
            node.innerHTML=""
        })
        nextMarker="x"
    }
    const addTile=(marker,index)=>{
        board[index]=marker
        console.log(board)
    }
    const changeMarker=(next)=>{
        nextMarker=next
    }
    const checkIfWon=(marker)=>{
        if(board["0"]==marker && board["1"]==marker && board["2"]==marker){
            return true
        }
        else if(board["3"]==marker && board["4"]==marker && board["5"]==marker){
            return true
        }
        else if(board["6"]==marker && board["7"]==marker && board["8"]==marker){
            return true
        }
        else if(board["0"]==marker && board["3"]==marker && board["6"]==marker){
            return true
        }
        else if(board["1"]==marker && board["4"]==marker && board["7"]==marker){
            return true
        }
        else if(board["2"]==marker && board["5"]==marker && board["8"]==marker){
            return true
        }
        else if(board["0"]==marker && board["4"]==marker && board["8"]==marker){
            return true
        }
        else if(board["6"]==marker && board["4"]==marker && board["2"]==marker){
            return true
        }
        else
            return false
    }
    return {changeMarker,checkIfWon,clearBoard}
})();

const game=(function(){
    const player1=Player("x","player1")
    const player2=Player("o","player2")
    let nextMarker=player1.marker
    const resetButton=document.querySelector("#restart")
    const changeState=()=>{
        console.log(gameboard.checkIfWon(nextMarker))
        if(gameboard.checkIfWon(nextMarker)){
            switch (nextMarker){
                case player1.marker:
                    player1.addPoints()
                    alert(`Player ${player1.getName()} won`)
                    gameboard.clearBoard()
                    return ""
                    break
                case player2.marker:
                    player2.addPoints()
                    alert(`Player ${player2.getName()} has won`)
                    gameboard.clearBoard()
                    return ""
                    break
            }
        }
        if(nextMarker!=player1.marker){
            nextMarker=player1.marker
            gameboard.changeMarker(nextMarker)
        }
        else if(nextMarker!=player2.marker){
            nextMarker=player2.marker
            gameboard.changeMarker(nextMarker)
        }
    }
    resetButton.addEventListener("click",(e)=>{
        player1.resetPoints()
        player2.resetPoints()
        gameboard.clearBoard()
    })
    return{changeState}
})()
function Player(marker,name){
    let points=0

    const playerScore=document.querySelector(`#${name}_count`)
    const playerNamePlate=document.querySelector(`#${name}`)
    playerNamePlate.addEventListener("dblclick",(e)=>{
        playerNamePlate.contentEditable=true
    })
    playerNamePlate.addEventListener("blur",(e)=>{
        if(playerNamePlate.innerHTML!="")
        {
            close()
        }
        else{
            alert("Need a name")
        }
    })
    playerNamePlate.addEventListener("keypress",(e)=>{
        if(e.key==="Enter"){
            if(playerNamePlate.innerHTML!="")
                close()
            else{
                    alert("Need a name")
                }
        }
        
    })
    function close(){
        name=playerNamePlate.innerHTML
        playerNamePlate.contentEditable=false
    }
    const addPoints=()=>{
        points+=1
        playerScore.innerHTML=points
    }
    const getPoints=()=>{
        return points
    }
    const resetPoints=()=>{
        points=0
        playerScore.innerHTML="0"
    }
    const getName=()=>{
        return name
    }
    return{getName,marker,addPoints,getPoints,resetPoints}
}