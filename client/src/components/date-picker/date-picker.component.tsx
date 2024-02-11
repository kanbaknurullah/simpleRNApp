import React, {useEffect, useState} from 'react';
import {View, Dimensions} from 'react-native';
import {DateBlock} from '../date-picker-block/date-picker-block.component';
import styles from './date-picker.style';

interface DatePickerProps {
  value: Date | null | undefined;
  startYear?: number;
  endYear?: number;
  format?: string;
  onChange(value: Date): void;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  startYear,
  endYear,
  format,
}) => {
  const [months, setMonths] = useState<number[]>([]);
  const [years, setYears] = useState<number[]>([]);

  useEffect(() => {
    const end = endYear || new Date().getFullYear();
    const start = !startYear || startYear > end ? end - 100 : startYear;

    const _months = [...Array(12)].map((_, index) => index + 1);
    const _years = [...Array(end - start + 1)].map((_, index) => start + index);

    setMonths(_months);
    setYears(_years);
  }, []);
  const {height} = Dimensions.get('window');
  const pickerHeight: number = height / 3;
  const unexpectedDate: Date = new Date(years[0], 0, 1);
  const date = new Date(value || unexpectedDate);

  const changeHandle = (type: string, digit: number): void => {
    switch (type) {
      case 'month':
        date.setMonth(digit - 1);
        break;
      case 'year':
        date.setFullYear(digit);
        break;
    }

    onChange(date);
  };

  const getOrder = () => {
    return (format || 'mm-yyyy').split('-').map((type, index) => {
      switch (type) {
        case 'mm':
          return {name: 'month', digits: months, value: date.getMonth() + 1};
        case 'yyyy':
          return {name: 'year', digits: years, value: date.getFullYear()};
        default:
          return {
            name: ['month', 'year'][index],
            digits: [months, years][index],
            value: [date.getMonth() + 1, date.getFullYear()][index],
          };
      }
    });
  };

  let monthYearArray: {digits: number[]; name: string; value: number}[] = [];
  monthYearArray = [...monthYearArray, getOrder()[1], getOrder()[0]];

  return (
    <View style={[styles.picker, {height: pickerHeight}]}>
      {monthYearArray.map((element, index) => {
        return (
          <DateBlock
            digits={element.digits}
            value={element.value}
            onChange={changeHandle}
            height={pickerHeight}
            type={element.name}
            key={index}
          />
        );
      })}
    </View>
  );
};
