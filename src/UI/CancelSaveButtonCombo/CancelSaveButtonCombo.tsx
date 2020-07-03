import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './cancelSaveButtonComboStyleSheet';

type TCancelSaveButtonCombo = {
  cancelFn?: () => void;
  saveFn: () => void;
  cancelButtonTitle?: string;
  saveButtonTitle?: string;
  dontShowCancelFn?: boolean;
};

export default function CancelSaveButtonCombo({
  cancelFn,
  saveFn,
  saveButtonTitle,
  cancelButtonTitle,
  dontShowCancelFn = false,
}: TCancelSaveButtonCombo) {
  return (
    <View style={styles.row}>
      {!dontShowCancelFn && cancelFn && (
        <TouchableOpacity
          style={[styles.buttonCommon, styles.rightMargin]}
          onPress={cancelFn}
        >
          <Text style={styles.cancelButtonTitle}>
            {cancelButtonTitle || 'Cancel'}
          </Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity
        style={[styles.buttonCommon, styles.saveButton]}
        onPress={saveFn}
      >
        <Text style={styles.saveButtonTitle}>{saveButtonTitle || 'Save'}</Text>
      </TouchableOpacity>
    </View>
  );
}
