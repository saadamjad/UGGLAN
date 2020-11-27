import React, {useRef, useState} from 'react';
import {Button} from 'react-native-elements';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Keyboard,
  TextInput,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {AuthAction} from '../../store/actions';
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
  const Submit = async () => {
    let otp = await getValueOtp();
    console.log('otp', otp);
    props._Otp(otp, props.navigation);
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
    if (i == state.otpInputs.length - 1) {
      if (val.length > 0) {
        // state.otpInputs[i].ref.;
        Keyboard.dismiss();
        Submit();
      }
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
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 15,
              marginVertical: 10,
              // borderWidth: 1,
            }}>
            {state.otpInputs.map((val, i) => (
              <View
                style={{
                  width: '15%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: 'black',
                  // textAlign: 'center',
                  height: 70,
                  fontSize: 26,
                  backgroundColor: 'white',
                  marginRight: 7,
                  borderWidth: 1,
                  // borderColor:
                  //   state.selectedIndex == i
                  //     ? theme.secondaryColor
                  //     : theme.borderColor,
                  // borderRadius: 1.5,
                  // marginVertical: 10,
                }}>
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
                      setState({...state, otpInputs, selectedIndex: i});
                    }
                  }}
                  ref={(input) => {
                    val.ref = input;
                  }}
                  keyboardType="number-pad"
                  onChangeText={(text) => {
                    // if (i == state.otpInputs.length - 1) {
                    //   if (text.length > 0) {
                    //     // called function
                    //   }
                    // }
                    onSetValueOtp(
                      val.value,
                      text,
                      i,
                      state.otpInputs[
                        i == state.otpInputs.length - 1 ? 0 : i + 1
                      ].ref,
                      state.otpInputs[i == 0 ? state.otpInputs.length - 1 : 0]
                        .ref,
                    );
                  }}
                  // placeholderTextColor={theme.textColorGray}
                  style={{
                    // color: theme.textColorBlack,
                    fontSize: 18,
                  }}
                />
              </View>
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
              loading={props.isLoading}
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

mapStateToProp = (state) => ({
  isLoading: state.AuthReducer.isLoading,
});
mapDispatchToProps = {
  _Otp: AuthAction.Otp,
  // loginAction: AuthAction.Login,
};
export default connect(mapStateToProp, mapDispatchToProps)(App);
