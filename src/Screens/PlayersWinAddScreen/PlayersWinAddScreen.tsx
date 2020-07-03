import React from 'react';
import { View } from 'react-native';
import { ScrollViewWithHeader } from '../../UI';
import styles from './playersWinAddScreenStyleSheet';
import { PlayersWins } from '../../Components';
import { TPlayersWinAddScreenNavigation } from '../../Navigation/navigationTypes';

export default function PlayersWinAddScreen({
  route: { params },
  navigation: { navigate },
}: TPlayersWinAddScreenNavigation) {
  function restartGame() {
    navigate('PlayersInformationScreen');
  }
  function endGame(winnerInformation: {
    wins: number;
    winnerName: string;
    isDraw: boolean;
  }) {
    navigate('WinnerScreen', winnerInformation);
  }
  return (
    <ScrollViewWithHeader title="Add Wins">
      <View style={styles.container}>
        <View style={styles.winLeaderBoardContainer}>
          <PlayersWins {...{ restartGame, endGame, ...params }} />
        </View>
      </View>
    </ScrollViewWithHeader>
  );
}
