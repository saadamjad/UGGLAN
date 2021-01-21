import React, {useEffect, useRef, useState} from 'react';
import {Button} from 'react-native-elements';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  Keyboard,
  TextInput,
  Image,
  processColor,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AlertPopup from '../../components/popup_for_alerts';


import {connect} from 'react-redux';
import {AuthAction} from '../../store/actions';
const App = (props) => {
  const [userData, setOtp] = useState({});
  const [newText, setNewText] = useState('');
  const [resendOtp, setresendOtp] = useState(false);
  const [visible, setVisible] = useState(false);

  const [state, setState] = useState({
    otpInputs: [
      {placeholder: '4', value: '', ref: ''},
      {placeholder: '2', value: '', ref: ''},
      {placeholder: '0', value: '', ref: ''},
      {placeholder: '3', value: '', ref: ''},
      {placeholder: '0', value: '', ref: ''},
      {placeholder: '3', value: '', ref: ''},
    ],
  
  });
  const otpfunction = () => {
    // props.navigation.navigate('newpassword');
    setresendOtp(!resendOtp);
    // props._Otp(number, props.navigation);
  };
  const Submit = async () => {
    let otp = await getValueOtp();
    console.log('data', userData);
    if (props.userData.otp == otp) {
      alert('Email Is Verified');
      // setVisible(!visible);

      // state.popupText = 'Email is Verfied';
      props.updateUser(
        {emailVerified: true},
        props.navigation,
        props.userData.token,
      );
      // props.navigation.navigate('login');
    } else {
      alert('Otp does not match');
      // setVisible(!visible);

      // state.popupText = 'Otp does not match ,enter valid otp';
    }
  };
  useEffect(() => {
    // props._Otp(newText, props.navigation);
    setOtp(props.userData);
  }, [props.userData]);

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
  const _TextBox = () => {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#C0C0C0',
            alignItems: 'center',
            width: '100%',
          }}>
          <TextInput
            keyboardType="email-address"
            placeholder="Full Name"
            placeholderTextColor="#696969"
            style={{
              color: 'white',
              width: '90%',
              height: 40,
            }}
            onChangeText={(text) => setNewText(text)}
          />
          <Ionicons
            name="person"
            // size={14}
            color="#C0C0C0"
            style={{
              alignItems: 'flex-end',
              height: 15.87,
              width: 13.34,
            }}
          />
        </View>
      </View>
    );
  };

  const _resendOtp = () => {
    console.log('sssss');
    if (!newText.length > 0) {
      alert('Kindly Enter Phone/Email Address');
    } else {
      props._Otp(newText, props.navigation);

      console.log('newText', newText);
    }
  };
  const _RenderOtp = () => {
    return state.otpInputs.map((val, i) => (
      <View
        style={{
          width: '15%',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'black',
          height: 70,
          fontSize: 26,
          backgroundColor: 'white',
          marginRight: 7,
          borderWidth: 1,
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
              state.otpInputs[i == state.otpInputs.length - 1 ? 0 : i + 1].ref,
              state.otpInputs[i == 0 ? state.otpInputs.length - 1 : 0].ref,
            );
          }}
          style={{
            fontSize: 18,
          }}
        />
      </View>
    ));
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

        <View style={{width: '100%', alignItems: 'center'}}>
          {/* ==========OTP Start========== */}
          <View
            style={{
              alignItems: 'center',
              borderWidth: 1,
              width: '100%',
            }}>
            <Text style={{color: '#FFFFFF', fontSize: 14, textAlign: 'center'}}>
              {console.log(
                'props.userData?.user?.phone',
                userData?.user?.phone,
              )}
              We have sent OTP to {'\n'}
              {userData?.user?.phone
                ? userData.user.phone
                : userData?.user?.email}
            </Text>
            <Text
              style={{color: '#FFFFFF', fontSize: 14, marginVertical: 10}}
              onPress={() => props.navigation.goBack()}>
              wrong number ? Click here to update
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
            {_RenderOtp()}
          </View>

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
              title={' Resend Otp'}
              onPress={() => _resendOtp()}
              buttonStyle={{
                backgroundColor: 'transparent',
              }}
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
        </View>
      
      </SafeAreaView>
    </ImageBackground>
  );
};

mapStateToProp = (state) => ({
  isLoading: state.AuthReducer.isLoading,
  userData: state.AuthReducer.userData,
});
mapDispatchToProps = {
  _Otp: AuthAction.Otp,
  updateUser: AuthAction.UpdateUser,
  // loginAction: AuthAction.Login,
};
export default connect(mapStateToProp, mapDispatchToProps)(App);
