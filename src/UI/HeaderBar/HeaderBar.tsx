import React from 'react';
import { View, Text } from 'react-native';
import styles from './headerBarStyleSheet';

type THeaderBar = {
    title: string
}
export default function HeaderBar({ title }: THeaderBar) {
  return (
    <View style={styles.headerBarContainrer}>
      <Text style={styles.headerBarTitle}>{title}</Text>
    </View>
  );
}
