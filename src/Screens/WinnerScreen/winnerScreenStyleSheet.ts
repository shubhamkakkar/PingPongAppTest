import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  playerNameTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.redShadePrimary,
  },
  winsText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: theme.blueShadeBasePrimary,
    marginTop: 20,
  },
  lottieContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginLeft: 35,
  },
  lottie: {
    width: 100,
    height: 100,
    justifyContent: 'center',
  },
});
export default styles;
