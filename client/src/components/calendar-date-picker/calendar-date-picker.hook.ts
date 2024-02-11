import {DateTime} from 'luxon';
import {useState} from 'react';

interface Props {
  onPressSubmit?: ({selected_date}: {selected_date: DateTime}) => void;
}

export const useTimelineDatePickerHook = ({onPressSubmit}: Props) => {
  const [submittedDate, setSubmittedDate] = useState<DateTime>(DateTime.now());

  const onChangeDate = (date: DateTime) => {
    setSubmittedDate(date);
  };

  const onPressTick = () => {
    const selected_date = submittedDate;
    onPressSubmit &&
      onPressSubmit({
        selected_date,
      });
  };

  const [newDisplayedMonth, setNewDisplayedMonth] = useState<Date>(new Date());

  const onChangedMonth = (date: Date) => {
    setNewDisplayedMonth(date);
  };
  const [selectedDate, setSelectedDate] = useState<DateTime | number[]>([]);

  const onPressCalendarDate = (date: DateTime) => {
    if (!Array.isArray(selectedDate) && selectedDate.equals(date)) {
      setSelectedDate([]);
    } else if (date.toString() === '-1') {
      return;
    } else {
      setSelectedDate(date);
      onChangeDate(date);
    }
  };

  const selectedDayIndex = [];
  if (!Array.isArray(selectedDate)) {
    if (
      !selectedDate?.equals(DateTime.now()) &&
      selectedDate.toString() !== '-1'
    ) {
      selectedDayIndex.push(Number(selectedDate?.toFormat('d')));
    }
  }

  return {
    onPressTick,
    onChangeDate,
    selectedDate,
    newDisplayedMonth,
    onPressCalendarDate,
    onChangedMonth,
  };
};
