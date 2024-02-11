import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
}

export const MainButton = ({title, onPress, style}: Props): JSX.Element => {
  return (
    <TouchableOpacity style={[styles.loginButton, style]} onPress={onPress}>
      <Text style={styles.loginButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#5063BF',
    width: '50%',
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 50,
  },
  loginButtonText: {
    fontSize: 22,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'white',
  },
});
