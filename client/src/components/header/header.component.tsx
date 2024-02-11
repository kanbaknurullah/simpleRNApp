import React from 'react';
import {styles} from './header.style';
import {View, Text} from 'react-native';

export interface HeaderProps {
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({title}): JSX.Element => {
  return (
    <View style={styles.container}>
      {title ? (
        <View style={styles.titleContainer}>
          <Text style={styles.text} numberOfLines={3}>
            {title}
          </Text>
        </View>
      ) : null}
    </View>
  );
};
