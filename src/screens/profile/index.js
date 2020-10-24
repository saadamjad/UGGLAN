import React from 'react';
import {Button} from 'react-native-elements';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Platform,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import GlobalHeader from '../../components/header';

const App = (props) => {
  const SgnUpFntn = () => {
    props.navigation.navigate('HomeScreen');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <SafeAreaView>
        <GlobalHeader
          isBack={true}
          screenText={'My Profile'}
          navigation={props.navigation}
        />
      </SafeAreaView>
      <SafeAreaView
        style={{flex: 1, marginTop: 20, width: '90%', alignSelf: 'center'}}>
       

        {/* ==========Profile Image========== */}

        <View style={{alignItems: 'center'}}>
          <View
            style={{
              borderRadius: 100,
              borderWidth: 0.5,
              borderColor: 'white',
              marginBottom: 50,
            }}>
            <ImageBackground
              source={require('../../assets/images/1.jpg')}
              style={{height: 100, width: 100}}
              imageStyle={{borderRadius: 100}}>
              <View style={{position: 'absolute', bottom: -10}}>
                <LinearGradient
                  colors={['#F6931B', '#DE2516']}
                  style={{
                    marginLeft: 75,
                    marginBottom: 15,
                    borderRadius: 20,
                    overflow: 'hidden',
                  }}>
                  <AntDesign
                    name="plus"
                    size={20}
                    color="#FFFF"
                    style={
                      {
                        // marginLeft: 20,
                        // backgroundColor: 'white',
                      }
                    }
                  />
                </LinearGradient>
              </View>
            </ImageBackground>
          </View>
        </View>

        {/* ==========Form Start========== */}

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
            style={{
              color: 'white',
              width: '90%',
              height: 40,
            }}
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
              style={{
                color: 'white',
                width: '85%',
                height: 40,
              }}
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
              style={{
                color: 'white',
                width: '85%',
                height: 40,
              }}
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
            style={{
              color: 'white',
              width: '90%',
              height: 40,
            }}
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
            keyboardType="default"
            //   secureTextEntry= {secure}
            style={{
              color: 'white',
              width: '90%',
              height: 40,
            }}
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

     

        {/* ========Sign Up Button======== */}

        <LinearGradient
          colors={['#F6931B', '#DE2516']}
          style={{
            width: 301,
            marginTop: 40,
            height: 42,
            alignSelf: 'center',
            marginVertical: 10,
            borderRadius: 3,
          }}>
          <Button
            title="Save"
            onPress={() => SgnUpFntn()}
            buttonStyle={{backgroundColor: 'transparent'}}
          />
        </LinearGradient>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default App;