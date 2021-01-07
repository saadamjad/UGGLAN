import React, {useState, useEffect} from 'react';
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
import styles from './styles';
import GlobalHeader from '../../components/header';
import {connect} from 'react-redux';
import {PaymentMethodAction} from '../../store/actions';
const App = (props) => {
  const [state, setState] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
    cardType: '',
    rongCardNumber: false,
  });
  
  const AddPaymentMethod = () => {
    if (state.rongCardNumber) {
      alert('Please enter a valid CardNumber');
     
    } else if (
      state.cardNumber == '' ||
      state.cardName == '' ||
      state.expiry == '' ||
      state.cvv == ''
    ) {
      alert('Please fill all fields');
    } else {
      _AddPaymentMethod();
    }
  };

  const _AddPaymentMethod = () => {
    let token = props.userData.token;

    let addPaymentData = {
      cardName: state.cardName,
      cardNumber: state.cardNumber,
      expiry: state.expiry,
      cvv: state.cvv,
      cardType: state.cardType,
    };

    console.log('addpayment data', addPaymentData);

    props.AddPaymentMethodAction(addPaymentData, token, props.navigation);
  };

  // {=========onChangeText For CardNumber Input====== }
  const _OnChangeTextCardNumber = async (text, name) => {
    let changeType = String(text);

    if (changeType.substring(0, 1) === '5') {
      setState({
        ...state,
        [name]: text,
        cardType: 'Master Card',
        rongCardNumber: false,
      });
    } else if (changeType.substring(0, 1) === '4') {
      setState({
        ...state,
        [name]: text,
        cardType: 'Visa Card',
        rongCardNumber: false,
      });
    } else if (
      changeType.substring(0, 2) === '34' ||
      changeType.substring(0, 2) === '37'
    ) {
      // if (
      //   changeType.substring(1, 2) === '4' ||
      //   changeType.substring(1, 2) === '7'
      // ) {
      //   setState({...state, [name]: text, cardType: 'American Express'});
      // }
      setState({
        ...state,
        [name]: text,
        cardType: 'American Express',
        rongCardNumber: false,
      });
    } else {
      setState({...state, [name]: text, cardType: '', rongCardNumber: true});
    }
  };
  // {=========onChangeText For Other Input====== }
  const _OnChangeTextOthers = async (text, name) => {
    setState({...state, [name]: text});
  };

  const Cancel = () => {
    props.navigation.goBack();
  };
  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={{
        height: '100%',
        width: '100%',
      }}>
      {/* {console.log(' check krnay  lye', state.cardNumber)} */}
      <SafeAreaView style={{flex: 1}}>
        <GlobalHeader
          screenText={'Pay online'}
          isBack={true}
          navigation={props.navigation}
        />
        <SafeAreaView style={styles.mainView}>
          {/* ========Card no:========== */}

          <View
            style={[
              styles.rowView,
              {
                // {====Change Border Color If cardNumber Is rong =====}
                borderColor:
                  state.cardNumber.length > 0
                    ? state.rongCardNumber == true
                      ? 'red'
                      : 'white'
                    : 'white',
              },
            ]}>
            <View
              style={{
                flex: 1,
              }}>
              <View style={styles.CardView}>
                <Text style={styles.NameText}>Card Number</Text>
                <TextInput
                  maxLength={16}
                  placeholder="4025 8303 4000 2867"
                  placeholderTextColor="#696969"
                  keyboardType="numeric"
                  style={[styles.CardTextInput]}
                  onChangeText={(text) =>
                    _OnChangeTextCardNumber(text, 'cardNumber')
                  }
                />
              </View>
            </View>

            {/* ==========Card Type Images========== */}

            <View style={styles.cardTypeImageView}>
              {state.cardType === 'Master Card' ? (
                <Image
                  source={require('../../assets/images/mastercard.png')}
                  style={styles.cardTypeImageStyle}
                />
              ) : null}
              {state.cardType === 'Visa Card' ? (
                <Image
                  source={require('../../assets/images/visa.png')}
                  style={styles.cardTypeImageStyle}
                />
              ) : null}
              {state.cardType === 'American Express' ? (
                <Image
                  source={require('../../assets/images/americanexp.png')}
                  style={styles.cardTypeImageStyle}
                />
              ) : null}

              {/* <Image
                source={require('../../assets/images/mastercard.png')}
                style={styles.cardTypeImageStyle}
              />
              <Image
                source={require('../../assets/images/visa.png')}
                style={styles.cardTypeImageStyle}
              />
              <Image
                source={require('../../assets/images/americanexp.png')}
                style={styles.cardTypeImageStyle}
              /> */}
            </View>
          </View>

          {/* 
           {====Alert Text When Enter Rong Card Number =====} */}
          <Text style={{color: 'red', fontSize: 12}}>
            {state.cardNumber.length > 0
              ? state.rongCardNumber == true
                ? 'you enter a rong card number'
                : ''
              : ''}
          </Text>

          {/* ==========Name On Card========== */}
          <View style={styles.NameView}>
            <Text style={styles.NameText}>Name on Card</Text>
            <TextInput
              placeholder="Card Name"
              keyboardType="name-phone-pad"
              placeholderTextColor="#696969"
              style={styles.NameTextInput}
              onChangeText={(text) => _OnChangeTextOthers(text, 'cardName')}
            />
          </View>

          {/* ======Expiry Date & CVV Row====== */}

          <View style={styles.RowView}>
            <View style={styles.DateView}>
              <Text style={styles.DateText}>Expiry Date</Text>
              <TextInput
                placeholder="04/25"
                placeholderTextColor="#696969"
                keyboardType="number-pad"
                style={styles.DateTextInput}
                onChangeText={(text) => _OnChangeTextOthers(text, 'expiry')}
              />
            </View>

            {/* ====+==== */}

            <View style={styles.CVVView}>
              <Text style={styles.CVVText}>CVV</Text>
              <TextInput
                placeholder="021"
                placeholderTextColor="#696969"
                keyboardType="numeric"
                style={styles.CVVTextInput}
                onChangeText={(text) => _OnChangeTextOthers(text, 'cvv')}
              />
            </View>
          </View>
          {/* ==========Buttons========== */}
          <LinearGradient colors={['#F6931B', '#DE2516']} style={styles.SaveLG}>
            <Button
              title="Save"
              loading={props.isLoading}
              onPress={() => AddPaymentMethod()}
              buttonStyle={{backgroundColor: 'transparent'}}
            />
          </LinearGradient>
          <View style={styles.CancelView}>
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
      </SafeAreaView>
    </ImageBackground>
  );
};

mapStateToProps = (state) => ({
  isLoading: state.PaymentMethodReducer.isLoading,
  userData: state.AuthReducer.userData,
});
mapDispatchToProps = {
  AddPaymentMethodAction: PaymentMethodAction.AddPaymentMethod,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
