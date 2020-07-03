import { StyleSheet } from 'react-native';
import theme from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  titleAndButtonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  playerText: {
    color: theme.redShadeBasePrimary,
  },
  winsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  winButton: {
    backgroundColor: theme.blueShadeBasePrimary + 20,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  winButtonTitle: {
    fontWeight: 'bold',
    color: theme.blueShadeBasePrimary,
  },
  winsText: {
    fontWeight: 'bold',
    fontSize: 25,
    color: theme.redShadeBasePrimary,
  },
  winEmojiContainer: {
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottieContainer: {
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 20,
  },
  lottie: {
    width: 75,
    height: 75,
    justifyContent: 'center',
  },
});

export default styles;
