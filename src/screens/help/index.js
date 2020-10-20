import React from 'react';
import {View, Text, ImageBackground, Image, SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import GlobalHeader from '../../components/header';

const App = (props) => {
  const Show = () => {
    props.navigation.navigate('settings');
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
          screenText={'Help'}
          isBack={true}
          navigation={props.navigation}
        />
        </SafeAreaView>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: 50,
          width: '90%',
          alignSelf: 'center',
        }}>
        <View
          style={{
            width: '100%',
            height: '37%',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: 50,
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/images/setting.png')}
                style={{height: 40, width: 40.83}}
                resizeMode="center"
              />
            </View>
            <View style={{justifyContent: 'center', flex: 1}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 16,
                }}>
                Tutorial
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{color: '#FFFFFF', fontSize: 12, textAlign: 'justify'}}>
              View short Tutorial about the key functionality of UGGLAN.
            </Text>
          </View>
          <LinearGradient
            colors={['#F6931B', '#DE2516']}
            style={{
              alignSelf: 'center',
              marginVertical: 50,
              borderRadius: 3,
            }}>
            <Button
              title="Show Tutorial"
              onPress={() => Show()}
              buttonStyle={{
                backgroundColor: 'transparent',
                width: 275,
              }}
            />
          </LinearGradient>
        </View>

        {/* ==========2nd Image============ */}

        <View
          style={{
            width: '100%',
            height: '35%',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: 50,
                justifyContent: 'center',
              }}>
              <Image
                source={require('../../assets/images/faq.png')}
                style={{height: 40, width: 30}}
                resizeMode="center"
              />
            </View>
            <View style={{justifyContent: 'center', flex: 1}}>
              <Text
                style={{
                  color: '#FFFFFF',
                  fontSize: 16,
                }}>
                FAQs
              </Text>
            </View>
          </View>
          <View>
            <Text
              style={{color: '#FFFFFF', fontSize: 12, textAlign: 'justify'}}>
              List of frequently asked questions.
            </Text>
          </View>
          <LinearGradient
            colors={['#F6931B', '#DE2516']}
            style={{
              alignSelf: 'center',
              marginVertical: 50,
              borderRadius: 3,
            }}>
            <Button
              title="Show to FAQs list"
              onPress={() => Show()}
              buttonStyle={{
                backgroundColor: 'transparent',
                width: 275,
              }}
            />
          </LinearGradient>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default App;
