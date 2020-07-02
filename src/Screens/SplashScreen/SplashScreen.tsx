import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './splashScreenStyleSheet';
import pingPongLottie from '../../assets/pingPongLottie.json';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.lottieContainer}>
        <LottieView source={pingPongLottie} autoPlay loop />
      </View>
      <View style={styles.appNameContainer} />
    </View>
  );
}
