import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Dimensions,
} from 'react-native';
import {i18n} from '../../constants/i18n';

const {width} = Dimensions.get('window');

interface Props {
  color?: string;
  onPress?: () => void;
  location?: string;
  rating?: string;
  model?: string;
}

export const BikeCard = ({
  onPress,
  color,
  location,
  rating,
  model,
}: Props): JSX.Element => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={[styles.leftContainer, {backgroundColor: color?.toLowerCase()}]}
      />
      <View style={styles.rightContainer}>
        <Text>{`${i18n.t('model')}: ${model}`}</Text>
        <Text>{`${i18n.t('location')}: ${location}`}</Text>
        <Text>{`${i18n.t('rating')}: ${rating}`}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
    width: width - 20,
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    marginVertical: 10,
  },
  leftContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 20,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
});
