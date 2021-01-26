import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // ======ImageBackgroundPaymentMain=====

  ImageBackgroundOtpMain: {
    height: '100%',
    width: '100%',
  },

  //   ======SafeAreaViewOtpMain=====

  SafeAreaViewOtpMain: {
    flex: 1,
    marginTop: 20,
  },

  // ======OtpImageView====
  OtpImageView: {
    alignItems: 'center',
    marginVertical: 40,
  },
  OtpImage: {
    height: 107.74,
    width: 173,
  },

  // =======OtpStartView=====

  OtpStartView: {
    width: '100%',
    alignItems: 'center',
  },
  AllTextView: {
    alignItems: 'center',
    borderWidth: 1,
    width: '100%',
  },
  SentText: {
    color: '#FFFFFF',
    fontSize: 14,
    textAlign: 'center',
  },
  WrongNumberText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginVertical: 10,
  },

  // =======RenderOtpView======

  RenderOtpView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 10,
    // borderWidth: 1,
  },

  RenderOtpMapView: {
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'black',
    height: 70,
    fontSize: 26,
    backgroundColor: 'white',
    marginRight: 7,
    borderWidth: 1,
  },

  TextInputOtp: {
    fontSize: 18,
  },

  // ======LinearGradientOtp=====

  LinearGradientOtp: {
    width: 301,
    height: 42,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 3,
  },
});

export default styles;
