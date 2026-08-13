import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Player1', score: 85 }, { name: 'Player2', score: 65 },
    { name: 'Player3', score: 90 }, { name: 'Player4', score: 55 },
    { name: 'Player5', score: 75 }, { name: 'Player6', score: 40 },
    { name: 'Player7', score: 95 }, { name: 'Player8', score: 60 },
    { name: 'Player9', score: 80 }, { name: 'Player10', score: 30 },
    { name: 'Player11', score: 70 }
  ];

  // Map Feature
  const allPlayers = players.map((p, index) => <li key={index}>{p.name} - {p.score}</li>);

  // Filter with Arrow Function
  const lowScorers = players.filter(p => p.score < 70);

  return (
    <div>
      <h3>All Players:</h3>
      <ul>{allPlayers}</ul>
      <h3>Players with score below 70:</h3>
      <ul>{lowScorers.map((p, i) => <li key={i}>{p.name}</li>)}</ul>
    </div>
  );
};
export default ListofPlayers;