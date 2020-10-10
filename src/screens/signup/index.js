import React from 'react';
import {Button} from 'react-native-elements';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const App = (props) => {
  const SgnUpFntn = () => {
    props.navigation.navigate('otp')
  };

  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <SafeAreaView
        style={{flex: 1, marginTop: 20, width: '90%', alignSelf: 'center'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Text style={{color: '#FFFFFF', fontSize: 25}}>Create Account</Text>
        </View>

        {/* ==========Profile Image========== */}

        <View style={{alignItems: 'center', marginBottom: 50}}>
          <View
            style={{
              height: 100,
              width: 100,
              borderRadius: 100,
              borderWidth: 0.5,
              borderColor: 'white',
            }}>
            <ImageBackground
              source={require('../../assets/images/1.jpg')}
              style={{height: 100, width: 100}}
              imageStyle={{borderRadius: 100}}>
              <View style={{position: 'absolute', bottom: -10}}>
                <View style={{marginLeft: 55, marginBottom: 15}}>
                  <AntDesign
                    name="pluscircle"
                    size={22}
                    color="#F6931B"
                    style={{
                      marginLeft: 20,
                      backgroundColor: 'white',
                      borderRadius: 20,
                      overflow: 'hidden',
                    }}
                  />
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>

        {/* ==========Form Start========== */}

        {/* <View style={{width: '90%', alignSelf: 'center'}}> */}
        {/* ==========Full Name Row========== */}

        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#C0C0C0',
            alignItems: 'center',
            width: '100%',
          }}>
          <TextInput
            placeholder="Full Name"
            placeholderTextColor="#696969"
            style={{color: 'white', width: '85%'}}
          />
          <View style={{width: '6%'}}></View>
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

        {/* ======Code & Phone Row====== */}

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            width: '100%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: '#C0C0C0',
              width: '35%',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Code"
              placeholderTextColor="#696969"
              keyboardType="number-pad"
              style={{color: 'white', width: '85%'}}
            />
            <View style={{width: '15%'}}>
              <AntDesign
                name="down"
                size={12}
                color="#C0C0C0"
                style={{
                  alignItems: 'flex-end',
                  // height: 5.21,
                  // width: 9.12,
                }}
              />
            </View>
          </View>
          {/* ====+==== */}
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: '#C0C0C0',
              width: '55%',
              marginHorizontal: 28,
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Phone"
              placeholderTextColor="#696969"
              keyboardType="numeric"
              style={{color: 'white', width: '85%'}}
            />
            <Fontisto
              name="phone"
              // size={14}
              color="#C0C0C0"
              style={{
                alignItems: 'flex-end',
                height: 14.33,
                width: 14.33,
              }}
            />
          </View>
        </View>

        {/* ==========Email Row==========   */}

        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#C0C0C0',
            alignItems: 'center',
            width: '100%',
          }}>
          <TextInput
            placeholder="Email"
            placeholderTextColor="#696969"
            keyboardType="email-address"
            style={{color: 'white', width: '90%'}}
          />
          <View style={{width: '15%'}}>
            <Fontisto
              name="email"
              // size={14}
              color="#C0C0C0"
              style={{
                alignItems: 'flex-end',
                height: 13.31,
                width: 20.07,
              }}
            />
          </View>
        </View>

        {/* ==========Password Row==========   */}

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
              style={{
                alignItems: 'flex-end',
                height: 13.5,
                width: 13.5,
              }}
            />
          </View>
        </View>
        {/* </View> */}

        {/* ========Already Have An Account======== */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 40,
          }}>
          <Text style={{color: '#808080', fontSize: 12}}>
            Already have an Account?
          </Text>
          <Text style={{color: '#C0C0C0', paddingLeft: 5, height: 19}}>
            Login
          </Text>
        </View>

        {/* ========Sign Up Button======== */}

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
            title="Sign Up"
            onPress={() => SgnUpFntn()}
            buttonStyle={{backgroundColor: 'transparent'}}
          />
        </LinearGradient>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default App;
