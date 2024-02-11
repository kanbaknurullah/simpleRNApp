import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginVertical: 5,
    marginRight: 10,
    color: 'black',
    fontSize: 16,
    padding: 5,
    alignSelf: 'flex-start',
    width: '50%',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  width100: {
    width: '100%',
  },
  floatingButtonContainer: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    borderRadius: 200,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  size25: {
    fontSize: 25,
  },
  mainButton: {
    paddingVertical: 5,
    marginTop: 10,
  },
});
