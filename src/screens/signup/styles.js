import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    ImageBackgroundSignUpMain: {
    height: '100%',
    width: '100%',
  },

  SafeAreaViewSignup: {
    flex: 1,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  CreateAccountText:
  {
    color: '#FFFFFF', fontSize: 25
  },
  ProfileImageView1:{
    alignItems: 'center'
  },
  ImageBackgroundSignUp:{
    height: 100, width: 100
  },
 
  ProfileImageView2:{
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: 'white',
    marginBottom: 50,
  },
  ProfileImageView3:{
    position: 'absolute', bottom: -10
  },
  LinearGradientSignup1:{
    marginLeft: 75,
    marginBottom: 15,
    borderRadius: 20,
    overflow: 'hidden',
  },
  fullNameRowView:{
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#C0C0C0',
    alignItems: 'center',
    width: '100%',
  },
  TextInputfullNameRow:{
    color: 'white',
    width: '90%',
    height: 40,
  },
  CodePhoneRowView:{
    flexDirection: 'row',
    alignSelf: 'center',
    width: '100%',
  },
  emailView:{
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#C0C0C0',
    alignItems: 'center',
    width: '100%',
  },
  TextInputemail:{
    color: 'white',
    width: '90%',
    height: 40,
  },
  emailIconView:{
    width: '15%'
  },
  IconStyleemail:{
    alignItems: 'flex-end',
    height: 13.31,
    width: 20.07,
  },
  passwordView:{
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#C0C0C0',
    alignItems: 'center',
    width: '100%',
  },
  TextInputpassword:{
    color: 'white',
    width: '90%',
    height: 40,
  },
  passwordIconView:{
    width: '15%'
  },
  passwordIcon:{
    alignItems: 'flex-end',
    height: 13.5,
    width: 13.5,
  },
  AlreadyAccountView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 40,
  },
  AlreadyAccountText:{
    color: '#808080', fontSize: 12
  },
  LoginText:{
    color: '#C0C0C0', paddingLeft: 5, height: 19
  },
  LinearGradientSignupButton:{
    width: 301,
    height: 42,
    alignSelf: 'center',
    marginVertical: 10,
    borderRadius: 3,
  }


});

export default styles;
