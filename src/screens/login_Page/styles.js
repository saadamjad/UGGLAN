import {Platform, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: 20,
  },
  loginView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  loginText: {
    color: '#FFFFFF',
    fontSize: 25,
    height: 40,
  },

  /* ======Form Start====== */

  widthView: {
    width: '90%',
    alignSelf: 'center',
  },

  /* ==========Phone Number========== */

  phoneView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#C0C0C0',
    alignItems: 'center',
    width: '100%',
  },
  phoneTextInput: {
    color: 'white',
    width: '90%',
    height: Platform.OS == 'ios' ? 40 : 0,
  },
  phoneIcon: {
    alignItems: 'flex-end',
    width: 14.33,
    height: 14.33,
  },

  /* ==========Password========== */

  passwordView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#C0C0C0',
    alignItems: 'center',
    width: '100%',
  },

  passwordTextInput: {
    color: 'white',
    width: '90%',
    height: Platform.OS == 'ios' ? 40 : 0,
  },

  passwordIcon: {
    alignItems: 'flex-end',
    height: 13.5,
    width: 13.5,
  },

  /* ========Forgot Password======== */

  forgotView: {
    alignItems: 'flex-end',
    marginVertical: 20,
  },

  forgotText: {
    color: '#C0C0C0',
    fontSize: 12,
    height: 15,
  },

  /* ========Dont Have An Account======== */

  dontView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  dontText: {
    color: '#808080',
    fontSize: 12,
  },

  signupText: {
    color: '#C0C0C0',
    paddingLeft: 5,
    height: 19,
  },

  /* ========Login Button======== */

  loginLG: {
    width: 301,
    height: 42,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 3,
  },
});
export default styles;
