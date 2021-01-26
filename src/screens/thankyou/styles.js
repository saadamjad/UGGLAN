import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // ======ImageBackgroundPaymentMain=====

  ImageBackgroundThankuMain: {
    height: '100%',
    width: '100%',
  },
  SafeAreaViewThanku: {
    flex: 1,
    width: '90%',
    marginVertical: 20,
    alignSelf: 'center',
  },

  //    =========ThankYouTextView=====
  ThankYouTextView: {
    alignItems: 'center',
    marginTop: 30,
  },
  ThankYouText: {
    color: '#FFFFFF',
    fontSize: 17,
  },

  // ======CheckImageView====

  CheckImageView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },

  CheckImage: {
    height: 83.8,
    width: 83.8,
  },

  // =======NowContactView====

  NowContactView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  NowContactText: {
    color: '#FFFFFF',
    fontSize: 13,
  },

  // ======LinearGradientTrackButton=====

  LinearGradientTrackButton: {
    alignSelf: 'center',
    marginVertical: 10,
    marginTop: 50,
    borderRadius: 3,
  },
});

export default styles;
