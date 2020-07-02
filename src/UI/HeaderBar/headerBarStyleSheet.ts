import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  headerBarContainrer: {
    backgroundColor: theme.blueShadePrimary,
    padding: 12.5,
  },
  headerBarTitle: {
    color: theme.backgroundColor,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
});

export default styles;
