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

const App = (props) => {
  const LginFntn = () => {
    // alert('Login Hoga');
    props.navigation.navigate('signup')
  };

  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <SafeAreaView style={{flex: 1, marginTop: 20}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Text style={{color: '#FFFFFF', fontSize: 25, height: 40}}>
            Login
          </Text>
        </View>

        {/* ======Form Start====== */}

        <View style={{width: '90%', alignSelf: 'center'}}>
          {/* ==========Phone Number========== */}

          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: '#C0C0C0',
              alignItems: 'center',
              width: '100%',
            }}>
            <TextInput
              placeholder="Phone number"
              placeholderTextColor="#696969"
              keyboardType="numeric"
              style={{color: 'white', width: '85%'}}
            />
            <View style={{width: '6%'}}></View>
            <Fontisto
              name="phone"
              // size={14}
              color="#C0C0C0"
              style={{alignItems: 'flex-end', width: 14.33, height: 14.33}}
            />
          </View>

          {/* ==========Password========== */}

          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: '#C0C0C0',
              alignItems: 'center',
              width: '100%',
            }}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#696969"
              keyboardType="visible-password"
              //   secureTextEntry= {secure}
              style={{color: 'white', width: '90%'}}
            />
            <View style={{width: '15%'}}>
              <Fontisto
                name="key"
                // size={14}
                color="#C0C0C0"
                style={{alignItems: 'flex-end', height: 13.5, width: 13.5}}
              />
            </View>
          </View>
          <View style={{alignItems: 'flex-end', marginVertical: 20}}>
            <Text style={{color: '#C0C0C0', fontSize: 12, height: 15}}>
              Forgot Password ?
            </Text>
          </View>

          {/* ========Dont Have An Account======== */}

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginVertical: 40,
            }}>
            <Text style={{color: '#808080', fontSize: 12}}>
              Dont have an Account?
            </Text>
            <Text style={{color: '#C0C0C0', paddingLeft: 5, height: 19}}>
              Sign Up
            </Text>
          </View>

          {/* ========Login Button======== */}

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
