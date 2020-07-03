import 'react-native';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import SplashScreen from './SplashScreen';

// eslint-disable-next-line no-undef
it('renders correctly', () => {
  renderer.create(<SplashScreen {...{ navigation: { navigate: () => {} } }} />);
});
