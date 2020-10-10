/** @format */

import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: 'white',
    width: '90%',
    height: 40,
    alignSelf: 'center',
    borderColor: '#d1d1d1',
    marginVertical: 5,
    shadowColor: '#d1d1d1',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  buttonText: {
    color: 'black',
    fontSize: 12,
  },
  containerStyle: {
    justifyContent: 'center',
  },
  buttonIcon: {
    marginRight: 15,
  },
});
export default styles;
