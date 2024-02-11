import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CalendarDatePicker} from '../../components/calendar-date-picker/calendar-date-picker.component';
import {styles} from './home.style';
import {useHomeHook} from './home.hook';
import {i18n} from '../../constants/i18n';
import {BikeCard} from '../components/bike-card';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export interface Bike {
  _id: string;
  model: string;
  color: string;
  location: string;
  rating: number;
  reservation_time: string[];
}

export const Home = () => {
  const {
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
  } = useHomeHook();
  const safeAreaInsets = useSafeAreaInsets();
  const safeStyle: ViewStyle = {
    marginTop: safeAreaInsets?.top,
    marginLeft: safeAreaInsets?.left,
    marginRight: safeAreaInsets?.right,
    marginBottom: safeAreaInsets?.bottom,
  };
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={[styles.container, safeStyle]}>
      <SafeAreaView />
      <Text style={styles.filterHeader}>{i18n.t('filters')}</Text>
      <View style={styles.filterContainer}>
        <View style={styles.flex}>
          <View>
            <Text>{i18n.t('model')}</Text>
            <TextInput
              style={styles.input}
              value={model}
              onChangeText={(text: string) => setModel(text)}
              placeholder={i18n.t('model')}
            />
          </View>
          <View>
            <Text>{i18n.t('color')}</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text: string) => setColor(text)}
              placeholder={i18n.t('color')}
            />
          </View>
        </View>
        <View style={styles.flex}>
          <View>
            <Text>{i18n.t('location')}</Text>
            <TextInput
              style={styles.input}
              value={location}
              onChangeText={(text: string) => setLocation(text)}
              placeholder={i18n.t('location')}
            />
          </View>
          <View>
            <Text>{i18n.t('rating')}</Text>
            <TextInput
              style={styles.input}
              value={rating}
              onChangeText={(text: string) => setRating(text)}
              placeholder={i18n.t('rating')}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        style={styles.floatingButtonContainer}
        onPress={openCalendarModal}>
        <Text style={styles.size25}>🗓️</Text>
      </TouchableOpacity>
      <Text style={styles.filterHeader}>{i18n.t('available_bikes')}</Text>
      <FlatList
        data={filteredData}
        showsHorizontalScrollIndicator={false}
        horizontal={false}
        renderItem={({item}) => (
          <BikeCard
            onPress={() => goToDetailPage(item)}
            color={item.color}
            model={item.model}
            location={item.location}
            rating={item.rating.toString()}
          />
        )}
        keyExtractor={item => item._id}
        showsVerticalScrollIndicator={false}
      />
      <CalendarDatePicker
        visible={calendarModalVisible}
        closeModal={closeCalendarModal}
        onPressSubmit={onPressSubmitDate}
      />
      <SafeAreaView />
    </KeyboardAwareScrollView>
  );
};
