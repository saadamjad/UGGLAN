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
import AlertPopup from '../../components/popup_for_alerts';
import GlobalHeader from '../../components/header';
import styles from './styles'
import {State} from 'react-native-gesture-handler';
const App = (props) => {
  const [state, setState] = useState({
    labelValue: '',
    popupText: '',
  });

  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  var labels = [
    {label: 'Pay Online', value: 0},
    {label: 'Pay OnCash', value: 1},
  ];

  const Continue = () => {
    if (state.labelValue === 0) {
      // setVisible1(false);
      // alert('pay online')
      // props.navigation.navigate('payMasterCard');
      alert('Work in progress ')
    } else if (state.labelValue === 1) {
      // alert('pay on cash')
      // setVisible1(false);
      setVisible(true);
    } else  {
      // alert('plz select payment method')
      setVisible1(true);

      state.popupText = 'Select payment method';
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
    
      
      style={styles.ImageBackgroundPaymentMain}
      >
      <SafeAreaView  style={styles.SafeAreaViewPayment}>
        <GlobalHeader
          isBack={true}
          screenText={'Select Payment Method'}
          navigation={props.navigation}
        />

        <SafeAreaView
        
          
          style={styles.SafeAreaViewPaymentModels}
          >
          <PayModal
            visible={visible}
            onConfirm={() => {
              setVisible(false);
              props.navigation.navigate('thankyou');
            }}
            toggleVisible={() => setVisible(!visible)}
          />

          <AlertPopup
            visible={visible1}
            toggleVisible={() => setVisible1(!visible1)}
            popupText={state.popupText}
            onConfirm={() => {
              setVisible1(false);
              // deletePaymentCard();
              // props.navigation.navigate('thankyou');
              // alert('Deleted')
            }}
          />

          <View style={{marginVertical: 30}}>
            <RadioForm
              radio_props={labels}
              onPress={(value) => setState({labelValue: value})}
              initial={-1}
              buttonColor={'white'}
              buttonSize={8}
              buttonOuterSize={20}
              selectedButtonColor={'white'}
              selectedLabelColor={'white'}
              labelColor={'white'}
            />

            {/* {console.log('lable value', state.labelValue)} */}
          </View>

          {/* ================Radio Button End================ */}

          {/* ========Button======== */}

          <LinearGradient
            colors={['#F6931B', '#DE2516']}
          
            
            style={styles.LinearGradientRadioButton}
            >
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
