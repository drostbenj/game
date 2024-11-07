<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tic-Tac-Toe</title>
  <style>
    body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: Arial, sans-serif;
      background-color: blue;
    }
    .game-container {
      text-align: center;
    }
    .board {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      grid-template-rows: repeat(3, 100px);
      gap: 5px;
    }
    .cell {
      width: 100px;
      height: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 2em;
      font-weight: bold;
      background-color: #ffffff;
      border: 1px solid #333;
      cursor: pointer;
    }
    .cell:hover {
      background-color: green;
    }
    .status {
      margin: 20px 0;
      font-size: 1.5em;
    }
    .reset-btn {
      padding: 10px 20px;
      font-size: 1em;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="game-container">
    <div class="status" id="status">Player X's turn</div>
    <div class="board" id="board">
      <div class="cell" data-index="0"></div>
      <div class="cell" data-index="1"></div>
      <div class="cell" data-index="2"></div>
      <div class="cell" data-index="3"></div>
      <div class="cell" data-index="4"></div>
      <div class="cell" data-index="5"></div>
      <div class="cell" data-index="6"></div>
      <div class="cell" data-index="7"></div>
      <div class="cell" data-index="8"></div>
    </div>
    <button class="reset-btn" id="resetBtn">Reset Game</button>
  </div>

  <script>
    const cells = document.querySelectorAll('.cell');
    const statusText = document.getElementById('status');
    const resetBtn = document.getElementById('resetBtn');
    let board = ["", "", "", "", "", "", "", "", ""];
    let currentPlayer = "X";
    let isGameActive = true;

    const winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    function handleCellClick(event) {
      const cell = event.target;
      const index = cell.getAttribute('data-index');

      if (board[index] !== "" || !isGameActive) return;

      board[index] = currentPlayer;
      cell.textContent = currentPlayer;

      if (checkWinner()) {
        statusText.textContent = `Player ${currentPlayer} wins!`;
        isGameActive = false;
      } else if (board.every(cell => cell !== "")) {
        statusText.textContent = "It's a draw!";
        isGameActive = false;
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.textContent = `Player ${currentPlayer}'s turn`;
      }
    }

    function checkWinner() {
      return winningConditions.some(condition => {
        return condition.every(index => board[index] === currentPlayer);
      });
    }

    function resetGame() {
      board = ["", "", "", "", "", "", "", "", ""];
      currentPlayer = "X";
      isGameActive = true;
      statusText.textContent = `Player ${currentPlayer}'s turn`;
      cells.forEach(cell => (cell.textContent = ""));
    }

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetBtn.addEventListener('click', resetGame);
  </script>
</body>
</html>
