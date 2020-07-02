// eslint-disable-next-line no-unused-vars
import React, { Dispatch, SetStateAction } from 'react';
import { View, TextInput, Text } from 'react-native';
import styles from './playerInformationAddStyleSheet';

type TPlayerInformationAdd = {
    title: string;
    name: string;
    setName: Dispatch<SetStateAction<string>>
}

export default function PlayerInformationAdd({ title, name, setName }:TPlayerInformationAdd) {
  return (
    <View style={styles.container}>
      <View>
        <Text>
          Player {title}
        </Text>
      </View>
      <TextInput
        placeholder={`Enter Player ${title} Name`}
        value={name}
        onChangeText={setName}
      />
    </View>
  );
}
