import React from 'react';
import styles from './calendar-modal-month-display.style';
import {useCalendarModalMonthDisplayHook} from './calendar-modal-month-display.hook';
import {MonthPickerModal} from '../month-picker-modal/month-picker-modal.component';
import {Icon, IconName} from '../../icons';
import {Text, TouchableOpacity, View} from 'react-native';

interface Props {
  changedMonth: Date;
  onChangedMonth: (date: Date) => void;
}

export const CalendarModalMonthDisplay: React.FC<Props> = ({
  onChangedMonth,
  changedMonth,
}: Props): JSX.Element => {
  const {
    isDatePickerShown,
    activeDate,
    localizedMonths,
    closeDatePicker,
    pickerShownControl,
    previousMonth,
    nextMonth,
  } = useCalendarModalMonthDisplayHook(changedMonth, onChangedMonth);

  return (
    <>
      <View style={styles.monthSelectionContainer}>
        <TouchableOpacity
          style={styles.monthSelectionChildContainer}
          onPress={pickerShownControl}>
          <Text style={styles.monthSelectionContainerText}>
            {localizedMonths[changedMonth.getMonth()]}{' '}
            {changedMonth.getFullYear()}
          </Text>
          <Icon
            fillOpacity={1}
            name={IconName.CHEVRON_RIGHT}
            onPress={pickerShownControl}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.monthSelectionChildContainer}>
          <Icon
            fillOpacity={1}
            name={IconName.CHEVRON_RIGHT}
            style={styles.previousMonthIcon}
            onPress={previousMonth}
          />
          <Icon
            fillOpacity={1}
            name={IconName.CHEVRON_RIGHT}
            style={styles.nextMonthIcon}
            onPress={nextMonth}
          />
        </TouchableOpacity>
      </View>
      <MonthPickerModal
        isDatePickerShown={isDatePickerShown}
        closeDatePicker={closeDatePicker}
        changedMonth={changedMonth}
        activeDate={activeDate}
        setChangedMonth={onChangedMonth}
      />
    </>
  );
};
