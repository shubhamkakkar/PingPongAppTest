import React from 'react';
import { View, Text } from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import { CancelSaveButtonCombo, ScrollViewWithHeader } from '../../UI';
import styles from './winnerScreenStyleSheet';
// @ts-ignore
import partyLottie from '../../assets/partyLottie.json';

export default function WinnerScreen({ route: { params }, navigation: { navigate } }) {
  const { wins, winnerName, isDraw } = params;
  function restartGame() {
    navigate('PlayersInformationScreen');
  }
  return (
    <ScrollViewWithHeader title="Winner">
      <>
        <View style={styles.container}>
          <View>
            <Text style={styles.playerNameTitle}>
              { isDraw ? 'It is a draw' : `Winner : ${winnerName}` }
            </Text>
          </View>
          { !isDraw && (
            <>
              <View style={styles.lottieContainer}>
                <AnimatedLottieView
                  style={styles.lottie}
                  source={partyLottie}
                  autoPlay
                  loop
                />
              </View>
              <Text style={styles.winsText}>
                Wins: {wins}
              </Text>
            </>
          ) }
        </View>

        <CancelSaveButtonCombo
          dontShowCancelFn
          saveFn={restartGame}
          saveButtonTitle="Restart Game"
        />
      </>
    </ScrollViewWithHeader>
  );
}
