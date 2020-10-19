import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  ImageBackground: {
    height: '100%',
    width: '100%',
  },
  safeAreaView: {
    flex: 1,
    marginTop: 20,
  },
  /* ========Title======== */
  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 25,
    height: 40,
  },

  /* ======Form Start====== */

  formView: {
    width: '90%',
    alignSelf: 'center',
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
    height: 40
  },

  passwordIcon: {
    alignItems: 'flex-end',
    width: 13.5,
    height: 13.5,
  },

  /* ==========Repeat Password========== */

  rpView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#C0C0C0',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  rpTextInput: {
    color: 'white',
    width: '90%',
    height: 40
  },
  rpIcon: {
    alignItems: 'flex-end',
    width: 13.5,
    height: 13.5,
  },
  /* ========Continue Button======== */
  
  buttonView: {
    width: 301,
    height: 42,
    alignSelf: 'center',
    marginVertical: 50,
    borderRadius: 3,
  },
});

export default styles;
