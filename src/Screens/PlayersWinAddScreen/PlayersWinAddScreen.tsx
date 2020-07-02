import React from 'react';
import { View } from 'react-native';
import { CancelSaveButtonCombo, ScrollViewWithHeader } from '../../UI';
import styles from './playersWinAddScreenStyleSheet';
import { PlayersWins } from '../../Components';

export default function PlayersWinAddScreen({ route: { params }, navigation: { navigate } }) {
  function restartGame() {
    navigate('PlayersInformationScreen');
  }
  return (
    <ScrollViewWithHeader title="Add Wins">
      <View style={styles.container}>
        <View style={styles.winLeaderBoardContainer}>
          <PlayersWins {...params} />
        </View>
        <CancelSaveButtonCombo dontShowCancelFn saveFn={restartGame} saveButtonTitle="Restart Game" />
      </View>
    </ScrollViewWithHeader>
  );
}
