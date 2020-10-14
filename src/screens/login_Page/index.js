import React from 'react';
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
import styles from './styles';

const App = (props) => {
  const LginFntn = () => {
    // alert('Login Hoga');
    props.navigation.navigate('signup');
  };

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

        {/* ======Form Start====== */}

        <View style={styles.widthView}>
          {/* ==========Phone Number========== */}

          <View style={styles.phoneView}>
            <TextInput
              placeholder="Phone number"
              placeholderTextColor="#696969"
              keyboardType="numeric"
              style={styles.phoneTextInput}
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
              keyboardType="visible-password"
              //   secureTextEntry= {secure}
              style={styles.passwordTextInput}
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
              onPress={() => LginFntn()}
              buttonStyle={{backgroundColor: 'transparent'}}
            />
          </LinearGradient>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default App;
