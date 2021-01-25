import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  // =======ImageBackgroundProfileMain======



  ImageBackgroundProfileMain: {
    height: '100%',
    width: '100%',
  },
  SafeAreaViewProfile: {
    flex: 1,
  },


  // =======CardMainView======

  CardMainView: {
    // flex: 1,
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CardMainView2: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#707070',
    borderWidth: 0.5,
    elevation: 2,
    // height: 400,
    width: '80%',
  },
  CardProfilePicView: {
    // marginTop: 50,
    marginVertical: 10,
    borderWidth: 0.5,
    borderColor: '#707070',
    height: 100,
    width: 100,
    borderRadius: 100,
  },


  // ========ProfileImage======


  ProfileImage: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
  },
  UserNameTextView: {
    marginVertical: 3,
  },
  UserNameText: {
    color: '#FFFFFF',
    fontSize: 17,
  },
  PriceTextView: {
    alignItems: 'center',
  },
  PriceText: {
    height: 20,
    color: '#29FF00',
    fontSize: 13,
    marginTop: 5,
  },
  AdressText: {
    height: 20,
    color: '#F6931B',
    fontSize: 13,
    marginTop: 5,
  },
  StarsView: {
    marginVertical: 5,
    width: '100%',
    alignItems: 'center',
  },
  AboutView: {
    marginVertical: 8,
  },
  AboutText: {
    height: 20,
    color: '#FFFFFF',
    fontSize: 15,
  },
  AboutView1: {
    width: '85%',
    alignSelf: 'center',
  },
  AboutText1: {
    // height: 16,
    color: '#FFFFFF',
    fontSize: 13,
    textAlign: 'center',
  },



  // =======ButtonsView======
  
  ButtonsView: {
    flexDirection: 'row',
    marginVertical: 30,
  },
  LinearGradientChatButton:{
    marginRight: 20, borderRadius: 3
  },
  LinearGradientHireNowButton:{
    borderRadius: 3
}
});

export default styles;
