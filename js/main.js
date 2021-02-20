/*----- constants -----*/

/*----- app's state (variables) -----*/
let emptyDiv = [];
let occupiedRed = [];
let occupiedBlack =[];
let turn = 0;
let redScore = 12;
let blackScore =12;

/*----- cached element references -----*/
const startButton = document.getElementById('button');
const boardEl = document.querySelectorAll('.x');
const blackPieces = document.querySelectorAll('#black');
const redPieces = document.querySelectorAll('#red');
const playerTurnText = document.getElementById('players-turn');


/*----- event listeners -----*/
//begin game
startButton.addEventListener('click',init);







/*----- functions -----*/

function init(){
    //console.log('init is working');
    playerTurnText.innerText = 'Player 1: Click the piece you want to move'

    //Getting divs for all of the board spaces
    for (i = 0; i < boardEl.length; i++) {
        boardEl[i].addEventListener("click",playerMove);
    };
    
    for(let i = 0; i < boardEl.length; i++){
        //console.log(boardEl[i])
        if(boardEl[i].innerHTML === ''){
           //Assigning empty spaces 
           // console.log(boardEl[i].innerHTML)
            emptyDiv[i] = boardEl[i];
        } else if(boardEl[i].innerHTML === '<img src="red.png" width="50px" height="50px" id="red">') {
            //assigning spaces with red pieces on it
            occupiedRed[i] = boardEl[i];
        } else {
            //assigning spaces with black pieces on it
            occupiedBlack[i] = boardEl[i];
        };
    };
    playerMove();
};

function playerMove() {
    if(turn === 0){
        for(let i = 0; i < blackPieces.length; i++ ){
            blackPieces[i].style.border = '3px solid gold';
            blackPieces[i].style.boxShadow = '0px 0px 20px gold';
            blackPieces[i].style.borderRadius = '30px';
        } 
    }else{
        for(let i = 0; i < redPieces.length; i++ ){
            redPieces[i].style.border = '3px solid gold';
            redPieces[i].style.boxShadow = '0px 0px 20px gold';
            redPieces[i].style.borderRadius = '30px';
        };
    };
};
    
