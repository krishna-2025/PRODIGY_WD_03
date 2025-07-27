let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true; 

// Winning combinations
const winningCombinations = [
    [0, 1, 2], // Top row
    [3, 4, 5], // Middle row
    [6, 7, 8], // Bottom row
    [0, 3, 6], // Left column
    [1, 4, 7], // Middle column
    [2, 5, 8], // Right column
    [0, 4, 8], // Diagonal
    [2, 4, 6]  // Diagonal
];

// Function to handle player moves
function makeMove(index) {
    if (board[index] === '' && gameActive) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].textContent = currentPlayer;
        checkWinner();
        switchPlayer();
    }
}

// Function to switch between players
function switchPlayer() {
    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
}

// Function to check for a winner
function checkWinner() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById('message').textContent = `${currentPlayer} wins!`;
            gameActive = false;
            return;
        }
    }

    if (!board.includes('')) {
        document.getElementById('message').textContent = "It's a draw!";
        gameActive = false;
    }
}

// Function to reset the game
function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    document.getElementById('message').textContent = '';
    const cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.textContent = '';
    }
}
