import {DateTime} from 'luxon';
import {useState} from 'react';

interface Props {
  onPressSubmit?: ({selected_date}: {selected_date: DateTime}) => void;
}

export const useModalHeaderHook = ({onPressSubmit}: Props) => {
  const [selectedDate, setSelectedDate] = useState<DateTime>(DateTime.now());

  const onPressTick = () => {
    const selected_date = selectedDate;
    onPressSubmit &&
      onPressSubmit({
        selected_date,
      });
  };

  return {
    onPressTick,
  };
};
