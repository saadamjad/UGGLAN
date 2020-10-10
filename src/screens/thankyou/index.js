import React from 'react';
import {Button} from 'react-native-elements';
import {View, Text, SafeAreaView, ImageBackground, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'

const App = (props) => {
  const Track=()=> {
    props.navigation.navigate('help')
  }
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
          width: '90%',
          marginVertical: 20,
          alignSelf: 'center',
        }}>
        <View style={{flexDirection: 'row'}}>
          <AntDesign
            name="left"
            size={19}
            color="#C0C0C0"
            style={{height: 19, width: 19}}
          />
          {/* <Text style={{color: '#FFFFFF', marginLeft: 5}}>
            Select payment method
          </Text> */}
        </View>
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Text style={{color: '#FFFFFF', fontSize: 17}}>Thank You</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Image
            source={require('../../assets/images/check.png')}
            style={{height: 83.8, width: 83.8}}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#FFFFFF', fontSize: 13}}>
            Now contact the Abdul Samad
          </Text>
        </View>

        <View>
          <LinearGradient
            colors={['#F6931B', '#DE2516']}
            style={{
              alignSelf: 'center',
              marginVertical: 10,
              marginTop: 50,
              borderRadius: 3,
            }}>
            <Button
              title="Track Person"
              onPress={() => Track()}
              buttonStyle={{
                backgroundColor: 'transparent',
                width: 290,
                height: 42,
              }}
            />
          </LinearGradient>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default App;
