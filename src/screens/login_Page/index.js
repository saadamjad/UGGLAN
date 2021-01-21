import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-elements';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';

import Globalinputs from '../../components/inputfields';
import styles from './styles';
import {connect} from 'react-redux';
import {AuthAction} from '../../store/actions';
import AlertPopup from '../../components/popup_for_alerts';
import {Icon} from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

const App = (props) => {
  const [state, setState] = useState({
    email: '',
    password: '',
    popupText: '',
  });
  const [visible, setVisible] = useState(false);
  const [eye, setEye] = useState(true);

  const toggleEye = () => {
    setEye(!eye);
    // console.log('EYE ', eye);
  };

  const _CheckValidation = () => {
    // let email = state.phone;

    if (state.email == '' || state.password == '') {
      setVisible(!visible);
      // alert('kindly fill inputs correctly');
      state.popupText = 'Kindly fill all fields Correctly';
    } else {
      // alert('good')
      _Login();
    }
  };
  const _Login = () => {
    let data = {
      email: state.email.toLocaleLowerCase(),
      password: state.password,
    };

    console.log('login data', data);
    props.loginAction(data, props.navigation);
  };
 

  const signupPage = () => {
    props.navigation.navigate('signup');
  };

  const newPassword = () => {
    props.navigation.navigate('newpassword');
  };
  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
     
      style={styles.ImageBackgroundLogin}
      >
      <SafeAreaView style={styles.mainView}>
        <ScrollView>
        <View style={styles.loginView}>
          <Text style={styles.loginText}>Login</Text>
        </View>
        {/* <Globalinputs/> */}

        {/* ======Form Start====== */}

        <View style={styles.widthView}>
          {/* ==========Phone Number========== */}

          <View style={styles.phoneView}>
            <TextInput
              placeholder="email or phone"
              placeholderTextColor="#696969"
              autoCapitalize="none"
              // keyboardType="numeric"
              style={styles.phoneTextInput}
              onChangeText={(text) =>
                setState({
                  ...state,
                  email: text,
                })
              }
            />
            <Fontisto
              name="phone"
              // size={14}
              color="#C0C0C0"
              style={styles.phoneIcon}
            />
          </View>

          {/* ==========Password========== */}

          <View style={styles.passwordView}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#696969"
              keyboardType="default"
              secureTextEntry={eye == false ? false : true}
              autoCapitalize="none"
              // maxLength={8}
              style={styles.passwordTextInput}
             
              onChangeText={(text) =>
                setState({
                  ...state,
                  password: text,
                })
              }
            />
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

          {/* ========Forgot Password======== */}

          <View style={styles.forgotView}>
            <TouchableOpacity onPress={() => newPassword()}>
              <Text style={styles.forgotText}>Forgot Password ?</Text>
            </TouchableOpacity>
          </View>

          {/* ========Dont Have An Account======== */}

          <View style={styles.dontView}>
            <Text style={styles.dontText}>Dont have an Account?</Text>
            <TouchableOpacity onPress={() => signupPage()}>
              <Text style={{color: '#C0C0C0', paddingLeft: 5, height: 19}}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>

          {/* ========Login Button======== */}

          <LinearGradient
            colors={['#F6931B', '#DE2516']}
            style={styles.loginLG}>
            <Button
              title="Login"
              loading={props.isLoading}
              onPress={() => _CheckValidation()}
              buttonStyle={{backgroundColor: 'transparent'}}
            />
          </LinearGradient>
          <AlertPopup
            visible={visible}
            toggleVisible={() => setVisible(!visible)}
            popupText={state.popupText}
            onConfirm={() => {
              setVisible(false);
            
            }}
          />
        </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

mapStateToProps = (state) => ({
  isLoading: state.AuthReducer.isLoading,
  token: state.AuthReducer.token,
});
mapDispatchToProps = {
  loginAction: AuthAction.Login,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
