import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  scroll: {
    width: '100%',
  },
  digit: {
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  digitOverride: {
    fontSize: 18,
    color: 'black',
  },
  mark: {
    position: 'absolute',
    borderRadius: 10,
  },
  markOverride: {
    backgroundColor: 'lightgreen',
    width: '90%',
  },
  blockContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
