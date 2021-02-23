/*----- constants -----*/
const red = 'red'
const black = 'black'
const board = [
    [null, 0, null, 1, null, 2, null, 3],
    [4, null, 5, null, 6, null, 7, null],
    [null, 8, null, 9, null, 10, null, 11],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [12, null, 13, null, 14, null, 15, null],
    [null, 16, null, 17, null, 18, null, 19],
    [20, null, 21, null, 22, null, 23, null],
  ]


/*----- app's state (variables) -----*/

let turn = 'black';




/*----- cached element references -----*/
const startButton = document.getElementById('button')
const boardEl = document.getElementById('table')
const playerTurnText = document.getElementById('players-turn');
const redScore = document.getElementById('red-points')
const blackScore = document.getElementById('black-points')
const rows = document.getElementsByClassName('row')


/*----- event listeners -----*/
startButton.addEventListener('click',init)
boardEl.addEventListener('click',handleClick)

/*----- functions -----*/

function init(){
    startButton.disabled = true;
    playerTurnText.innerText = 'Player 1: Click the piece you want to move'
    render()
}

function handleClick(e){
    console.log(e.target.className)

}

function render() {
    for(let i =0; i<board.length;i++){
        for(let j=0; j<board[i].length; j++){
            // console.log(rows[i].chil ren[j]);
            if(board[i][j] === 0 || board[i][j] === 1 || board[i][j] === 2 || board[i][j] === 3||board[i][j] === 4||board[i][j] === 5||board[i][j] === 6||board[i][j] === 7||board[i][j] === 8||board[i][j] === 9||board[i][j] === 10||board[i][j] === 11 ){
                let redPiece = document.createElement('IMG')    
                redPiece.setAttribute('src','images/red.png')
                redPiece.style.width = '50px'
                redPiece.style.height = '50px'
                redPiece.className = board[i][j]
                rows[i].children[j].appendChild(redPiece)
            } else if(board[i][j] === 12 || board[i][j] === 13 || board[i][j] === 14 || board[i][j] === 15||board[i][j] === 16||board[i][j] === 17||board[i][j] === 18||board[i][j] === 19||board[i][j] === 20||board[i][j] === 21||board[i][j] === 22||board[i][j] === 23 ){
                let blackPiece = document.createElement('IMG')
                blackPiece.setAttribute('src','images/black.png')
                //console.log(blackPiece)
                blackPiece.style.width = '50px'
                blackPiece.style.height = '50px'
                blackPiece.className= board[i][j]
                rows[i].children[j].appendChild(blackPiece)
            }
        }
    }
    if(turn === 'black'){
            blackScore.style.border = '3px solid gold';
            blackScore.style.boxShadow = '0px 0px 20px gold';
            blackScore.style.borderRadius = '30px'; 
    }else{
            redScore.style.border = '3px solid gold';
            redScore.style.boxShadow = '0px 0px 20px gold';
            redScore.style.borderRadius = '30px';
        
    };

}

function getPlayerPieces(){
    let redPieces = document.getElementsByClassName('')
    
}