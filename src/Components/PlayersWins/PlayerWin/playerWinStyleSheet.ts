import { StyleSheet } from 'react-native';
import theme from '../../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleAndButtonRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  winsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  winButton: {
    backgroundColor: theme.redShadeBasePrimary + 20,
    padding: 10,
    borderRadius: 10,
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
});

export default styles;
