import React from 'react';
import {DateTime} from 'luxon';
import {styles} from './calendar-date-picker.style';
import {useTimelineDatePickerHook} from './calendar-date-picker.hook';
import {Calendar} from '../calendar/calendar.component';
import {ModalHeader} from '../modal-header/modal-header.component';
import {CustomModal} from '../custom-modal/custom-modal';
import {CalendarModalMonthDisplay} from '../calendar-modal-month-display/calendar-modal-month-display.component';
import {View} from 'react-native';

interface Props {
  visible: boolean;
  closeModal?: () => void;
  onPressSubmit?: ({selected_date}: {selected_date: DateTime}) => void;
}

export const CalendarDatePicker: React.FC<Props> = ({
  visible,
  closeModal,
  onPressSubmit,
}: Props): JSX.Element => {
  const {
    onPressTick,
    selectedDate,
    newDisplayedMonth,
    onPressCalendarDate,
    onChangedMonth,
  } = useTimelineDatePickerHook({onPressSubmit});

  return (
    <CustomModal
      isVisible={visible}
      onModalHide={closeModal}
      onClose={closeModal}>
      <View style={styles.modalContainer}>
        <ModalHeader onPressSubmit={onPressTick} />
        <CalendarModalMonthDisplay
          changedMonth={newDisplayedMonth}
          onChangedMonth={onChangedMonth}
        />
        <View style={styles.calendarContainer}>
          <Calendar
            date={newDisplayedMonth}
            onPressDate={onPressCalendarDate}
            selectedDates={selectedDate}
          />
        </View>
      </View>
    </CustomModal>
  );
};
