import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  TextInput,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {CalendarDatePicker} from '../../components/calendar-date-picker/calendar-date-picker.component';
import {DetailPageProps} from './detail.type';
import {useDetailHook} from './detail.hook';
import {styles} from './detail.style';
import {i18n} from '../../constants/i18n';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MainButton} from '../components/main-button';
import {BikeCard} from '../components/bike-card';

export const Detail: React.FC<DetailPageProps> = (
  props: DetailPageProps,
): JSX.Element => {
  const {
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
  } = useDetailHook(props);
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
      <BikeCard
        onPress={() => {}}
        color={data?.item?.color}
        model={data?.item?.model}
        location={data?.item?.location}
        rating={data?.item?.rating.toString()}
      />
      <View style={styles.width100}>
        <Text style={styles.header}>{i18n.t('selected_date')}</Text>
        <TextInput
          style={styles.input}
          value={selectedDate.toFormat('yyyy-MM-dd')?.toString()}
          keyboardType="number-pad"
          readOnly
          placeholder={i18n.t('rating')}
        />
      </View>
      <View style={styles.width100}>
        <Text style={styles.header}>{i18n.t('rating')}</Text>
        <TextInput
          style={styles.input}
          value={rating?.toString()}
          keyboardType="number-pad"
          readOnly
          onChangeText={(text: string) => setRating(Number(text))}
          placeholder={i18n.t('rating')}
        />
      </View>
      <MainButton
        style={styles.mainButton}
        title={i18n.t('rent')}
        onPress={rentBike}
      />
      <MainButton
        style={styles.mainButton}
        title={i18n.t('cancel_rent')}
        onPress={cancelRent}
      />
      <TouchableOpacity
        style={styles.floatingButtonContainer}
        onPress={openCalendarModal}>
        <Text style={styles.size25}>🗓️</Text>
      </TouchableOpacity>
      <CalendarDatePicker
        visible={calendarModalVisible}
        closeModal={closeCalendarModal}
        onPressSubmit={onPressSubmitDate}
      />
      <SafeAreaView />
    </KeyboardAwareScrollView>
  );
};
