import React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

const App = (props) => {
  const callingfunction = () => {
    props.navigation.navigate('hiresomeone');
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#000000',
      }}>
      <View style={{width: '80%', alignSelf: 'center'}}>
        <View
          style={{
            height: '80%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              marginBottom: 20,
              borderWidth: 0.5,
              borderColor: '#707070',
              height: 113,
              width: 113,
              borderRadius: 100,
              overflow: 'hidden',
              shadowColor: '#48186CC4',
              // shadowColor: '#fff',
              shadowOffset: {
                width: 0,
                height: 12,
              },
              shadowOpacity: 0.58,
              shadowRadius: 16.0,

              elevation: 24,
            }}>
            <Image
              source={require('../../assets/images/1.jpg')}
              style={{
                height: '100%',
                width: '100%',
              }}
            />
          </View>
          <View>
            <Text style={{fontSize: 20, color: '#FFFFFF'}}>Abdul Samad</Text>
          </View>
          <View>
            <Text style={{fontSize: 13, color: '#CCCCCC', marginTop: 5}}>
              calling...
            </Text>
          </View>
        </View>
        <View
          style={{
            height: '20%',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <View style={{flexDirection: 'row', width: '100%'}}>
            <View style={{width: '40%'}}>
              <TouchableOpacity
                onPress={() => props.navigation.navigate('chat')}>
                <LinearGradient
                  colors={['#F6931B', '#DE2516']}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderWidth: 0.5,
                    borderColor: '#707070',
                    backgroundColor: 'transparent',
                    height: 55,
                    width: 56,
                    borderRadius: 56,
                    overflow: 'hidden',
                  }}>
                  <Ionicons
                    name="chatbubble-ellipses"
                    size={19}
                    color="#C0C0C0"
                    style={{height: 19, width: 19}}
                  />
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View style={{width: '40%'}}>
              <LinearGradient
                colors={['#F6931B', '#DE2516']}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 0.5,
                  borderColor: '#707070',
                  backgroundColor: 'transparent',
                  height: 55,
                  width: 56,
                  borderRadius: 56,
                  overflow: 'hidden',
                }}>
                <Ionicons
                  name="videocam"
                  size={19}
                  color="#C0C0C0"
                  style={{height: 19, width: 19}}
                />
              </LinearGradient>
            </View>
            <View style={{width: '20%'}}>
              <TouchableOpacity
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 0.5,
                  borderColor: '#707070',
                  backgroundColor: '#FF6969',
                  height: 55,
                  width: 56,
                  borderRadius: 56,
                  overflow: 'hidden',
                }}
                onPress={() => callingfunction()}>
                <Fontisto
                  name="phone"
                  size={19}
                  color="#C0C0C0"
                  style={{height: 19, width: 19}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;
