import 'react-native';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import WinnerScreen from './WinnerScreen';

// eslint-disable-next-line no-undef
it('Winner Screen not draw', () => {
  renderer.create(
    <WinnerScreen
      {...{ navigation: { navigate: () => { } }, route: { params: { wins: 0, winnerName: 'test name', isDraw: false } } }}
    />,
  );
});

// eslint-disable-next-line no-undef
it('Winner Screen  draw', () => {
  renderer.create(
    <WinnerScreen
      {...{ navigation: { navigate: () => { } }, route: { params: { wins: 0, winnerName: 'test name', isDraw: true } } }}
    />,
  );
});
