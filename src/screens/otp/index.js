import React from 'react';
import {Button} from 'react-native-elements';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = (props) => {
  const otpfunction=()=>{
    props.navigation.navigate('newpassword')
  }
  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <SafeAreaView style={{flex: 1, marginTop: 20}}>
        <View style={{alignItems: 'center', marginVertical: 40}}>
          <Image
            source={require('../../assets/images/otp.png')}
            style={{height: 107.74, width: 173}}
          />
        </View>

        <View style={{width: '80%', alignSelf: 'center'}}>
          {/* ==========OTP Start========== */}

          <View style={{alignItems: 'center', marginVertical: 20}}>
            <Text style={{color: '#FFFFFF', fontSize: 14}}>
              We have sent OTP on your number
            </Text>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <TextInput
              placeholder="4"
              placeholderTextColor="#696969"
              style={{
                width: 50,
                color: '#000000',
                textAlign: 'center',
                fontSize: 20,
                backgroundColor: '#FFFFFF',
                marginRight: 10,
                borderWidth: 0.5,
                borderColor: '#696969',
                borderRadius: 10,
              }}
            />
            <TextInput
              placeholder="2"
              placeholderTextColor="#696969"
              style={{
                width: 50,
                color: '#000000',
                textAlign: 'center',
                fontSize: 20,
                backgroundColor: '#FFFFFF',
                marginRight: 10,
                borderWidth: 0.5,
                borderColor: '#696969',
                borderRadius: 10,
              }}
            />
            <TextInput
              placeholder="0"
              placeholderTextColor="#696969"
              style={{
                width: 50,
                color: '#000000',
                textAlign: 'center',
                fontSize: 20,
                backgroundColor: '#FFFFFF',
                marginRight: 10,
                borderWidth: 0.5,
                borderColor: '#696969',
                borderRadius: 10,
              }}
            />
            <TextInput
              placeholder=""
              placeholderTextColor="#696969"
              style={{
                width: 50,
                color: '#000000',
                textAlign: 'center',
                fontSize: 20,
                backgroundColor: '#FFFFFF',
                marginRight: 10,
                borderWidth: 0.5,
                borderColor: '#696969',
                borderRadius: 10,
              }}
            />
          </View>
          {/* ==========OTP End========== */}

          {/* ==========Resent It Row ========== */}

          <View
            style={{
              flexDirection: 'row',
              marginVertical: 20,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                fontSize: 12,
                color: '#B3B6B7',
              }}>
              Don't receive and OTP?
              {'    '}
              <Text
                style={{
                  fontSize: 12,
                  color: '#FBFCFC',
                }}>
                Resend it
              </Text>
            </Text>
          </View>

          {/* ==========Continue Button========== */}

          <LinearGradient
            colors={['#F6931B', '#DE2516']}
            style={{
              width: 301,
              height: 42,
              alignSelf: 'center',
              marginVertical: 10,
              borderRadius: 3,
            }}>
            <Button
              title="Continue"
              onPress={() => otpfunction()}
              buttonStyle={{
                backgroundColor: 'transparent',
              }}
            />
          </LinearGradient>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default App;
