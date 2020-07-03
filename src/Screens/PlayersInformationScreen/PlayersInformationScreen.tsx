import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import { CancelSaveButtonCombo, ScrollViewWithHeader } from '../../UI';
import { PlayerInformationAdd } from '../../Components';
import styles from './playersInformationScreenStyleSheet';

export default function PlayersInformationScreen({ navigation: { navigate } }) {
  const [playerOneName, setPlayerOneName] = useState<string>('');
  const [playerTwoName, setPlayerTwoName] = useState<string>('');

  function resetPlayerNames() {
    setPlayerOneName('');
    setPlayerTwoName('');
  }

  function startGame() {
    const isPlayerOneNameFieldEmpty = !playerOneName.trim().length;
    const isPlayerTwoNameFieldEmpty = !playerTwoName.trim().length;
    let errorFields: string[] = [];
    if (isPlayerOneNameFieldEmpty) {
      errorFields = [...errorFields, 'Player One'];
    }
    if (isPlayerTwoNameFieldEmpty) {
      errorFields = [...errorFields, 'Player Two'];
    }
    if (errorFields.length) {
      Alert.alert('Error', `Required: ${errorFields.join()}`);
    } else {
      navigate('PlayersWinAddScreen', {
        playerOneName: playerOneName.trim(),
        playerTwoName: playerTwoName.trim(),
      });
    }
  }

  return (
    <ScrollViewWithHeader title="Players">
      <View style={styles.container}>
        <View style={styles.containerInputs}>
          <PlayerInformationAdd
            {...{
              name: playerOneName,
              setName: setPlayerOneName,
              title: 'One',
              autofocus: true,
            }}
          />
          <PlayerInformationAdd
            {...{
              name: playerTwoName,
              setName: setPlayerTwoName,
              title: 'Two',
            }}
          />
        </View>
        <CancelSaveButtonCombo
          cancelButtonTitle="Reset"
          saveButtonTitle="Start Game"
          cancelFn={resetPlayerNames}
          saveFn={startGame}
        />
      </View>
    </ScrollViewWithHeader>
  );
}
