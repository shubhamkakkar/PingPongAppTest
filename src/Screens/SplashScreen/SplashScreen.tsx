import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './splashScreenStyleSheet';
// @ts-ignore
import pingPongLottie from '../../assets/pingPongLottie.json';
import theme from '../../theme';
import { TSplashScreenNavigation } from '../../Navigation/navigationTypes';

export default function SplashScreen({
  navigation: { navigate },
}: TSplashScreenNavigation) {
  useEffect(() => {
    setTimeout(() => {
      navigate('PlayersInformationScreen');
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.lottieContainer}>
        <LottieView
          source={pingPongLottie}
          autoPlay
          loop
          colorFilters={[
            {
              keypath: 'Ball',
              color: theme.blueShadeBasePrimary,
            },
            {
              keypath: 'Ball',
              color: theme.blueShadeBasePrimary,
            },
          ]}
        />
      </View>
      <View style={styles.appNameContainer}>
        <Text style={styles.appNameText}>Ping Pong</Text>
      </View>
    </View>
  );
}
