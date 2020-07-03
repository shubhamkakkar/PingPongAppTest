import React from 'react';
import PlayerWin from './PlayerWin/PlayerWin';
import useIncrementState from './useincrementState';
import { CancelSaveButtonCombo } from '../../UI';

export type TEndGameProps = {
  wins: number;
  winnerName: string;
  isDraw: boolean;
};

type TPlayerWins = {
  playerOneName: string;
  playerTwoName: string;
  restartGame: () => void;
  endGame: (endGameProps: TEndGameProps) => void;
};

export default function PlayersWins({
  playerOneName,
  playerTwoName,
  restartGame,
  endGame,
}: TPlayerWins) {
  const [playerOneWin, getIncrementedPlayerOneWin] = useIncrementState();
  const [playerTwoWin, getIncrementedPlayerTwoWin] = useIncrementState();

  function endGameFn() {
    let winnerInformation: TEndGameProps = {
      wins: playerOneWin,
      winnerName: '',
      isDraw: true,
    };

    const isPlayerOneWinner: boolean = playerOneWin > playerTwoWin;
    const isDraw: boolean = playerOneWin === playerTwoWin;
    if (!isDraw) {
      winnerInformation = {
        wins: isPlayerOneWinner ? playerOneWin : playerTwoWin,
        winnerName: isPlayerOneWinner ? playerOneName : playerTwoName,
        isDraw: false,
      };
    }
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
