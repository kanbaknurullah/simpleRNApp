import {DateTime} from 'luxon';
import React from 'react';
import {useCalendarHook} from './calendar.hook';
import {styles} from './calendar.style';
import {Text, TouchableOpacity, View} from 'react-native';

interface Props {
  date: Date;
  selectedDates: number[] | DateTime;
  onPressDate: (date: DateTime) => void;
}

export const Calendar = ({
  date,
  selectedDates,
  onPressDate,
}: Props): JSX.Element => {
  const {matrix, isDateSelected, isToday, calendarDayChecker} = useCalendarHook(
    date,
    selectedDates,
  );

  return (
    <>
      {matrix.map((row: DateTime[], rowIndex: number) => {
        const rowItems = row.map((item: DateTime, index) => {
          const isSelected = isDateSelected(item);
          const isNotEmpty = item.toString() !== '-1';
          const onPress = () => {
            if (item.toString() === '-1') return;
            onPressDate(item);
          };
          return rowIndex === 0 ? (
            <Text key={`${item}`}>{isNotEmpty ? item.toString() : ''}</Text>
          ) : (
            <TouchableOpacity
              key={item && isNotEmpty ? item.toString() : index}
              onPress={onPress}
              // isSelected={isSelected}
            >
              <View
                style={
                  isSelected
                    ? styles.selectedItemOrangeBackground
                    : styles.selectedItemWhiteBackground
                }>
                <Text
                  style={[
                    styles.selectedItem,
                    {fontWeight: isSelected ? '600' : '500'},
                    isToday(item) && !isSelected
                      ? {fontWeight: '600', color: 'orange'}
                      : isSelected
                      ? {color: 'white'}
                      : {color: 'black'},
                  ]}>
                  {isNotEmpty ? item.toFormat('d') : ''}
                </Text>
              </View>
            </TouchableOpacity>
          );
        });
        return <View style={styles.calendarRowContainer}>{rowItems}</View>;
      })}
    </>
  );
};
