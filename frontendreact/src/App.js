import React from 'react';
import Board from './Board';  // Import the Board component
import './App.css';           // Import the CSS file for styling

const App = () => {
  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Board />  {/* Render the Board component */}
    </div>
  );
};

export default App;
