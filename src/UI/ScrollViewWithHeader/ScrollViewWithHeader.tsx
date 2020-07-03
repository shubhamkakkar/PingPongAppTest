import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './scrollViewWithHeaderStyleSheet';
import HeaderBar from '../HeaderBar/HeaderBar';

type TScrollViewWithHeader = {
  title: string;
  children: React.ReactElement;
};

export default function ScrollViewWithHeader({
  title,
  children,
}: TScrollViewWithHeader) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="always"
      style={styles.scrollViewStyle}
      contentContainerStyle={styles.scrollViewContentContainerStyle}
    >
      <HeaderBar {...{ title }} />
      {children}
    </ScrollView>
  );
}
