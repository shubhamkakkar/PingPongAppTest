import React from 'react';
import PlayerWin from './PlayerWin/PlayerWin';
import useIncrementState from './useincrementState';
import { CancelSaveButtonCombo } from '../../UI';

export default function PlayersWins({
  playerOneName, playerTwoName, restartGame, endGame,
}) {
  const [playerOneWin, getIncrementedPlayerOneWin] = useIncrementState();
  const [playerTwoWin, getIncrementedPlayerTwoWin] = useIncrementState();

  function endGameFn() {
    const isPlayerOneWinner: boolean = playerOneWin > playerTwoWin;
    const winnerInformation: { wins: number, winnerName: string } = {
      wins: isPlayerOneWinner ? playerOneWin : playerTwoWin,
      winnerName: isPlayerOneWinner ? playerOneName : playerTwoName,
    };
    endGame(winnerInformation);
  }
  return (
    <>
      <PlayerWin
        {...{
          playerTitle: playerOneName,
          wins: playerOneWin,
          incrementWins: getIncrementedPlayerOneWin,
        }}
      />
      <PlayerWin
        {...{
          playerTitle: playerTwoName,
          wins: playerTwoWin,
          incrementWins: getIncrementedPlayerTwoWin,
        }}
      />
      <CancelSaveButtonCombo
        cancelButtonTitle="End Game"
        cancelFn={endGameFn}
        saveFn={restartGame}
        saveButtonTitle="Restart Game"
      />
    </>
  );
}
