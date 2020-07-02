import React, { useMemo, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import styles from './playerWinStyleSheet';
// @ts-ignore
import partyLottie from '../../../assets/partyLottie.json';

type TPlayerWin = {
    playerTitle: string;
    wins: number;
    incrementWins: () => void;
}

export default function PlayerWin({ playerTitle, wins, incrementWins }: TPlayerWin) {
  const progress = new Animated.Value(0);
  function incrementAndAnimateEmoji() {
    Animated.timing(progress, {
      useNativeDriver: false,
      toValue: 1,
      duration: 2500,
      easing: Easing.linear,
    }).start(() => {
      incrementWins();
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleAndButtonRow}>
        <View style={styles.rowContainer}>
          <Text>Name:  {playerTitle}</Text>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.winButton} onPress={incrementAndAnimateEmoji}>
            <Text>win</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{
        alignItems: 'center',
        marginBottom: 10,
        marginLeft: 20,
      }}
      >
        <AnimatedLottieView
          style={{
            width: 50,
            height: 50,
            justifyContent: 'center',
          }}
          source={partyLottie}
          progress={progress}
          loop
        />
      </View>
      <View style={styles.winsContainer}>
        <Text style={styles.winsText}>
          {wins}
        </Text>
      </View>
    </View>
  );
}
