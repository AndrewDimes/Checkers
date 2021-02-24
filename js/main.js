/*----- constants -----*/

const board = [
    [null, 'red', null, 'red', null, 'red', null, 'red'],
    ['red', null, 'red', null, 'red', null, 'red', null],
    [null, 'red', null, 'red', null, 'red', null, 'red'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['black', null, 'black', null, 'black', null, 'black', null],
    [null, 'black', null, 'black', null, 'black', null, 'black'],
    ['black', null, 'black', null, 'black', null, 'black', null],
  ]


/*----- app's state (variables) -----*/

//handle player turn
let turn = 'black';
//determine players pieces
let playerPieces;
let pieceSelected = false;







/*----- cached element references -----*/
const startButton = document.getElementById('button')
const boardEl = document.getElementById('table')
const playerTurnText = document.getElementById('players-turn');
const redScore = document.getElementById('red-points')
const blackScore = document.getElementById('black-points')
const rows = document.getElementsByClassName('row')
const redPieces = document.getElementsByClassName('red-checker')
const blackPieces = document.getElementsByClassName('black-checker')
const spaces = document.getElementsByClassName('x')




/*----- event listeners -----*/
startButton.addEventListener('click',init)
boardEl.addEventListener('click',handleClick)





/*----- functions -----*/



//loads the checkers onto board

//after start click begins 
function init(){
    startButton.disabled = true;
    playerTurnText.innerText = 'Player 1: Click the piece you want to move'
    render() 
}
function clearBoard(){
    for(let i =0;i<spaces.length;i++){
        spaces[i].innerHTML = ''
    }
}

function playerTurn(){
    if(turn === 'black'){
        turn = 'red'
    } else {
        turn = 'black'
    }
}
function changeTurnText(){
    if(turn === 'black'){
        playerTurnText.innerText = 'Player 1: Click the piece you want to move'
    } else {
        playerTurnText.innerText = 'Player 2: Click the piece you want to move'
    }
}

// manipulates the dom
function render() {
    clearBoard()
    changeTurnText()
    for(let i =0; i<board.length;i++){
        for(let j=0; j<board[i].length; j++){
            // console.log(rows[i].chil ren[j]);
            if(board[i][j] === 'red') {
                let redPiece = document.createElement('IMG')    
                redPiece.setAttribute('src','images/red.png')
                redPiece.style.width = '50px'
                redPiece.style.height = '50px'
                redPiece.id = j
                redPiece.className = i
                rows[i].children[j].appendChild(redPiece)
            } else if(board[i][j] === 'black') {
                let blackPiece = document.createElement('IMG')
                blackPiece.setAttribute('src','images/black.png')
                //console.log(blackPiece)
                blackPiece.style.width = '50px'
                blackPiece.style.height = '50px'
                blackPiece.id= j
                blackPiece.className = i
                rows[i].children[j].appendChild(blackPiece)
            } else {
                let emptySpace = document.createElement('p')
                emptySpace.id = j
                emptySpace.className = i
                emptySpace.style.width = '60px'
                emptySpace.style.height = '60px'
                emptySpace.style.border = '0px'
                rows[i].children[j].appendChild(emptySpace)

            }
        }
        //test()
    }
    //highlights players turn
    if(turn === 'black'){
        blackScore.style.border = '3px solid gold';
        blackScore.style.boxShadow = '0px 0px 20px gold';
        blackScore.style.borderRadius = '30px'; 
        redScore.style.border = '';
        redScore.style.boxShadow = '';
        redScore.style.borderRadius = '';

    }else{
        redScore.style.border = '3px solid gold';
        redScore.style.boxShadow = '0px 0px 20px gold';
        redScore.style.borderRadius = '30px';
        blackScore.style.border = '';
        blackScore.style.boxShadow = '';
        blackScore.style.borderRadius = ''; 
        
    };
    

}

//when a place is clicked
function handleClick(e) {
    let index = parseInt(e.target.id)
    let row = parseInt(e.target.className)
    if(turn === 'black'){
        if(pieceSelected[0] === 'black'){
            movePiece(e,pieceSelected)
        }
    } else {
        if(pieceSelected[0] === 'red'){
            movePiece(e,pieceSelected)
        }
    }
    pieceSelected = [ board[row][index], row, index]
    //console.log('pieceSelected',pieceSelected)
}


    
function movePiece(e,pieceSelected) {
    let index = parseInt(e.target.id)
    let row = parseInt(e.target.className)
    console.log(pieceSelected)
    let desiredSpace = board[row][index]
    if(!desiredSpace){
       if(turn === 'red' && row === pieceSelected[1]+1 && index === pieceSelected[2]-1 || turn === 'red' && row === pieceSelected[1]+1 && index === pieceSelected[2]+1){
        board[row][index]=pieceSelected[0]
        board[pieceSelected[1]][pieceSelected[2]] = null
        playerTurn()
       } else if(turn === 'black' && row === pieceSelected[1]-1 && index === pieceSelected[2]-1 || turn === 'black' && row === pieceSelected[1]-1 && index === pieceSelected[2]+1){
        board[row][index]=pieceSelected[0]
        board[pieceSelected[1]][pieceSelected[2]] = null
        playerTurn()
       } else {
           console.log('something is wrong')
       }
    }
    
    render()
}   


   
    


    
    

