import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-elements';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Platform,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import AlertPopup from '../../components/popup_for_alerts';
import styles from './styles';
import {Icon} from 'native-base';

import {connect} from 'react-redux';
import {AuthAction} from '../../store/actions';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
const App = (props) => {
  const [state, setState] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const [visible, setVisible] = useState(false);
  const [popupText, setPopupText] = useState(false);
  const [eye, setEye] = useState(true);


  const toggleEye = () => {
    setEye(!eye);
    // console.log('EYE ', eye);
  };
  const SgnUpFntn = () => {
    console.log('sss', Number(state.email) ? 'number' : 'email');
    const data = Number(state.email)
      ? {
          phone: state.email,
          password: state.password,
        }
      : {
          email: state.email.toLocaleLowerCase(),
          password: state.password,
        };
    // console.log('signup',data)
    // props._Signup(data, props.navigation);
    _Signup();

    // props.navigation.navigate('otp');
  };

  const _OnChangeText = async (text, name) => {
    setState({...state, [name]: text});
  };

  const _Signup = () => {
    let key = Object.keys(state);
    console.log(key);
    let value = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      state.email,
    );
    let pass=!Number(state.email)
    console.log('PASS',pass)
    // let pass =Number(state.email)
    // let check =

    let fieldIsMissing = false;
    let emptyField = '';
    key.map((item, i) => {
      console.log('item laoo beta ', item);
      if (state[item] == '') {
        fieldIsMissing = true;
      }
    });
    if (fieldIsMissing) {
      // console.log('THIS FIELD IS MISSING ', emptyField);
      state.popupText = 'Kindly fill all fields ';
      setVisible(!visible);
    } else if (!fieldIsMissing) {
      let data = state;
      if (!value) {
        state.popupText = 'Email is not valid';
        setVisible(!visible);
      }
      // else if (!Number(state.email)){
      //   state.popupText('Number is not valid')
      //   setVisible(!visible)
      // }
      else if (state.password.length <= 8) {
        state.popupText = 'Password should be greater than 8';
        setVisible(!visible);
      } else {
        if (Number(state.email)) {
          console.log('number  ');

          data['phone'] = state.email;
          props._Signup(state, props.navigation);
        } else if (!Number(state.email)) {
          console.log('string  ');

          data['email'] = state.email;
          props._Signup(state, props.navigation);
        }
      }
    }
  };

  const loginPage = () => {
    props.navigation.navigate('loginpage');
  };
  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={styles.ImageBackgroundSignUpMain}>
  
        
      <SafeAreaView
        // style={{flex: 1, marginTop: 20, width: '90%', alignSelf: 'center'}}
        style={styles.SafeAreaViewSignup}>
          <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Text style={styles.CreateAccountText}>Create Account</Text>
        </View>

        {/* ==========Profile Image========== */}

        <View style={styles.ProfileImageView1}>
          <View style={styles.ProfileImageView2}>
            <ImageBackground
              source={require('../../assets/images/1.jpg')}
              style={styles.ImageBackgroundSignUp}
              imageStyle={{borderRadius: 100}}>
              <View style={styles.ProfileImageView3}>
                <LinearGradient
                  colors={['#F6931B', '#DE2516']}
                  style={styles.LinearGradientSignup1}>
                  <AntDesign name="plus" size={20} color="#FFFF" />
                </LinearGradient>
              </View>
            </ImageBackground>
          </View>
        </View>

        {/* ==========Form Start========== */}

        {/* ==========Full Name Row========== */}

        <View style={styles.fullNameRowView}>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#696969"
            autoCapitalize="none"
            style={styles.TextInputfullNameRow}
            onChangeText={(text) => _OnChangeText(text, 'fullName')}
          />
          <AntDesign
            name="user"
            size={14}
            color="#C0C0C0"
            style={{
              alignItems: 'flex-end',
              height: 15.87,
              // width: 13.34,
            }}
          />
        </View>

        {/* ======Code & Phone Row====== */}

        {/* <View style={styles.CodePhoneRowView}>
    
        </View> */}

        {/* ==========Email Row==========   */}

        <View style={styles.emailView}>
          <TextInput
            placeholder="Email or phone"
            placeholderTextColor="#696969"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.TextInputemail}
            onChangeText={(text) => _OnChangeText(text, 'email')}
          />
          <View style={styles.emailIconView}>
            <Fontisto
              name="email"
              // size={14}
              color="#C0C0C0"
              style={styles.IconStyleemail}
            />
          </View>
        </View>

        {/* ==========Password Row==========   */}

        <View style={styles.passwordView}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#696969"
            keyboardType="default"
            autoCapitalize="none"
            secureTextEntry={eye == false ? false : true}

            style={styles.TextInputpassword}
            onChangeText={(text) => _OnChangeText(text, 'password')}
          />
          <View style={styles.passwordIconView}>
          <TouchableOpacity onPress={() => toggleEye()}>
              <Icon
                name={eye == false ? 'eye' : 'eye-with-line'}
                type="Entypo"
                // color="#C0C0C0"
                // size={19}
                style={styles.passwordIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
        {/* </View> */}

        {/* ========Already Have An Account======== */}

        <View style={styles.AlreadyAccountView}>
          <Text style={styles.AlreadyAccountText}>
            Already have an Account?
          </Text>
          <TouchableOpacity onPress={() => loginPage()}>
            <Text style={styles.LoginText}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* ========Sign Up Button======== */}

        <LinearGradient
          colors={['#F6931B', '#DE2516']}
          style={styles.LinearGradientSignupButton}>
          <Button
            title="Sign Up"
            loading={props.isLoading}
            // onPress={() => _Signup()}
            onPress={() => SgnUpFntn()}
            buttonStyle={{backgroundColor: 'transparent'}}
          />
        </LinearGradient>

        <AlertPopup
          visible={visible}
          toggleVisible={() => setVisible(!visible)}
          popupText={state.popupText}
          onConfirm={() => {
            setVisible(false);
            // deletePaymentCard();
            // props.navigation.navigate('thankyou');
            // alert('Deleted')
          }}
        />
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

mapStateToProp = (state) => ({
  isLoading: state.AuthReducer.isLoading,
});
mapDispatchToProps = {
  _Signup: AuthAction.Signup,
  // loginAction: AuthAction.Login,
};
export default connect(mapStateToProp, mapDispatchToProps)(App);
