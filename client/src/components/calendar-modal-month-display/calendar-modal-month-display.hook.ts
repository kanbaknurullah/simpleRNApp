import {useState} from 'react';
import {days, months} from '../../constants/days-months.constant';
import {i18n} from '../../constants/i18n';

export const useCalendarModalMonthDisplayHook = (
  changedMonth: Date,
  onChangedMonth: (date: Date) => void,
) => {
  const [activeDate, setActiveDate] = useState(new Date());
  const [isDatePickerShown, setIsDatePickerShown] = useState<boolean>(false);
  const closeDatePicker = () => setIsDatePickerShown(false);

  const localizedMonths = months.map(month =>
    i18n.t(`calendar_months.${month}`),
  );

  const localizedDays = days.map(day => i18n.t(`week_days.${day}`));

  const changeMonth = (n: number) => {
    const nextMonth = new Date(changedMonth);
    nextMonth.setMonth(changedMonth.getMonth() + n);
    onChangedMonth(nextMonth);
  };
  const pickerShownControl = () => {
    isDatePickerShown
      ? setIsDatePickerShown(false)
      : setIsDatePickerShown(true);
  };
  const previousMonth = () => {
    changeMonth(-1);
  };
  const nextMonth = () => {
    changeMonth(1);
  };

  return {
    isDatePickerShown,
    changedMonth,
    activeDate,
    localizedMonths,
    localizedDays,
    closeDatePicker,
    pickerShownControl,
    previousMonth,
    nextMonth,
  };
};
