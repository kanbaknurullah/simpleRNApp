import {useNavigation} from '@react-navigation/native';
import {DateTime} from 'luxon';
import React, {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {RootNavigation, RootRoutes} from '../../router/router.type';
import {Bike} from './home';
import axios from 'axios';
import {useFocusEffect} from '@react-navigation/native';
import {setBikeData as setBikeDataRedux} from '../../redux-store/actions/bike-data.actions';
import {useAppDispatch} from '../../redux-store/store.hooks';

export const useHomeHook = () => {
  const [bikeData, setBikeData] = useState<Bike[]>([]);
  const [calendarModalVisible, setCalendarModalVisible] = useState(false);
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [location, setLocation] = useState('');
  const [rating, setRating] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedDate, setSelectedDate] = useState(DateTime.now());
  const navigation = useNavigation<RootNavigation>();
  const dispatch = useAppDispatch();
  const goToDetailPage = (item: Bike) => {
    navigation.navigate(RootRoutes.DETAIL, {item});
  };
  const getData = async () => {
    const response = await axios.get('http://localhost:8000/api/bikes');
    if (response.data.error) {
      Alert.alert(response.data.error);
    } else {
      dispatch(setBikeDataRedux(JSON.parse(JSON.stringify(response.data))));
      setBikeData(response.data);
    }
  };
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
  const fullyAvailableBikeFinder = () => {
    return bikeData.filter(item => item.reservation_time.length === 0);
  };
  const partiallyAvailableBikeFinder = () => {
    return bikeData.filter(item => item.reservation_time.length !== 0);
  };
  const specificBikeFinder = (date: string) => {
    return partiallyAvailableBikeFinder().filter(
      item => !item.reservation_time.includes(date),
    );
  };
  const availableBikes = fullyAvailableBikeFinder().concat(
    specificBikeFinder(selectedDate.toFormat('yyyy-MM-dd')),
  );

  const filteredData = availableBikes.filter(
    item =>
      item.model.toLowerCase().includes(model.toLowerCase()) &&
      item.color.toLowerCase().includes(color.toLowerCase()) &&
      item.location.toLowerCase().includes(location.toLowerCase()) &&
      item.rating.toString().toLowerCase().includes(rating.toLowerCase()),
  );

  useFocusEffect(
    React.useCallback(() => {
      setIsFocused(true);
      return () => {
        setIsFocused(false);
      };
    }, []),
  );

  useEffect(() => {
    if (isFocused) {
      getData();
    }
  }, [isFocused]);

  return {
    model,
    setModel,
    setColor,
    location,
    setLocation,
    rating,
    setRating,
    filteredData,
    goToDetailPage,
    calendarModalVisible,
    openCalendarModal,
    closeCalendarModal,
    onPressSubmitDate,
  };
};
