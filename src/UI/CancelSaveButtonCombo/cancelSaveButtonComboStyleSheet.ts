import { StyleSheet } from 'react-native';
import theme from '../../theme';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    margin: 7.5,
  },
  buttonCommon: {
    borderWidth: 1,
    borderColor: theme.blueShadeBasePrimary,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 5,
    borderRadius: 5,
    padding: 5,
  },
  rightMargin: {
    marginRight: 5,
  },
  saveButton: {
    marginLeft: 5,
    backgroundColor: theme.blueShadeBasePrimary,
  },
  saveButtonTitle: { color: 'white' },
  cancelButtonTitle: {
    color: theme.blueShadeBasePrimary,
  },
});
