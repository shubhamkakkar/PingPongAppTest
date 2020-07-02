import React from 'react';
import PlayerWin from './PlayerWin/PlayerWin';
import useIncrementState from './useincrementState';

export default function PlayersWins(props) {
  const [playerOneWin, getIncrementedPlayerOneWin] = useIncrementState();
  const [playerTwoWin, getIncrementedPlayerTwoWin] = useIncrementState();
  return (
    <>
      <PlayerWin
        {...{
          playerTitle: props.playerOneName,
          wins: playerOneWin,
          incrementWins: getIncrementedPlayerOneWin,
        }}
      />
      <PlayerWin
        {...{
          playerTitle: props.playerTwoName,
          wins: playerTwoWin,
          incrementWins: getIncrementedPlayerTwoWin,
        }}
      />
    </>
  );
}
