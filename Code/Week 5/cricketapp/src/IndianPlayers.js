import React from 'react';

const IndianPlayers = () => {
  const players = ['Kohli', 'Rohit', 'Shami', 'Bumrah', 'Pant', 'Gill'];
  
  // Destructuring
  const [p1, p2, p3, p4, p5, p6] = players;
  const oddTeam = [p1, p3, p5];
  const evenTeam = [p2, p4, p6];

  // Merge Feature (Spread Operator)
  const T20players = ['Hardik', 'Sky'];
  const RanjiTrophyPlayers = ['Shaw', 'Iyer'];
  const allSquad = [...T20players, ...RanjiTrophyPlayers];

  return (
    <div>
      <h3>Odd Team: {oddTeam.join(', ')} | Even Team: {evenTeam.join(', ')}</h3>
      <h3>Merged Squad: {allSquad.join(', ')}</h3>
    </div>
  );
};
export default IndianPlayers;