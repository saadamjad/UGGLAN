import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  imageBackground: {
    height: '100%',
    width: '100%',
  },
  SafeAreaView: {
    flex: 1,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  /* ==========Parrent Box========== */

  parrentBoxView: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: '#707070',
  },

  /* ==========Image========== */

  imageMainView: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  imageView: {
    borderWidth: 0.5,
    borderColor: '#F6931B',
    borderRadius: 100,
    overflow: 'hidden',
  },
  imageStyle: {
    height: 60,
    width: 60,
    borderRadius: 60,
  },

  /* =====Title & Mobile no:===== */

  titleText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  mobileText: {
    color: '#B3B6B7',
    fontSize: 12,
  },

  /* ==========Send Image Button========== */

  sendView: {
    width: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sendImageStyle: {
    height: 30,
    width: 30,
  },
});

export default styles;
