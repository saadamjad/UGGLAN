import React from 'react';
import {View, Text, ImageBackground, SafeAreaView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import GlobalHeader from '../../components/header';
const App = (props) => {
  const shareFunction = () => {
    props.navigation.navigate('addPayment');
  };
  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <SafeAreaView style={{flex: 1}}>
        <GlobalHeader
          isBack={true}
          screenText={'Share UGGLAN'}
          navigation={props.navigation}
        />

        <SafeAreaView
          style={{
            flex: 1,
            marginTop: 20,
            width: '90%',
            alignSelf: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: '#707070',
              height: 40,
              marginVertical: 5,
            }}>
            <Text style={{color: '#FFFFFF', fontSize: 15, textAlign: 'center'}}>
              Share UGGLAN
            </Text>
          </View>
          {/* ==========Facebook========== */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: '#707070',
              width: '100%',
              height: 40,
              marginVertical: 5,
            }}>
            <View style={{width: '10%', marginLeft: 5}}>
              <Fontisto
                name="facebook"
                // size={14}
                color="#FFFFFF"
                style={{alignItems: 'center', width: 10.73, height: 20.03}}
              />
            </View>
            <View style={{marginBottom: 7, flex: 1}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 13,
                  // textAlign: 'center',
                }}>
                Facebook
              </Text>
            </View>
          </View>
          {/* ==========Twitter========== */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: '#707070',
              height: 40,
              marginVertical: 5,
            }}>
            <View style={{width: '10%', marginLeft: 5}}>
              <Fontisto
                name="twitter"
                // size={14}
                color="#FFFFFF"
                style={{alignItems: 'center', width: 22.01, height: 17.88}}
              />
            </View>
            <View style={{marginBottom: 7, flex: 1}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 13,
                }}>
                Twitter
              </Text>
            </View>
          </View>
          {/* ==========SMS========== */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: '#707070',
              height: 40,
              marginVertical: 5,
            }}>
            <View style={{width: '10%', marginLeft: 5}}>
              <MaterialIcons
                name="sms"
                // size={14}
                color="#FFFFFF"
                style={{alignItems: 'center', width: 17.88, height: 17.88}}
              />
            </View>
            <View style={{marginBottom: 7, flex: 1}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 13,
                }}>
                SMS
              </Text>
            </View>
          </View>
          {/* ==========Options========== */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: '#707070',
              height: 40,
              marginVertical: 5,
            }}>
            <View style={{width: '10%', marginLeft: 5}}>
              <SimpleLineIcons
                name="options"
                // size={14}
                color="#FFFFFF"
                style={{alignItems: 'center', width: 17.88, height: 17.88}}
              />
            </View>
            <View style={{marginBottom: 7, flex: 1}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 13,
                }}>
                More Options
              </Text>
            </View>
          </View>
          {/* ==========Contact Us========== */}
          <View
            style={{
              alignItems: 'center',
              marginTop: 35,
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: '#707070',
              height: 40,
              marginVertical: 5,
            }}>
            <Text style={{color: '#FFFFFF', fontSize: 15}}>Contact Us</Text>
          </View>

          {/* ==========Email========== */}
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: '#707070',
              height: 40,
              marginVertical: 5,
            }}
            onPress={() => shareFunction()}>
            <View style={{width: '10%', marginLeft: 5}}>
              <Zocial
                name="email"
                // size={14}
                color="#FFFFFF"
                style={{alignItems: 'center', width: 22.11, height: 15.31}}
              />
            </View>
            <View style={{marginBottom: 7, flex: 1}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 13,
                }}>
                Email Support
              </Text>
            </View>
          </TouchableOpacity>

          {/* ==========Tell us Story========== */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: '#707070',
              height: 40,
              marginVertical: 5,
            }}>
            <View style={{width: '10%', marginLeft: 5}}>
              <Fontisto
                name="heart"
                // size={14}
                color="#FFFFFF"
                style={{alignItems: 'center', width: 22.11, height: 15.31}}
              />
            </View>
            <View style={{marginBottom: 7, flex: 1}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 13,
                }}>
                Tell us UGGLAN Story
              </Text>
            </View>
          </View>

          {/* ==========Rate the UGGLAN now========== */}
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: '#707070',
              height: 40,
              marginVertical: 5,
            }}>
            <View style={{width: '10%', marginLeft: 5}}>
              <MaterialIcons
                name="star-rate"
                // size={14}
                color="#FFFFFF"
                style={{alignItems: 'center', width: 20.11, height: 19.12}}
              />
            </View>
            <View style={{marginBottom: 7, flex: 1}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 13,
                }}>
                Rate the UGGLAN now
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default App;
