import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: 5,
    padding: 5,
    marginVertical: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'stretch',
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
  },
  item: {
    alignItems: 'center',
    width: '50%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
  listItem: {
    flex: 1,
    justifyContent: 'space-around',
    marginHorizontal: 10,
  },
  filterHeader: {
    color: 'black',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginLeft: 10,
  },
  flex: {
    flex: 1,
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
});
