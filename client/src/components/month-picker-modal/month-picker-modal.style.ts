import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  monthYearSelectorClose: {
    zIndex: 1,
    alignSelf: 'flex-end',
    top: 30,
    right: 5,
    padding: 5,
  },
  monthYearPickerModalBackdrop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  monthYearPickerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 65,
  },
});
