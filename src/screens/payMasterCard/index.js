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
import {Icon} from 'native-base';
import CheckBox from '../../components/checkBox';
import {TouchableOpacity} from 'react-native-gesture-handler';
import PayCardModal from '../../components/pay_master_card_popup';
import GlobalHeader from '../../components/header';
const App = (props) => {
  const Pay = () => {
    setVisible(true);
    // props.navigation.navigate('thankyou');
  };
  const [visible, setVisible] = useState(false);
  const [mark, setMark] = useState(false);
  const [state, setState] = useState({card: 'master'});

  const CardView = (val) => {
    return (
      <View
        style={{
          width: '45%',
          borderWidth: 0.5,
          borderColor: '#707070',
          borderRadius: 3,
          backgroundColor:
            state.card == val.toLowerCase() ? '#F6931B' : 'transparent',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => setState({...state, card: val.toLowerCase()})}>
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
            {val} Card
          </Text>
        </TouchableOpacity>
      </View>
    );
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
          screenText={'Pay online'}
          isBack={true}
          navigation={props.navigation}
        />
      </SafeAreaView>
      <SafeAreaView
        style={{
          flex: 1,
          width: '90%',
          marginTop: 50,
          alignSelf: 'center',
        }}>
        {/* ============Box Row============ */}
        <PayCardModal
          visible={visible}
          toggleVisible={() => setVisible(!visible)}
          onConfirm={() => {
            setVisible(false);
            props.navigation.navigate('thankyou');
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            height: 60,
            width: '100%',
            marginBottom: 10,
            justifyContent: 'space-around',
          }}>
          {/* ====Box 1==== */}
          {['Master', 'Visa'].map((val) => CardView(val))}
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
            style={{color: 'white', fontSize: 13, height: 45}}
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
              style={{color: 'white', fontSize: 13, height: 45}}
            />
          </View>

          <View
            style={{
              justifyContent: 'center',
              width: '10%',
            }}>
            <Image
              source={
                state.card == 'master'
                  ? require('../../assets/images/masterCard2.png')
                  : require('../../assets/images/visa2.png')
              }
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
              style={{color: 'white', fontSize: 13, height: 45}}
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
              style={{color: 'white', fontSize: 13, height: 45}}
            />
          </View>
        </View>

        {/* ==========CheckBox========== */}

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 30}}>
          <CheckBox mark={mark} setMark={setMark} />
          <Text style={{color: '#FFFFFF', marginLeft: 8}}>
            Save this card details
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
