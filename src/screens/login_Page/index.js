import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-elements';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Globalinputs from '../../components/inputfields';
import styles from './styles';
import {connect} from 'react-redux';
import {AuthAction} from '../../store/actions';

const App = (props) => {
  const [state, setState] = useState({
    email: 'moizyousuf24@gmail.com',
    password: '12345678',
  });

  const _CheckValidation = () => {
    let email = state.phone;

    if (email == '') {
      alert('kindly fill inputs correctly');
    } else {
      _Login();
    }
  };
  const _Login = () => {
    let data = {
      email: state.email,
      password: state.password,
    };
    props.loginAction(data, props.navigation);
  };
  // useEffect(()=>{

  // },[props.])

  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <SafeAreaView style={styles.mainView}>
        <View style={styles.loginView}>
          <Text style={styles.loginText}>Login</Text>
        </View>
        {/* <Globalinputs/> */}

        {/* ======Form Start====== */}

        <View style={styles.widthView}>
          {/* ==========Phone Number========== */}

          <View style={styles.phoneView}>
            <TextInput
              placeholder="email"
              placeholderTextColor="#696969"
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
              secureTextEntry
              style={styles.passwordTextInput}
              // onChangeText={(text) => setPassword(text)}
              onChangeText={(text) =>
                setState({
                  ...state,
                  password: text,
                })
              }
            />
            <Fontisto
              name="key"
              // size={14}
              color="#C0C0C0"
              style={styles.passwordIcon}
            />
          </View>

          {/* ========Forgot Password======== */}

          <View style={styles.forgotView}>
            <Text style={styles.forgotText}>Forgot Password ?</Text>
          </View>

          {/* ========Dont Have An Account======== */}

          <View style={styles.dontView}>
            <Text style={styles.dontText}>Dont have an Account?</Text>
            <Text style={styles.signupText}>Sign Up</Text>
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
          
        </View>
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
