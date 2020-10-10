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
    props.navigation.navigate('allcontacts');
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
            Create New Password
          </Text>
        </View>

        {/* ======Form Start====== */}

        <View style={{width: '90%', alignSelf: 'center'}}>
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
                style={{alignItems: 'flex-end', width: 13.5, height: 13.5}}
              />
            </View>
          </View>

          {/* ==========Repeat Password========== */}

          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: '#C0C0C0',
              alignItems: 'center',
              width: '100%',
              marginVertical: 10,
            }}>
            <TextInput
              placeholder="Repeat Password"
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
                style={{alignItems: 'flex-end', width: 13.5, height: 13.5}}
              />
            </View>
          </View>

          {/* ========Login Button======== */}

          <LinearGradient
            colors={['#F6931B', '#DE2516']}
            style={{
              width: 301,
              height: 42,
              alignSelf: 'center',
              marginVertical: 50,
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
