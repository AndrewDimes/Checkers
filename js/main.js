/*----- constants -----*/
let board = [
    [null, 'red', null, 'red', null, 'red', null, 'red'],
    ['red', null, 'red', null, 'red', null, 'red', null],
    [null, 'red', null, 'red', null, 'red', null, 'red'],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ['black', null, 'black', null, 'black', null, 'black', null],
    [null, 'black', null, 'black', null, 'black', null, 'black'],
    ['black', null, 'black', null, 'black', null, 'black', null],
];

/*----- app's state (variables) -----*/
let turn = 'black';
let pieceSelected = false;
let redPoints = 0;
let blackPoints = 0;
let gameEnded = false;
let isKing = true;


/*----- cached element references -----*/
const startButton = document.getElementById('button');
const boardEl = document.getElementById('table');
const playerTurnText = document.getElementById('players-turn');
const redScore = document.getElementById('red-points');
const blackScore = document.getElementById('black-points');
const rows = document.getElementsByClassName('row');
const redPieces = document.getElementsByClassName('red-checker');
const blackPieces = document.getElementsByClassName('black-checker');
const spaces = document.getElementsByClassName('x');
const oSpaces = document.getElementsByClassName('o');
/*----- event listeners -----*/
startButton.addEventListener('click', init);

/*----- functions -----*/
//after start click begins 
function init() {
    boardEl.addEventListener('click', handleClick);
    gameEnded = false;
    startButton.disabled = true;
    playerTurnText.innerText = 'Player 1: Click the piece you want to move';
    if(board !== [
        [null, 'red', null, 'red', null, 'red', null, 'red'],
        ['red', null, 'red', null, 'red', null, 'red', null],
        [null, 'red', null, 'red', null, 'red', null, 'red'],
        [null, null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null, null],
        ['black', null, 'black', null, 'black', null, 'black', null],
        [null, 'black', null, 'black', null, 'black', null, 'black'],
        ['black', null, 'black', null, 'black', null, 'black', null],
    ]){
        board = [
            [null, 'red', null, 'red', null, 'red', null, 'red'],
            ['red', null, 'red', null, 'red', null, 'red', null],
            [null, 'red', null, 'red', null, 'red', null, 'red'],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            ['black', null, 'black', null, 'black', null, 'black', null],
            [null, 'black', null, 'black', null, 'black', null, 'black'],
            ['black', null, 'black', null, 'black', null, 'black', null],
        ];
    }
    render();
};

//clears all left over imgs before render
function clearBoard() {
    for (let i = 0; i < spaces.length; i++) {
        spaces[i].innerHTML = '';
        oSpaces[i].innerHTML = '';

    };
};

//updates scoreboard img
function handleScore() {
    if (blackPoints === 1) {
        blackScore.setAttribute('src', 'images/black-1.png');
    } else if (blackPoints == 2) {
        blackScore.setAttribute('src', 'images/black-2.png');

    } else if (blackPoints == 3) {
        blackScore.setAttribute('src', 'images/black-3.png');

    } else if (blackPoints == 4) {
        blackScore.setAttribute('src', 'images/black-4.png');

    } else if (blackPoints == 5) {
        blackScore.setAttribute('src', 'images/black-5.png');

    } else if (blackPoints == 6) {
        blackScore.setAttribute('src', 'images/black-6.png');

    } else if (blackPoints == 7) {
        blackScore.setAttribute('src', 'images/black-7.png');

    } else if (blackPoints == 8) {
        blackScore.setAttribute('src', 'images/black-8.png');

    } else if (blackPoints == 9) {
        blackScore.setAttribute('src', 'images/black-9.png');

    } else if (blackPoints == 10) {
        blackScore.setAttribute('src', 'images/black-10.png');

    } else if (blackPoints == 11) {
        blackScore.setAttribute('src', 'images/black-11.png');

    } else if (blackPoints == 12) {
        blackScore.setAttribute('src', 'images/black-12.png');
    } else {
        blackScore.setAttribute('src', 'images/black.png');
    }
    if (redPoints === 1) {
        redScore.setAttribute('src', 'images/red-1.png');
    } else if (redPoints == 2) {
        redScore.setAttribute('src', 'images/red-2.png');

    } else if (redPoints == 3) {
        redScore.setAttribute('src', 'images/red-3.png');

    } else if (redPoints == 4) {
        redScore.setAttribute('src', 'images/red-4.png');

    } else if (redPoints == 5) {
        redScore.setAttribute('src', 'images/red-5.png');

    } else if (redPoints == 6) {
        redScore.setAttribute('src', 'images/red-6.png');

    } else if (redPoints == 7) {
        redScore.setAttribute('src', 'images/red-7.png');

    } else if (redPoints == 8) {
        redScore.setAttribute('src', 'images/red-8.png');

    } else if (redPoints == 9) {
        redScore.setAttribute('src', 'images/red-9.png');

    } else if (redPoints == 10) {
        redScore.setAttribute('src', 'images/red-10.png');

    } else if (redPoints == 11) {
        redScore.setAttribute('src', 'images/red-11.png');

    } else if (redPoints == 12) {
        redScore.setAttribute('src', 'images/red-12.png');

    } else {
        redScore.setAttribute('src', 'images/red.png');
    };

};

