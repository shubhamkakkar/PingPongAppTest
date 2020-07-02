import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './src/Navigation';
import theme from './src/theme';

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
});

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.safeAreaView, StyleSheet.absoluteFill]}>
        <StatusBar
          hidden={false}
          backgroundColor={theme.blueShadeBasePrimary}
          translucent={false}
          networkActivityIndicatorVisible
        />
        <Navigation />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
