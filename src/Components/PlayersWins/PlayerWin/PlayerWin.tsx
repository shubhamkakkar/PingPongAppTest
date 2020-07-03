import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import {
  View, Text, TouchableOpacity, Animated, Easing,
} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import styles from './playerWinStyleSheet';
// @ts-ignore
import partyLottie from '../../../assets/partyLottie.json';

type TPlayerWin = {
  playerTitle: string;
  wins: number;
  incrementWins: () => void;
};

export default function PlayerWin({
  playerTitle,
  wins,
  incrementWins,
}: TPlayerWin) {
  const progress = useMemo(() => new Animated.Value(0), []);
  function animateProgress(toValue = 1) {
    return Animated.timing(progress, {
      useNativeDriver: false,
      toValue,
      duration: toValue ? 2000 : 0,
      easing: Easing.linear,
    });
  }
  function incrementAndAnimateEmoji() {
    incrementWins();
    animateProgress().start(() => {
      animateProgress(0).start();
    });
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleAndButtonRow}>
        <View style={styles.rowContainer}>
          <Text>Name: {playerTitle}</Text>
        </View>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            style={styles.winButton}
            onPress={incrementAndAnimateEmoji}
          >
            <Text>win</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
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
        <Text style={styles.winsText}>{wins}</Text>
      </View>
    </View>
  );
}
