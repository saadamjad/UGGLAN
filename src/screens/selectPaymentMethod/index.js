import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {View, Text, SafeAreaView, ImageBackground} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PayModal from '../../components/pay_on_cash';
import GlobalHeader from '../../components/header';
const App = (props) => {
  const Continue = () => {
    setVisible(true);
    // props.navigation.navigate('payMasterCard');
  };

  const [isRadio1, setRadio1] = useState(false);
  const [isRadio2, setRadio2] = useState(false);
  const [visible, setVisible] = useState(false);

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
          marginTop: 20,
          alignSelf: 'center',
        }}>
        <PayModal
          visible={visible}
          onConfirm={() => {
            setVisible(false);
            props.navigation.navigate('payMasterCard');
          }}
          toggleVisible={() => setVisible(!visible)}
        />
        {/* <View style={{flexDirection: 'row'}}>
          <AntDesign
            name="left"
            size={19}
            color="#C0C0C0"
            style={{height: 19, width: 19}}
          />
          <Text style={{color: '#FFFFFF', marginLeft: 5}}>
            Select payment method
          </Text>
        </View> */}
        <GlobalHeader
          isBack={true}
          screenText={'Select payment method'}
          navigation={props.navigation}
        />

        {/* ============Radio Buttons Start============= */}

        <View style={{marginVertical: 30}}>
          <RadioButton>
            <RadioButtonInput
              obj={{
                label: 'Pay online',
              }}
              isSelected={isRadio1}
              onPress={(value) => {
                setRadio1(!isRadio1);
              }}
              borderWidth={1}
              buttonInnerColor={'white'}
              buttonOuterColor={'white'}
              buttonSize={12}
              buttonOuterSize={18}
              buttonStyle={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              buttonWrapStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 5,
                // flex: 1,
              }}
            />
            <RadioButtonLabel
              obj={{
                label: 'Pay online',
              }}
              onPress={(value) => {
                setRadio1(!isRadio1);
              }}
              labelHorizontal={true}
              labelStyle={{
                fontSize: 13,
                color: 'white',
              }}
            />
          </RadioButton>
          <RadioButton>
            <RadioButtonInput
              obj={{
                label: 'samad',
              }}
              isSelected={isRadio2}
              onPress={() => {
                setRadio2(!isRadio2);
              }}
              borderWidth={1}
              buttonInnerColor={'white'}
              buttonOuterColor={'white'}
              buttonSize={12}
              buttonOuterSize={18}
              buttonStyle={{
                justifyContent: 'center',
                alignItems: 'center',
              }}
              buttonWrapStyle={{
                justifyContent: 'center',
                alignItems: 'center',
                // marginVertical: 5,
                // flex: 1,
              }}
            />
            <RadioButtonLabel
              obj={{
                label: 'Pay on cash',
              }}
              labelHorizontal={true}
              onPress={(value) => {
                setRadio2(!isRadio2);
              }}
              labelStyle={{
                fontSize: 13,
                color: 'white',
              }}
            />
          </RadioButton>
        </View>

        {/* ================Radio Button End================ */}

        {/* ========Button======== */}

        <LinearGradient
          colors={['#F6931B', '#DE2516']}
          style={{
            width: 301,
            height: 40,
            alignSelf: 'center',
            marginVertical: 50,
            borderRadius: 3,
          }}>
          <Button
            title="Continue"
            onPress={() => Continue()}
            buttonStyle={{backgroundColor: 'transparent'}}
          />
        </LinearGradient>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default App;
