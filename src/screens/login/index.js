import React from 'react';
import {Button} from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, ImageBackground, Image} from 'react-native';

const App = (props) => {
  const function1 = () => {
    // alert('Ruko Zara');
  props.navigation.navigate('loginpage')
    
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
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 50,
        }}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{height: 217, width: 217}}
        />
      </View>

      {/* ==========Buttons========== */}

      <LinearGradient
        colors={['#F6931B', '#DE2516']}
        style={{
          height: 40,
          width: 301,
          alignSelf: 'center',
          marginVertical: 5,
          marginTop: 50,
          borderRadius: 3,
        }}>
        <Button
          title="Login"
          onPress={() => function1()}
          buttonStyle={{backgroundColor: 'transparent'}}
        />
      </LinearGradient>

      <LinearGradient
        colors={['#F6931B', '#DE2516']}
        style={{
          height: 40,
          width: 301,
          alignSelf: 'center',
          marginVertical: 5,
          borderRadius: 3,
        }}>
        <Button
          title="Sign Up"
          onPress={() => function2()}
          buttonStyle={{
            backgroundColor: 'transparent',
          }}
        />
      </LinearGradient>

      <View
        style={{
          height: 40,
          width: 301,
          alignSelf: 'center',
          marginVertical: 5,
        }}>
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
          buttonStyle={{backgroundColor: '#3B5998', height: 40, }}
          onPress={() => function3()}
        />
      </View>

      {/* ==========Footer========== */}

      <View style={{justifyContent: 'center', marginVertical: 20}}>
        <Text
          style={{
            color: '#FFFFFF',
            fontSize: 12,
            textAlign: 'center',
            lineHeight: 20,
          }}>
          By Proceeding you Agree to our {'\n'} Terms & Conditions {'\n'} and
          comfrom you are atleast 13 year old.
        </Text>
      </View>
    </ImageBackground>
  );
};

export default App;
