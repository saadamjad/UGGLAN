import React from 'react';
import {Button} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, ImageBackground, Image} from 'react-native';
import styles from './styles';

const App = (props) => {
  const function1 = () => {
    // alert('Ruko Zara');
    props.navigation.navigate('loginpage');
  };

  const function2 = () => {
    alert('Sabar Karo');
  };

  const function3 = () => {
    alert('Aagaya Tou Jawan Hoke');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <View style={styles.imageView}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.imageStyle}
        />
      </View>

      {/* ==========Buttons========== */}

      <LinearGradient colors={['#F6931B', '#DE2516']} style={styles.loginLG}>
        <Button
          title="Login"
          onPress={() => function1()}
          buttonStyle={{
            backgroundColor: 'transparent',
            height: '100%',
            width: '100%',
          }}
        />
      </LinearGradient>

      <LinearGradient colors={['#F6931B', '#DE2516']} style={styles.signUpLG}>
        <Button
          title="Sign Up"
          onPress={() => function2()}
          buttonStyle={{
            backgroundColor: 'transparent',
            height: '100%',
            width: '100%',
          }}
        />
      </LinearGradient>

      <View style={styles.facebookView}>
        <Button
          icon={
            <FontAwesome
              name="facebook"
              size={15}
              color="white"
              style={{marginRight: 10}}
            />
          }
          title="Connect with facebook"
          buttonStyle={{backgroundColor: '#3B5998', height: 40}}
          onPress={() => function3()}
        />
      </View>

      {/* ==========Footer========== */}

      <View style={styles.footerView}>
        <Text style={styles.footerText}>
          By Proceeding you Agree to our {'\n'} Terms & Conditions {'\n'} and
          comfrom you are atleast 13 year old.
        </Text>
      </View>
    </ImageBackground>
  );
};

export default App;
