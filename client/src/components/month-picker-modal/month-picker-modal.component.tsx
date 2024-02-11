import React from 'react';
import {Modal, View} from 'react-native';
import {DatePicker} from '../date-picker/date-picker.component';
import styles from './month-picker-modal.style';
import {Icon, IconName} from '../../icons';

interface MonthPickerProps {
  isDatePickerShown: boolean;
  closeDatePicker: () => void;
  changedMonth: Date;
  activeDate: Date;
  setChangedMonth:
    | React.Dispatch<React.SetStateAction<Date>>
    | ((date: Date) => void);
}

export const MonthPickerModal: React.FC<MonthPickerProps> = ({
  isDatePickerShown,
  closeDatePicker,
  changedMonth,
  activeDate,
  setChangedMonth,
}): JSX.Element => {
  return (
    <Modal
      transparent
      visible={isDatePickerShown}
      onRequestClose={closeDatePicker}>
      <View style={styles.monthYearPickerModalBackdrop}>
        <View style={styles.monthYearPickerContainer}>
          <Icon
            name={IconName.DONE_POPUP_CLOSE}
            style={styles.monthYearSelectorClose}
            onPress={closeDatePicker}
          />
          <DatePicker
            value={changedMonth}
            endYear={2100}
            startYear={activeDate.getFullYear()}
            onChange={(value: Date) => setChangedMonth(value)}
            format={'yyyy-mm-dd'}
          />
        </View>
      </View>
    </Modal>
  );
};
