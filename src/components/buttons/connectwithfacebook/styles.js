/** @format */

import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#2b5c94',
    width: '90%',
    height: 40,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: '#255080',
    marginVertical: 5,
    shadowColor: '#6272a5',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  containerStyle: {
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
  },
});
export default styles;
