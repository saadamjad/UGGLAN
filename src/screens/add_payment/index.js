import React from 'react';
import {Button} from 'react-native-elements';
import {View, Text, ImageBackground, SafeAreaView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = (props) => {
  const cardFunction = () => {
    props.navigation.navigate('addNewCard');
  };
  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: 20,
          width: '90%',
          alignSelf: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            marginVertical: 10,
            borderBottomWidth: 0.5,
            borderColor: '#707070',
          }}>
          {/* ==========Image========== */}

          <View
            style={{
              width: '25%',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 20,
            }}>
            <View
              style={{
                borderWidth: 0.5,
                borderColor: '#F6931B',
                borderRadius: 100,
                overflow: 'hidden',
              }}>
              <Image
                source={require('../../assets/images/1.jpg')}
                style={{height: 60, width: 60, borderRadius: 60}}
              />
            </View>
          </View>

          {/* ==========Title & Card:========== */}

          <View
            style={{
              flex: 1,
            }}>
            <View style={{marginVertical: 10}}>
              <Text style={{color: '#FFFFFF'}}>Abdul Samad</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/images/mastercard.png')}
                style={{height: 12.79, width: 21.1, borderRadius: 60}}
              />

              <Text
                style={{color: '#B3B6B7', fontSize: 12, marginHorizontal: 3}}>
                Master card
              </Text>
            </View>
          </View>

          {/* ==========Send Image Button========== */}

          <View
            style={{
              width: '15%',
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View>
              <Image
                source={require('../../assets/images/remove.png')}
                style={{height: 20.94, width: 18.85}}
              />
            </View>
          </View>
        </View>

        {/* ==========Button========== */}

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
            title="Add new card"
            onPress={() => cardFunction()}
            buttonStyle={{backgroundColor: 'transparent'}}
          />
        </LinearGradient>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default App;
