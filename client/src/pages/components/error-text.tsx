import React from 'react';
import {StyleSheet, Text} from 'react-native';

interface Props {
  title: string;
}

export const ErrorText = ({title}: Props): JSX.Element => {
  return <Text style={styles.errorText}>{title}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    color: 'red',
    marginTop: 5,
  },
});
