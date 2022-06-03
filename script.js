var player1 = "O";
var player2 = "X";
var currentPlayer = player1;
var winner = null;
var secondColor = "rgb(29, 142, 139)";

var gameCells = document.getElementsByClassName("cell");
var gameBoardColor = gameCells[0].style.backgroundColor;


initGame();

function initGame(){
    for(var i=0; i<gameCells.length; ++i){
        gameCells[i].addEventListener("click", function(){
            if(this.textContent ==""){
                this.textContent = currentPlayer;
                gameCheck();
            }
        });
    }
}

function clearBoard(){
    for(var i=0; i<gameCells.length; ++i){
        gameCells[i].textContent = "";
    }
    currentPlayer = player1;
}

function gameCheck(){
    winner = checkBoard();
    changeCurrentPlayer();
    if(winner == null){
        if(isBoardFull()){

            clearBoard();
        }
    }else{
        setBoardCellsWith(winner);
        changeBoardColor(secondColor);
        setTimeout(function(){changeBoardColor(gameBoardColor)},1500);
        setTimeout(function(){clearBoard()},2000);

    }

    
}



function checkBoard(){
    var inRow = 0;
    //checking top row
    for(var i=0; i<3; ++i){
        if(gameCells[i].textContent == currentPlayer){
            ++inRow;
        }else break;
    }
    if(inRow == 3){
        return currentPlayer;
    } 
    inRow = 0;
    //checking middle row
    for(var i=3; i<6; ++i){
        if(gameCells[i].textContent == currentPlayer){
            ++inRow;
        }else break;
    }
    if(inRow == 3){
        return currentPlayer;
    } 
    inRow = 0;
    //checking bottom row
    for(var i=6; i<9; ++i){
        if(gameCells[i].textContent == currentPlayer){
            ++inRow;
        }else break;
    }
    if(inRow == 3){
        return currentPlayer;
    } 
    inRow = 0;
    //checking left column
    for(var i=0; i<7; i+=3){
        if(gameCells[i].textContent == currentPlayer){
            ++inRow;
        }else break;
    }
    if(inRow == 3){
        return currentPlayer;
    } 
    inRow = 0;
    //checking middle column
    for(var i=1; i<8; i+=3){
        if(gameCells[i].textContent == currentPlayer){
            ++inRow;
        }else break;
    }
    if(inRow == 3){
        return currentPlayer;
    } 
    inRow = 0;
    //checking right column
    for(var i=3; i<10; i+=3){
        if(gameCells[i].textContent == currentPlayer){
            ++inRow;
        }else break;
    }
    if(inRow == 3){
        return currentPlayer;
    } 
    inRow = 0;
    //checking first diagonal
    for(var i=8; i>=0; i-=4){
        if(gameCells[i].textContent == currentPlayer){
            ++inRow;
        }else break;
    }
    if(inRow == 3){
        return currentPlayer;
    } 
    inRow = 0;
    //checking second diagonal
    for(var i=6; i>=2; i-=2){
        if(gameCells[i].textContent == currentPlayer){
            ++inRow;
        }else break;
    }
    if(inRow == 3){
        return currentPlayer;
    } 
}

function isBoardFull(){
    for(var i=0; i<gameCells.length; ++i){
        if(gameCells[i].textContent == "") return false;
    }
    return true;
}

function changeCurrentPlayer(){
    if(currentPlayer == player1){
        currentPlayer = player2;
    }else currentPlayer = player1;
}

function setBoardCellsWith(content){
    for(var i=0; i<gameCells.length; ++i){
        gameCells[i].textContent = content;
    }
}

function changeBoardColor(color){
    for(var i=0; i<gameCells.length; ++i){
        gameCells[i].style.backgroundColor = color;
    }
}