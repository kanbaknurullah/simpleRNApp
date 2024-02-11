import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Separator = (): JSX.Element => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    marginTop: 30,
  },
});