//switches between players
function playerTurn() {
    if (turn === 'black') {
        turn = 'red';
    } else {
        turn = 'black';
    };
};

//changes text for turn
function changeTurnText() {
    if (turn === 'black') {
        playerTurnText.innerText = 'Player 1: Click the piece you want to move';
    } else if (turn === 'red') {
        playerTurnText.innerText = 'Player 2: Click the piece you want to move';
    } else {
    };
};

//determines if the game is over
function gameOver() {
    if (redPoints === 12) {
        playerTurnText.innerText = 'Game over! Player 2 wins!';
        startButton.disabled = false;
        startButton.innerText = 'Rematch?';
        turn = 'black'
        redPoints = 0;
        blackPoints = 0;
        gameEnded = true;
        boardEl.removeEventListener('click', handleClick, false)
    } else if (blackPoints === 12) {
        playerTurnText.innerText = 'Game over! Player 1 wins!';
        startButton.disabled = false;
        startButton.innerText = 'Rematch?';
        redPoints = 0;
        blackPoints = 0;
        gameEnded = true;
        turn = 'black'
        boardEl.removeEventListener('click', handleClick, false)
    };
};






// manipulates the dom
function render() {
    clearBoard();
    handleScore();
    changeTurnText();
    gameOver();

    for (let i = 0; i < board.length; i++) {

        for (let j = 0; j < board[i].length; j++) {

            if (board[i][j] === 'red') {
                let redPiece = document.createElement('IMG');
                redPiece.setAttribute('src', 'images/red.png');
                redPiece.style.width = '50px';
                redPiece.style.height = '50px';
                redPiece.id = j;
                redPiece.className = i;
                rows[i].children[j].appendChild(redPiece);
            } else if (board[i][j] === 'black') {
                let blackPiece = document.createElement('IMG');
                blackPiece.setAttribute('src', 'images/black.png');
                blackPiece.style.width = '50px';
                blackPiece.style.height = '50px';
                blackPiece.id = j;
                blackPiece.className = i;
                rows[i].children[j].appendChild(blackPiece);
            } else if (board[i][j] === 'blackking') {
                let blackKing = document.createElement('IMG');
                blackKing.setAttribute('src', 'images/black.png');
                blackKing.style.width = '50px';
                blackKing.style.height = '50px';
                blackKing.style.border = '1px solid white'
                blackKing.style.borderRadius = '30px';
                blackKing.id = j;
                blackKing.className = i;
                rows[i].children[j].appendChild(blackKing);

            } else if (board[i][j] === 'redking') {
                let redKing = document.createElement('IMG');
                redKing.setAttribute('src', 'images/red.png');
                redKing.style.width = '50px';
                redKing.style.height = '50px';
                redKing.style.border = '1px solid white'
                redKing.style.borderRadius = '30px';
                redKing.id = j;
                redKing.className = i;
                rows[i].children[j].appendChild(redKing);

            } else {
                let emptySpace = document.createElement('p');
                emptySpace.id = j;
                emptySpace.className = i;
                emptySpace.style.width = '50px';
                emptySpace.style.height = '50px';
                emptySpace.style.border = '0px';
                rows[i].children[j].appendChild(emptySpace);

            };
        };

    };


    //highlights players turn
    if (turn === 'black') {
        blackScore.style.border = '3px solid gold';
        blackScore.style.boxShadow = '0px 0px 15px gold';
        // blackScore.style.borderRadius = '30px';
        blackScore.style.padding = '0px'
        redScore.style.border = '';
        redScore.style.boxShadow = '';
        redScore.style.borderRadius = '';
    } else {
        redScore.style.border = '3px solid gold';
        redScore.style.boxShadow = '0px 0px 15px gold';
        // redScore.style.borderRadius = '30px';
        redScore.style.padding = '0px'
        blackScore.style.border = '';
        blackScore.style.boxShadow = '';
        blackScore.style.borderRadius = '';
    };


};
//when a space is clicked
function handleClick(e) {
    let index = parseInt(e.target.id);
    let row = parseInt(e.target.className);


    if (turn === 'black') {
        if (pieceSelected[0] === 'black' || pieceSelected[0] === 'blackking') {
            movePiece(e, pieceSelected);
        }
    } else {
        if (pieceSelected[0] === 'red' || pieceSelected[0] === 'redking') {
            movePiece(e, pieceSelected);
        };
    };
    if (turn === 'black' && row === 0 || turn === 'red' && row === 7) {
        pieceSelected = [board[row][index], row, index, isKing];
    } else {
        pieceSelected = [board[row][index], row, index];
    }

};
//handles movement
function movePiece(e, pieceSelected) {
    let index = parseInt(e.target.id);
    let row = parseInt(e.target.className);
    let desiredSpace = board[row][index];
    
    if (!desiredSpace) {
        //red normal move
        if (turn === 'red' && row === pieceSelected[1] + 1 && index === pieceSelected[2] - 1 || turn === 'red' && row === pieceSelected[1] + 1 && index === pieceSelected[2] + 1) {
            board[row][index] = pieceSelected[0];
            board[pieceSelected[1]][pieceSelected[2]] = null;
            playerTurn();
            //black normal move
        } else if (turn === 'black' && row === pieceSelected[1] - 1 && index === pieceSelected[2] - 1 || turn === 'black' && row === pieceSelected[1] - 1 && index === pieceSelected[2] + 1) {
            board[row][index] = pieceSelected[0];
            board[pieceSelected[1]][pieceSelected[2]] = null;
            playerTurn();
            //red jump black
        } else if (turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] - 2 && board[row - 1][index + 1] === 'black' || turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] - 2 && board[row - 1][index + 1] === 'blackking') {
            board[row][index] = pieceSelected[0];
            board[pieceSelected[1]][pieceSelected[2]] = null;
            if (turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] - 2 && board[row - 1][index + 1] === 'black' || turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] - 2 && board[row - 1][index + 1] === 'blackking') {
                board[row - 1][index + 1] = null;
                redPoints++;
            }
            
            if(row > 1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'black' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'blackking' || row >  1 && row < 6 && board[row+2][index+2] === null && board[row+1][index+1] === 'black' || row >  1 && row < 6 && board[row+2][index+2] === null && board[row+1][index+1] === 'blackking'){
                turn = 'black'
                playerTurn()
            } else {
                playerTurn()
            }
            
        } else if (turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'black' || turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'blackking') {
            board[row][index] = pieceSelected[0];
            board[pieceSelected[1]][pieceSelected[2]] = null;
            if (turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'black' || turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'blackking') {
                board[row - 1][index - 1] = null;
                redPoints++;
            }
            if(row >  1 && row < 6 && board[row+2][index+2] === null && board[row+1][index+1] === 'black' || row >  1 && row < 6 && board[row+2][index+2] === null && board[row+1][index+1] === 'blackking' || row > 1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'black' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'blackking'){
                turn = 'black'
                playerTurn()
            } else {
                playerTurn()
            }
            
            //black jump red
        } else if (turn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] + 2 && board[row + 1][index - 1] === 'red' || turn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] + 2 && board[row + 1][index - 1] === 'redking') {
            board[row][index] = pieceSelected[0];
            board[pieceSelected[1]][pieceSelected[2]] = null;
            if (turn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] + 2 && board[row + 1][index - 1] === 'red' || turn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] + 2 && board[row + 1][index - 1] === 'redking') {
                board[row + 1][index - 1] = null;
                blackPoints++;
            }
            if(row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'red' || row >  1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'redking'|| row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'red' || row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'redking'){
                turn ='red'
                playerTurn()                 
            } else {
                playerTurn()
            }
            
        } else if (turn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] - 2 && board[row + 1][index + 1] === 'red' || turn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] - 2 && board[row + 1][index + 1] === 'redking') {
            board[row][index] = pieceSelected[0];
            board[pieceSelected[1]][pieceSelected[2]] = null;
            if (turn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] - 2 && board[row + 1][index + 1] === 'red' || turn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] - 2 && board[row + 1][index + 1] === 'redking') {
                board[row + 1][index + 1] = null;
                blackPoints++;
            }
            if(row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'red' || row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'redking' ||row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'red' || row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'redking'){
                turn = 'red'
                playerTurn()
            } else {
                playerTurn()
            }
            //////////black king moves
        } else if (pieceSelected[0] === 'blackking') {
            if (turn === 'black' && row === pieceSelected[1] + 1 && index === pieceSelected[2] - 1 || turn === 'black' && row === pieceSelected[1] + 1 && index === pieceSelected[2] + 1) {
                board[row][index] = 'blackking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                playerTurn();
            } else if (turn === 'black' && row === pieceSelected[1] - 1 && index === pieceSelected[2] - 1 || turn === 'black' && row === pieceSelected[1] - 1 && index === pieceSelected[2] + 1) {
                board[row][index] = 'blackking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                playerTurn();

            } else if (turn === 'black' && row === pieceSelected[1] + 2 && index === pieceSelected[2] - 2 && board[row - 1][index + 1] === 'red' || turn === 'black' && row === pieceSelected[1] + 2 && index === pieceSelected[2] - 2 && board[row - 1][index + 1] === 'redking') {
                board[row][index] = 'blackking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                if (turn === 'black' && row === pieceSelected[1] + 2 && index === pieceSelected[2] - 2 && board[row - 1][index + 1] === 'red' || turn === 'black' && row === pieceSelected[1] + 2 && index === pieceSelected[2] - 2 && board[row - 1][index + 1] === 'redking') {
                    board[row - 1][index + 1] = null;
                    blackPoints++;
                }
                if(row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index+1] === 'red' || row >  1 && row < 6 && board[row+2][index+2] === null && board[row+1][index-1] === 'redking' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'red' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'redking' || 
                 row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'red' || row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'redking' ||row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'red' || row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'redking'){
                    turn = 'red'
                    playerTurn();
                } else {
                    playerTurn();
                }
            } else if (turn === 'black' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'red' || turn === 'black' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'redking') {
                board[row][index] = 'blackking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                if (turn === 'black' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'red' || turn === 'black' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'redking') {
                    board[row - 1][index - 1] = null;
                    blackPoints++;
                }
                if(row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index+1] === 'red' || row >  1 && row < 6 && board[row+2][index+2] === null && board[row+1][index-1] === 'redking' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'red' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'redking' || 
                 row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'red' || row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'redking' ||row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'red' || row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'redking'){
                    turn = 'red'
                    playerTurn();
                } else {
                    playerTurn();
                }
            } else if (turn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] + 2 && board[row + 1][index - 1] === 'red' || turn === 'black' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'redking') {
                board[row][index] = 'blackking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                if (turn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] + 2 && board[row + 1][index - 1] === 'red' || turn === 'black' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'redking') {
                    board[row + 1][index - 1] = null;
                    blackPoints++;
                }
                if(row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index+1] === 'red' || row >  1 && row < 6 && board[row+2][index+2] === null && board[row+1][index-1] === 'redking' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'red' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'redking' || 
                 row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'red' || row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'redking' ||row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'red' || row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'redking'){
                    turn = 'red'
                    playerTurn();
                } else {
                    playerTurn();
                }
            } else if (turn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] - 2 && board[row + 1][index + 1] === 'red' || turn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] - 2 && board[row + 1][index + 1] === 'redking') {
                board[row][index] = 'blackking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                if (turn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] - 2 && board[row + 1][index + 1] === 'red' || turn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] - 2 && board[row + 1][index + 1] === 'redking') {
                    board[row + 1][index + 1] = null;
                    blackPoints++;
                }
                if(row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index+1] === 'red' || row >  1 && row < 6 && board[row+2][index+2] === null && board[row+1][index-1] === 'redking' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'red' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'redking' || 
                 row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'red' || row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'redking' ||row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'red' || row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'redking'){
                    turn = 'red'
                    playerTurn();
                } else {
                    playerTurn();
                }
                
            }
                //////////red king moves
        } else if (pieceSelected[0] === 'redking') {
            if (turn === 'red' && row === pieceSelected[1] + 1 && index === pieceSelected[2] - 1 || turn === 'red' && row === pieceSelected[1] + 1 && index === pieceSelected[2] + 1) {
                board[row][index] = 'redking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                playerTurn();
            } else if (turn === 'red' && row === pieceSelected[1] - 1 && index === pieceSelected[2] - 1 || turn === 'red' && row === pieceSelected[1] - 1 && index === pieceSelected[2] + 1) {
                board[row][index] = 'redking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                playerTurn();

            } else if (turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] - 2 && board[row - 1][index + 1] === 'black'|| turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] - 2 && board[row - 1][index + 1] === 'blackking') {
                board[row][index] = 'redking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                if (turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] - 2 && board[row - 1][index + 1] === 'black'|| turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] - 2 && board[row - 1][index + 1] === 'blackking') {
                    board[row - 1][index + 1] = null;
                    redPoints++;
                }
                if(row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index+1] === 'black' || row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index-1] === 'blackking' || row > 1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'black' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'blackking' || 
                row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'black' || row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'blackking' ||row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'black' || row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'blackking'){
                   turn = 'black'
                   playerTurn();
               } else {
                   playerTurn();
               }
              
            } else if (turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'black' || turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'blackking') {
                board[row][index] = 'redking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                if (turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'black' || turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'blackking') {
                    board[row - 1][index - 1] = null;
                    redPoints++;
                }
                if(row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index+1] === 'black' || row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index-1] === 'blackking' || row > 1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'black' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'blackking' || 
                row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'black' || row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'blackking' ||row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'black' || row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'blackking'){
                   turn = 'black'
                   playerTurn();
               } else {
                   playerTurn();
               }
            } else if (turn === 'red' && row === pieceSelected[1] - 2 && index === pieceSelected[2] + 2 && board[row + 1][index - 1] === 'black' || turn === 'red' && row === pieceSelected[1] - 2 && index === pieceSelected[2] + 2 && board[row + 1][index - 1] === 'blackking') {
                board[row][index] = 'redking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                if (turn === 'red' && row === pieceSelected[1] - 2 && index === pieceSelected[2] + 2 && board[row + 1][index - 1] === 'black' || turn === 'red' && row === pieceSelected[1] - 2 && index === pieceSelected[2] + 2 && board[row + 1][index - 1] === 'blackking') {
                    board[row + 1][index - 1] = null;
                    redPoints++;
                }
                if(row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index+1] === 'black' || row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index-1] === 'blackking' || row > 1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'black' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'blackking' || 
                row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'black' || row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'blackking' ||row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'black' || row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'blackking'){
                   turn = 'black'
                   playerTurn();
               } else {
                   playerTurn();
               }

            } else if (turn === 'red' && row === pieceSelected[1] - 2 && index === pieceSelected[2] - 2 && board[row + 1][index + 1] === 'black' || turn === 'red' && row === pieceSelected[1] - 2 && index === pieceSelected[2] - 2 && board[row + 1][index + 1] === 'blackking') {
                board[row][index] = 'redking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                if (turn === 'red' && row === pieceSelected[1] - 2 && index === pieceSelected[2] - 2 && board[row + 1][index + 1] === 'black' || turn === 'red' && row === pieceSelected[1] - 2 && index === pieceSelected[2] - 2 && board[row + 1][index + 1] === 'blackking') {
                    board[row + 1][index + 1] = null;
                    redPoints++;
                }
                if(row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index+1] === 'black' || row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index-1] === 'blackking' || row > 1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'black' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'blackking' || 
                row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'black' || row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'blackking' ||row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'black' || row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'blackking'){
                   turn = 'black'
                   playerTurn();
               } else {
                   playerTurn();
               }
            }
            //////////new red king moves
        } else if (turn === 'red' && pieceSelected[3] === true) {
            if (turn === 'red' && row === pieceSelected[1] + 1 && index === pieceSelected[2] - 1 || turn === 'red' && row === pieceSelected[1] + 1 && index === pieceSelected[2] + 1) {
                board[row][index] = 'redking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                playerTurn();
            } else if (turn === 'red' && row === pieceSelected[1] - 1 && index === pieceSelected[2] - 1 || turn === 'red' && row === pieceSelected[1] - 1 && index === pieceSelected[2] + 1) {
                board[row][index] = 'redking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                playerTurn();

            } else if (turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] - 2 && board[row - 1][index + 1] === 'black' || turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] - 2 && board[row - 1][index + 1] === 'blackking') {
                board[row][index] = 'redking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                if (turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] - 2 && board[row - 1][index + 1] === 'black' || turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] - 2 && board[row - 1][index + 1] === 'blackking') {
                    board[row - 1][index + 1] = null;
                    redPoints++;
                }
                if(row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index+1] === 'black' || row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index-1] === 'blackking' || row > 1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'black' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'blackking' || 
                row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'black' || row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'blackking' ||row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'black' || row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'blackking'){
                   turn = 'black'
                   playerTurn();
               } else {
                   playerTurn();
               }
            } else if (turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'black' || turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'blackking') {
                board[row][index] = 'redking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                if (turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'black' || turn === 'red' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'blackking') {
                    board[row - 1][index - 1] = null;
                    redPoints++;
                }
                if(row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index+1] === 'black' || row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index-1] === 'blackking' || row > 1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'black' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'blackking' || 
                row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'black' || row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'blackking' ||row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'black' || row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'blackking'){
                   turn = 'black'
                   playerTurn();
               } else {
                   playerTurn();
               }
            } else if (turn === 'red' && row === pieceSelected[1] - 2 && index === pieceSelected[2] + 2 && board[row + 1][index - 1] === 'black' || turn === 'red' && row === pieceSelected[1] - 2 && index === pieceSelected[2] + 2 && board[row + 1][index - 1] === 'blackking') {
                board[row][index] = 'redking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                if (turn === 'red' && row === pieceSelected[1] - 2 && index === pieceSelected[2] + 2 && board[row + 1][index - 1] === 'black' || turn === 'red' && row === pieceSelected[1] - 2 && index === pieceSelected[2] + 2 && board[row + 1][index - 1] === 'blackking') {
                    board[row + 1][index - 1] = null;
                    redPoints++;
                }
                if(row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index+1] === 'black' || row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index-1] === 'blackking' || row > 1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'black' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'blackking' || 
                row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'black' || row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'blackking' ||row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'black' || row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'blackking'){
                   turn = 'black'
                   playerTurn();
               } else {
                   playerTurn();
               }

            } else if (turn === 'red' && row === pieceSelected[1] - 2 && index === pieceSelected[2] - 2 && board[row + 1][index + 1] === 'black'|| turn === 'red' && row === pieceSelected[1] - 2 && index === pieceSelected[2] - 2 && board[row + 1][index + 1] === 'blackking') {
                board[row][index] = 'redking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                if (turn === 'red' && row === pieceSelected[1] - 2 && index === pieceSelected[2] - 2 && board[row + 1][index + 1] === 'black' || turn === 'red' && row === pieceSelected[1] - 2 && index === pieceSelected[2] - 2 && board[row + 1][index + 1] === 'blackking') {
                    board[row + 1][index + 1] = null;
                    redPoints++;
                }
                if(row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index+1] === 'black' || row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index-1] === 'blackking' || row > 1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'black' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'blackking' || 
                row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'black' || row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'blackking' ||row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'black' || row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'blackking'){
                   turn = 'black'
                   playerTurn();
               } else {
                   playerTurn();
               }
            }
            //////////new black king moves
        } else if (turn === 'black' && pieceSelected[3] === true) {
            if (turn === 'black' && row === pieceSelected[1] + 1 && index === pieceSelected[2] - 1 || turn === 'black' && row === pieceSelected[1] + 1 && index === pieceSelected[2] + 1) {
                board[row][index] = 'blackking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                playerTurn();
            } else if (turn === 'black' && row === pieceSelected[1] - 1 && index === pieceSelected[2] - 1 || turn === 'black' && row === pieceSelected[1] - 1 && index === pieceSelected[2] + 1) {
                board[row][index] = 'blackking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                playerTurn();

            } else if (turn === 'black' && row === pieceSelected[1] + 2 && index === pieceSelected[2] - 2 && board[row - 1][index + 1] === 'red' || turn === 'black' && row === pieceSelected[1] + 2 && index === pieceSelected[2] - 2 && board[row - 1][index + 1] === 'redking') {
                board[row][index] = 'blackking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                if (turn === 'black' && row === pieceSelected[1] + 2 && index === pieceSelected[2] - 2 && board[row - 1][index + 1] === 'red' || turn === 'black' && row === pieceSelected[1] + 2 && index === pieceSelected[2] - 2 && board[row - 1][index + 1] === 'redking') {
                    board[row - 1][index + 1] = null;
                    blackPoints++;
                }
                if(row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index+1] === 'red' || row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index-1] === 'redking' || row > 1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'red' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'redking' || 
                row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'red' || row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'redking' ||row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'red' || row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'redking'){
                   turn = 'red'
                   playerTurn();
               } else {
                   playerTurn();
               }
            } else if (turn === 'black' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'red' || turn === 'black' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'redking') {
                board[row][index] = 'blackking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                if (turn === 'black' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'red' || turn === 'black' && row === pieceSelected[1] + 2 && index === pieceSelected[2] + 2 && board[row - 1][index - 1] === 'redking') {
                    board[row - 1][index - 1] = null;
                    blackPoints++;
                }
                if(row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index+1] === 'red' || row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index-1] === 'redking' || row > 1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'red' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'redking' || 
                row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'red' || row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'redking' ||row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'red' || row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'redking'){
                   turn = 'red'
                   playerTurn();
               } else {
                   playerTurn();
               }
            } else if (turn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] + 2 && board[row + 1][index - 1] === 'red' || urn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] + 2 && board[row + 1][index - 1] === 'redking') {
                board[row][index] = 'blackking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                if (turn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] + 2 && board[row + 1][index - 1] === 'red' || urn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] + 2 && board[row + 1][index - 1] === 'redking') {
                    board[row + 1][index - 1] = null;
                    blackPoints++;
                }
                if(row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index+1] === 'red' || row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index-1] === 'redking' || row > 1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'red' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'redking' || 
                row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'red' || row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'redking' ||row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'red' || row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'redking'){
                   turn = 'red'
                   playerTurn();
               } else {
                   playerTurn();
               }

            } else if (turn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] - 2 && board[row + 1][index + 1] === 'red' || turn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] - 2 && board[row + 1][index + 1] === 'redking') {
                board[row][index] = 'blackking'
                board[pieceSelected[1]][pieceSelected[2]] = null;
                if (turn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] - 2 && board[row + 1][index + 1] === 'red'|| turn === 'black' && row === pieceSelected[1] - 2 && index === pieceSelected[2] - 2 && board[row + 1][index + 1] === 'redking') {
                    board[row + 1][index + 1] = null;
                    blackPoints++;
                }
                if(row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index+1] === 'red' || row > 1 && row < 6 && board[row+2][index+2] === null && board[row+1][index-1] === 'redking' || row > 1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'red' || row >  1 && row < 6 && board[row+2][index-2] === null && board[row+1][index-1] === 'redking' || 
                row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'red' || row > 1 && row < 6 && board[row-2][index-2] === null && board[row-1][index-1] === 'redking' ||row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'red' || row > 1 && row < 6 && board[row-2][index+2] === null && board[row-1][index+1] === 'redking'){
                   turn = 'red'
                   playerTurn();
               } else {
                   playerTurn();
               }

            }
        }


    }
    render();
};

