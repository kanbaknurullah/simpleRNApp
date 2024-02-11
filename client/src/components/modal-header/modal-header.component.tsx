import React from 'react';
import {styles} from './modal-header.style';
import {DateTime} from 'luxon';
import {useModalHeaderHook} from './modal-header.hook';
import {i18n} from '../../constants/i18n';
import {Icon, IconName} from '../../icons';
import {View, Text} from 'react-native';

interface Props {
  onPressSubmit?: ({selected_date}: {selected_date: DateTime}) => void;
  header?: string;
}

export const ModalHeader: React.FC<Props> = ({
  onPressSubmit,
  header,
}: Props): JSX.Element => {
  const {onPressTick} = useModalHeaderHook({
    onPressSubmit,
  });
  return (
    <View style={styles.modalHeaderContainer}>
      <View style={styles.left} />
      <Text style={styles.header}>
        {header ? header : i18n.t('date_header')}
      </Text>
      <View style={styles.doneIconContainer}>
        <Icon name={IconName.CHECK} onPress={onPressTick} />
      </View>
    </View>
  );
};
