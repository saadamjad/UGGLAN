import React, {useState, useEffect} from 'react';
import {Button} from 'react-native-elements';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
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
  });
  const AddPaymentMethod = () => {
    // props.navigation.goBack();
    _AddPaymentMethod();
  };

  const _AddPaymentMethod = () => {
    let token = props.userData.token;
    let addPaymentData = {
      cardName: state.cardName,
      cardNumber: state.cardNumber,
      expiry: state.expiry,
      cvv: state.cvv,
    };

    console.log('addpayment data', addPaymentData);

    props.AddPaymentMethodAction(addPaymentData, token, props.navigation);
  };

  const _OnChangeText = async (text, name) => {
    setState({...state, [name]: text});
    // console.log(text)
  };

  const Cancel =()=>{
        props.navigation.goBack();
  }
  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <SafeAreaView style={{flex: 1}}>
        <GlobalHeader
          screenText={'Pay online'}
          isBack={true}
          navigation={props.navigation}
        />
        <SafeAreaView style={styles.mainView}>
          {/* ==========Name On Card========== */}
          <View style={styles.NameView}>
            <Text style={styles.NameText}>Name on Card</Text>
            <TextInput
              placeholder="Card Name"
              keyboardType="name-phone-pad"
              placeholderTextColor="#696969"
              style={styles.NameTextInput}
              onChangeText={(text) => _OnChangeText(text, 'cardName')}
            />
          </View>

          {/* ========Card no:========== */}
          <View style={styles.CardView}>
            <Text style={styles.NameText}>Card Number</Text>
            <TextInput
              placeholder="4025 8303 4000 2867"
              placeholderTextColor="#696969"
              keyboardType="numeric"
              style={styles.CardTextInput}
              onChangeText={(text) => _OnChangeText(text, 'cardNumber')}
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
                onChangeText={(text) => _OnChangeText(text, 'expiry')}
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
                onChangeText={(text) => _OnChangeText(text, 'cvv')}
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
