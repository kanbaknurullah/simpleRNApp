import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  previousMonthIcon: {
    transform: [{rotate: '180deg'}],
    marginRight: 20,
  },
  nextMonthIcon: {
    marginLeft: 20,
  },
  dateDisplayContainer: {
    marginHorizontal: 32,
    marginTop: 22,
  },
  dateTitle: {
    textAlign: 'left',
    color: 'black',
    marginBottom: 3,
  },
  dateSubtitle: {
    textAlign: 'left',
    color: 'black',
    marginBottom: 16,
  },
  monthSelectionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 15,
    marginTop: 20,
  },
  monthSelectionChildContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  monthSelectionContainerText: {
    color: 'black',
    marginRight: 15,
    fontSize: 16,
  },
});
