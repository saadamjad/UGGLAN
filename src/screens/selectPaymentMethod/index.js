import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import PayModal from '../../components/pay_on_cash';
import GlobalHeader from '../../components/header';
import {State} from 'react-native-gesture-handler';
const App = (props) => {
  const Continue = () => {
    console.log('Radio 1', isRadio2);
    console.log('Radio 2', isRadio2);

    if (setRadio2) {
      setVisible(true);
    }
    // else if(setRadio1 ==false){

    //  props.navigation.navigate('payMasterCard');
    // }
    // setVisible(true);

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
      <SafeAreaView style={{flex: 1}}>
        <GlobalHeader
          isBack={true}
          screenText={'Select payment method'}
          navigation={props.navigation}
        />

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
              props.navigation.navigate('thankyou');
            }}
            toggleVisible={() => setVisible(!visible)}
          />

          <View style={{marginVertical: 30}}>
            <RadioButton>
              <RadioButtonInput
                obj={{
                  label: 'Pay online',
                }}
                isSelected={isRadio1}
                onPress={(value) => {
                  setRadio1(!isRadio1);
                  setRadio2(false);
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
                  setRadio2(false);
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
                  label: 'Pay on cash',
                }}
                isSelected={isRadio2}
                onPress={(text) => {
                  // console.log("hello",text)
                  setRadio2(!isRadio2);
                  setRadio1(false);
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
                  setRadio1(false);
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
      </SafeAreaView>
    </ImageBackground>
  );
};
export default App;
