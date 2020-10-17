import React, {useRef, useState} from 'react';
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
import {set} from 'react-native-reanimated';
const App = (props) => {
  const [state, setState] = useState({
    otpInputs: [
      {placeholder: '4', value: '', ref: ''},
      {placeholder: '2', value: '', ref: ''},
      {placeholder: '0', value: '', ref: ''},
      {placeholder: '3', value: '', ref: ''},
    ],
  });
  const otpfunction = () => {
    props.navigation.navigate('newpassword');
  };

  const getValueOtp = async () => {
    let {otpInputs} = state;
    let value = '';
    await otpInputs.map((val) => (value = value + val.value));
    return value;
  };

  const onSetValueOtp = (old, val, i, nextRef, prevRef) => {
    let {otpInputs} = state;
    if (i == otpInputs.length - 1) {
      otpInputs[i].value = val;
      setState({...state, otpInputs});
    } else {
      if (old == '') {
        if (val && val.length > 0 && val.length < 2) {
          otpInputs[i].value = val;
          setState({...state, otpInputs});
          nextRef.focus();
        }
      } else {
        otpInputs[i].value = '';
        setState({...state, otpInputs});
        nextRef.focus();
        // prevRef.focus();
      }
    }
    if (old !== '' && val == '') {
      otpInputs[i].value = '';
      setState({...state, otpInputs});
      prevRef.focus();
    }
  };

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

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {state.otpInputs.map((val, i) => (
              <TextInput
                onKeyPress={({nativeEvent}) => {
                  if (nativeEvent.key === 'Backspace') {
                    state.otpInputs[
                      i == 0 ? state.otpInputs.length - 1 : i - 1
                    ].ref.focus();
                  }
                }}
                placeholder={val.placeholder}
                value={val.value}
                maxLength={1}
                onFocus={() => {
                  if (state.value !== '') {
                    let {otpInputs} = state;
                    otpInputs[i].value = '';
                    setState({...state, otpInputs});
                  }
                }}
                ref={(input) => {
                  val.ref = input;
                }}
                onChangeText={(text) =>
                  onSetValueOtp(
                    val.value,
                    text,
                    i,
                    state.otpInputs[i == state.otpInputs.length - 1 ? 0 : i + 1]
                      .ref,
                    state.otpInputs[i == 0 ? state.otpInputs.length - 1 : i - 1]
                      .ref,
                  )
                }
                placeholderTextColor="#696969"
                style={{
                  width: 50,
                  color: '#000000',
                  textAlign: 'center',
                  height: 50,
                  fontSize: 20,
                  backgroundColor: '#FFFFFF',
                  marginRight: 10,
                  borderWidth: 0.5,
                  borderColor: '#696969',
                  borderRadius: 10,
                }}
              />
            ))}
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
