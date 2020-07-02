import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColor,
  },
  lottieContainer: {
    flex: 2,
  },
  appNameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appNameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: theme.redShadePrimary,
  },
});

export default styles;
