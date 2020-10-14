import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  imageView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
  },
  imageStyle: {
    height: 217,
    width: 217,
  },

  /* ==========Buttons========== */

  loginLG: {
    height: 40,
    width: 301,
    alignSelf: 'center',
    marginVertical: 5,
    marginTop: 50,
    borderRadius: 3,
  },

  signUpLG: {
    height: 40,
    width: 301,
    alignSelf: 'center',
    marginVertical: 5,
    borderRadius: 3,
  },

  facebookView: {
    height: 40,
    width: 301,
    alignSelf: 'center',
    marginVertical: 5,
  },

  /* ==========Footer========== */

  footerView: {
    justifyContent: 'center',
    marginVertical: 20,
  },
  
  footerText: {
    color: '#FFFFFF',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 20,
  },
});

export default styles;
