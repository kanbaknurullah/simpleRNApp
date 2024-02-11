import {StyleSheet, Platform} from 'react-native';

export const styles = StyleSheet.create({
  calendarHeaderItem: {
    flex: 1,
    color: 'gray',
  },
  calendarRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
  selectedBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  selectedItemOrangeBackground: {
    width: 33,
    height: 33,
    borderRadius: 16.5,
    backgroundColor: 'orange',
  },
  selectedItemWhiteBackground: {
    width: 33,
    height: 33,
    borderRadius: 16.5,
    backgroundColor: 'white',
  },
  selectedItem: {
    flex: 1,
    lineHeight: Platform.OS === 'ios' ? 30 : undefined,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
