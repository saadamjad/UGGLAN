import React from 'react';
import {Button} from 'react-native-elements';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = (props) => {
  const Save = () => {
    props.navigation.navigate('selectPaymentMethod');
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
          width: '90%',
          marginTop: 50,
          alignSelf: 'center',
        }}>
        {/* ==========Name On Card========== */}
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#C0C0C0',
            width: '100%',
            marginVertical: 10,
          }}>
          <Text style={{color: '#FFFFFF', fontSize: 15}}>Name on Card</Text>
          <TextInput
            placeholder="Abdul Samad"
            keyboardType="name-phone-pad"
            placeholderTextColor="#696969"
            style={{color: 'white', fontSize: 13}}
          />
        </View>

        {/* ========Card no:========== */}
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#C0C0C0',
            width: '100%',
            marginVertical: 10,
          }}>
          <Text style={{color: '#FFFFFF', fontSize: 15}}>Card Number</Text>
          <TextInput
            placeholder="4025 8303 4000 2867"
            placeholderTextColor="#696969"
            keyboardType="numeric"
            style={{color: 'white', fontSize: 13}}
          />
        </View>

        {/* ======Expiry Date & CVV Row====== */}

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            marginVertical: 10,
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#C0C0C0',
              width: '55%',
            }}>
            <Text style={{color: '#FFFFFF', fontSize: 15}}>Expiry Date</Text>
            <TextInput
              placeholder="04/25"
              placeholderTextColor="#696969"
              keyboardType="number-pad"
              style={{color: 'white', fontSize: 13}}
            />
          </View>

          {/* ====+==== */}

          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#C0C0C0',
              width: '35%',
              marginHorizontal: 28,
            }}>
            <Text style={{color: '#FFFFFF', fontSize: 15}}>CVV</Text>
            <TextInput
              placeholder="021"
              placeholderTextColor="#696969"
              keyboardType="numeric"
              style={{color: 'white', fontSize: 13}}
            />
          </View>
        </View>
        {/* ==========Buttons========== */}
        <LinearGradient
          colors={['#F6931B', '#DE2516']}
          style={{
            width: 280,
            height: 37,
            alignSelf: 'center',
            marginVertical: 10,
            marginTop: 50,
            borderRadius: 3,
          }}>
          <Button
            title="Save"
            onPress={() => Save()}
            buttonStyle={{backgroundColor: 'transparent'}}
          />
        </LinearGradient>
        <View
          style={{
            width: 280,
            height: 50,
            alignSelf: 'center',
            borderRadius: 3,
          }}>
          <Button
            title="Cancel"
            onPress={() => Cancel()}
            titleStyle={{
              color: '#727272',
            }}
            buttonStyle={{backgroundColor: '#FFFFFF'}}
          />
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default App;
