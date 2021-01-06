import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  rowView: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: '#707070',
  },

   /* ==========Indicator========== */

indicator:{
justifyContent:'center',
flex:1,
alignItems:'center'
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

  /* ==========Title & Card:========== */
  mcImageStyle: {
    height: 12.79,
    width: 21.1,
    // borderRadius: 100,
  },
  textStyle: {
    color: '#B3B6B7',
    fontSize: 12,
    marginHorizontal: 3,
  },

  /* ==========Remove Image Button========== */

  removeImageView: {
    width: '15%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeImageStyle: {
    height: 20.94,
    width: 18.85,
  },

  /* ==========Button========== */

  LGButton: {
    width: 301,
    height: 42,
    alignSelf: 'center',
    marginVertical: 20,
    borderRadius: 3,
  },
});
export default styles;
