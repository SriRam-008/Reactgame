
import React, { useState } from 'react';
import Square from './Square';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null)); // Array to store values of the 9 squares
  const [isXNext, setIsXNext] = useState(true); // To track whose turn it is (X or O)
  const [winner, setWinner] = useState(null); // To store the winner
  
  // Function to handle square click
  const handleClick = (index) => {
    if (squares[index] || winner) return; // If the square is already filled or a winner is determined, do nothing

    const newSquares = squares.slice(); // Copy of the squares array
    newSquares[index] = isXNext ? 'X' : 'O'; // Place X or O in the clicked square
    setSquares(newSquares);
    setIsXNext(!isXNext); // Switch turns

    // Check if there's a winner
    checkWinner(newSquares);
  };

  // Function to check if there is a winner
  const checkWinner = (squares) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontal lines
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Vertical lines
      [0, 4, 8], [2, 4, 6]  // Diagonal lines
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        setWinner(squares[a]); // Set winner (X or O)
        return;
      }
    }
  };

  // Function to reset the game
  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setWinner(null);
    setIsXNext(true);
  };

  return (
    <div className="board">
      <div className="status">
        {winner ? `Winner: ${winner}` : `Next player: ${isXNext ? 'X' : 'O'}`}
      </div>
      <div className="board-grid">
        {squares.map((value, index) => (
          <Square key={index} value={value} onClick={() => handleClick(index)} />
        ))}
      </div>
      <button className="reset-button" onClick={resetGame}>Reset</button>
    </div>
  );
};

export default Board;
