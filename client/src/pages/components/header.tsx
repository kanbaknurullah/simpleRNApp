import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Icon, IconName} from '../../icons';

interface Props {
  title: string;
  onPress: () => void;
}

export const Header = ({title, onPress}: Props): JSX.Element => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onPress} style={styles.backContainer}>
        <Icon name={IconName.BACK} style={styles.backIcon} onPress={onPress} />
      </TouchableOpacity>
      <Text style={styles.header}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 20,
    position: 'relative',
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'black',
  },
  backIcon: {
    position: 'absolute',
    left: 0,
    top: 4,
  },
  backContainer: {
    zIndex: 1,
  },
});
