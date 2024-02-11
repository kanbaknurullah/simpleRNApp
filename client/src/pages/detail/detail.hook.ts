import axios from 'axios';
import {DateTime} from 'luxon';
import {useState} from 'react';
import {DetailPageProps} from './detail.type';
import {useNavigation} from '@react-navigation/native';
import {RootNavigation, RootRoutes} from '../../router/router.type';

export const useDetailHook = (props: DetailPageProps) => {
  const data = props.route.params;
  const navigation = useNavigation<RootNavigation>();
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(DateTime.now());
  const [rating, setRating] = useState(data.item?.rating);
  const closeCalendarModal = () => {
    setCalendarModalVisible(false);
  };
  const openCalendarModal = () => {
    setCalendarModalVisible(true);
  };
  const onPressSubmitDate = async ({
    selected_date,
  }: {
    selected_date: DateTime;
  }) => {
    closeCalendarModal();
    setSelectedDate(selected_date);
  };
  const rentBike = async () => {
    await axios.put(`http://localhost:8000/api/rent_bike/${data.item?._id}`, {
      reservation_time: [selectedDate.toFormat('yyyy-MM-dd')],
    });
    navigation.navigate(RootRoutes.HOME);
  };
  const cancelRent = async () => {
    await axios.put(`http://localhost:8000/api/cancel_rent/${data.item?._id}`, {
      reservation_time: selectedDate.toFormat('yyyy-MM-dd'),
    });
    navigation.navigate(RootRoutes.HOME);
  };
  const rateBike = async () => {
    await axios.put(`http://localhost:8000/api/rate_bike/${data.item?._id}`, {
      rating: rating,
    });
  };

  return {
    openCalendarModal,
    rentBike,
    cancelRent,
    calendarModalVisible,
    closeCalendarModal,
    onPressSubmitDate,
    setRating,
    rating,
    selectedDate,
    data,
  };
};
