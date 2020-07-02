import React, { useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import styles from './playerWinStyleSheet';

type TPlayerWin = {
    playerTitle: string;
    wins: number;
    incrementWins: () => void;
}

export default function PlayerWin({ playerTitle, wins, incrementWins }: TPlayerWin) {
  const opacity = useMemo(() => new Animated.Value(0), []);
  const scale = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });
  function incrementAndAnimateEmoji() {
    Animated.spring(opacity, {
      toValue: 1,
      useNativeDriver: true,
    }).start(() => {
      incrementWins();
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
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
      <View style={styles.winsContainer}>
        <Text style={styles.winsText}>
          {wins}
        </Text>
      </View>
      <Animated.View
        style={[
          styles.winEmojiContainer,
          { opacity, transform: [{ scale }] },
        ]}
      >
        <Text>win</Text>
      </Animated.View>
    </View>
  );
}
