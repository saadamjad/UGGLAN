import {Platform, StyleSheet} from 'react-native';
const styles = StyleSheet.create({

    ImageBackgroundAddContacts:{
    height: '100%',
    width: '100%',
  },

    //    ==========Form Start========== 

  SafeAreaViewForm:{
    flex: 1, marginTop: 20, width: '90%', alignSelf: 'center'
  },
//   ==========Full Name Row==========


formViewName:{
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#C0C0C0',
    alignItems: 'center',
    width: '100%',
},

TextInputFullNameRow:{
    color: 'white',
    width: '90%',
    height: 40,
},
TextInputFullNameIcon:{
    alignItems: 'flex-end',
    height: 15.87,
    // width: 13.34,
},



//   ==========Phone  Row==========

formViewPhone:{
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#C0C0C0',
    alignItems: 'center',
    width: '100%',
},

TextInputPhoneRow:{
    color: 'white',
    width: '90%',
    height: 40,
},
TextInputPhoneIcon:{
    alignItems: 'flex-end',
    height: 13.31,
    width: 20.07,
}
});
export default styles;
