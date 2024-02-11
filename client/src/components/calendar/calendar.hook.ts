import {DateTime} from 'luxon';
import {i18n} from '../../constants/i18n';

export enum CalendarDay {
  notDay = '-1',
  monday = 'Mon',
  tuesday = 'Tue',
  wednesday = 'Wed',
  thursday = 'Thu',
  friday = 'Fri',
  saturday = 'Sat',
  sunday = 'Sun',
}

export const useCalendarHook = (
  currendDate: Date,
  selectedDates: number[] | DateTime,
) => {
  const matrix = generateMatrix(currendDate);

  const isDateSelected = (date: DateTime) => {
    if (Array.isArray(selectedDates)) {
      return selectedDates.includes(date.day);
    }
    if (selectedDates.equals(date)) return true;
  };

  const isToday = (date: DateTime) => {
    if (!date || date.toString() === '-1') return false;
    const now = DateTime.now();
    return now.toFormat('yyyy LLL dd') === date.toFormat('yyyy LLL dd');
  };
  const calendarDayChecker = (item: DateTime) => {
    return (
      item.toString() !== CalendarDay.monday &&
      item.toString() !== CalendarDay.tuesday &&
      item.toString() !== CalendarDay.wednesday &&
      item.toString() !== CalendarDay.thursday &&
      item.toString() !== CalendarDay.friday &&
      item.toString() !== CalendarDay.saturday &&
      item.toString() !== CalendarDay.sunday &&
      item.toString() !== CalendarDay.notDay
    );
  };

  return {matrix, isDateSelected, isToday, calendarDayChecker};
};

const everyDay = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const weekDays = everyDay.map(day =>
  i18n.t(`calendar_days_abbreviations.${day}`),
);

const listToMatrix = (list: any[], elementsPerSubArray: number) => {
  const matrix: any[] = [];
  let i, k;
  for (i = 0, k = -1; i < list.length; i++) {
    if (i % elementsPerSubArray === 0) {
      k++;
      matrix[k] = [];
    }

    matrix[k].push(list[i]);
  }

  return matrix;
};

const generateMatrix = (changedMonth: Date) => {
  const year = changedMonth.getFullYear();
  const month = changedMonth.getMonth();

  const firstDate = DateTime.fromJSDate(new Date(year, month, 1));
  const firstJSDate = new Date(year, month, 1);
  const firstJSDateIndex = firstJSDate.getDay();
  const numberofdays = firstDate.daysInMonth;
  const daysofmonth = [];
  let currentdate = firstDate;
  for (let i = 0; i < numberofdays!; i++) {
    daysofmonth.push(currentdate);
    currentdate = currentdate.plus({days: 1});
  }
  for (let i = 0; i < firstJSDateIndex; i++) {
    daysofmonth.unshift(-1);
  }
  const othermonthdaycount = 7 - (daysofmonth.length % 7);
  for (let i = 0; i < othermonthdaycount; i++) {
    daysofmonth.push(-1);
  }

  const matrix = listToMatrix(daysofmonth, 7);
  matrix.unshift(weekDays);
  return matrix;
};
