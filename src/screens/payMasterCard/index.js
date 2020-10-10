import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';

const App = (props) => {
  const Pay = () => {
    props.navigation.navigate('thankyou');
  };
  const [isMark, setMark] = useState(false);
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
        {/* ============Box Row============ */}

        <View
          style={{
            flexDirection: 'row',
            height: 60,
            width: '100%',
            marginBottom: 10,
          }}>
          {/* ====Box 1==== */}
          <View
            style={{
              width: '45%',
              borderWidth: 0.5,
              borderColor: '#707070',
              borderRadius: 3,
              backgroundColor: '#F6931B',
              justifyContent: 'center',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/images/card1.png')}
                style={{height: 25.99, width: 28.87}}
              />
            </View>
            <Text style={{color: '#FFFFFF', fontSize: 12, textAlign: 'center'}}>
              Master Card
            </Text>
          </View>

          {/* ====Box 2==== */}
          <View
            style={{
              width: '45%',
              borderWidth: 0.5,
              borderColor: '#707070',
              borderRadius: 3,
              marginLeft: 25,
              justifyContent: 'center',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={require('../../assets/images/card2.png')}
                style={{height: 25.99, width: 28.87}}
              />
            </View>
            <Text style={{color: '#FFFFFF', fontSize: 12, textAlign: 'center'}}>
              Visa Card
            </Text>
          </View>
        </View>

        {/* ==========Name On Card========== */}
        <View
          style={{
            borderBottomWidth: 1,
            borderColor: '#C0C0C0',
            width: '100%',
            marginVertical: 10,
          }}>
          <Text style={{color: '#696969', fontSize: 15}}>Name on Card</Text>
          <TextInput
            placeholder="Abdul Samad"
            keyboardType="name-phone-pad"
            placeholderTextColor="#FFFFFF"
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
            flexDirection: 'row',
          }}>
          <View style={{width: '88%'}}>
            <Text style={{color: '#696969', fontSize: 15}}>Card Number</Text>
            <TextInput
              placeholder="4025 8303 4000 2867"
              placeholderTextColor="#FFFFFF"
              keyboardType="numeric"
              style={{color: 'white', fontSize: 13}}
            />
          </View>

          <View
            style={{
              justifyContent: 'center',
              width: '10%',
            }}>
            <Image
              source={require('../../assets/images/masterCard2.png')}
              style={{height: 25, width: 38}}
            />
          </View>
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
            <Text style={{color: '#696969', fontSize: 15}}>Expiry Date</Text>
            <TextInput
              placeholder="04 / 25"
              placeholderTextColor="#FFFFFF"
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
            <Text style={{color: '#696969', fontSize: 15}}>CVV</Text>
            <TextInput
              placeholder="021"
              placeholderTextColor="#FFFFFF"
              keyboardType="numeric"
              style={{color: 'white', fontSize: 13}}
            />
          </View>
        </View>

        {/* ==========CheckBox========== */}

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox
            disabled={false}
            value={isMark}
            onValueChange={(newValue) => setMark(newValue)}
            style={{color: 'red'}}
          />
          <Text style={{color: '#FFFFFF'}}>
            Save this card details: {isMark ? '👍' : '👎'}
          </Text>
        </View>

        {/* ==========Buttons========== */}

        <LinearGradient
          colors={['#F6931B', '#DE2516']}
          style={{
            alignSelf: 'center',
            marginVertical: 10,
            marginTop: 50,
            borderRadius: 3,
          }}>
          <Button
            title="Pay"
            onPress={() => Pay()}
            buttonStyle={{
              backgroundColor: 'transparent',
              width: 280,
              height: 42,
            }}
          />
        </LinearGradient>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default App;
