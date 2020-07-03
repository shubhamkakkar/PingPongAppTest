import React from 'react';
import { View } from 'react-native';
import { ScrollViewWithHeader } from '../../UI';
import styles from './playersWinAddScreenStyleSheet';
import { PlayersWins } from '../../Components';

export default function PlayersWinAddScreen({
  route: { params },
  navigation: { navigate },
}) {
  function restartGame() {
    navigate('PlayersInformationScreen');
  }
  function endGame(winnerInformation: { wins: number, winnerName: string, isDraw: boolean }) {
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
