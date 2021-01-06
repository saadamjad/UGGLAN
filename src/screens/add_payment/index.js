import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-elements';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import GlobalHeader from '../../components/header';
import {connect} from 'react-redux';
import {AuthAction, PaymentMethodAction} from '../../store/actions';

const App = (props) => {
  const [state, setState] = useState({
    userPayments: [],
  });

  useEffect(() => {
    let data = props.userPayments;
    console.log('payment data', data)
    setState({...state, userPayments: data});
    getAllUserPayment();
  }, []);

  const getAllUserPayment = () => {
    _getAllUserPayment();
  };

  const _getAllUserPayment = () => {
    let token = props.userData.token;
    props.paymentAction(token);
  };
  const cardFunction = () => {
    props.navigation.navigate('addNewCard');
  };
  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <SafeAreaView style={{flex: 1}}>
        <GlobalHeader
          navigation={props.navigation}
          isBack={true}
          screenText={'Add payment'}
        />

        {/* {======All Payment Data Of User======} */}
<ScrollView showsVerticalScrollIndicator={false}>

  <SafeAreaView style={styles.mainView}>
    {
      props.isLoading === true ?
      (
        <View style={styles.indicator} >
        <ActivityIndicator size="large" color="#DE2516" />
        </View>
      )
      :
      (
        state.userPayments && state.userPayments.map((item,i)=>{
          return (
          <View style={styles.rowView}>
                  {/* ==========Image========== */}

                  <View style={styles.imageMainView}>
                    <View style={styles.imageView}>
                      <Image
                        source={require('../../assets/images/1.jpg')}
                        style={styles.imageStyle}
                      />
                    </View>
                  </View>

                  {/* ==========Title & Card:========== */}

                  <View
                    style={{
                      flex: 1,
                    }}>
                    <View style={{marginVertical: 10}}>
                      <Text style={{color: '#FFFFFF'}}>{item.cardName}</Text>
                   
                    </View>

                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={require('../../assets/images/mastercard.png')}
                        style={styles.mcImageStyle}
                      />

                      <Text style={styles.textStyle}>{item.cardType}</Text>
                    </View>
                  </View>

                  {/* ==========Remove Image Button========== */}

                  <View style={styles.removeImageView}>
                    <Image
                      source={require('../../assets/images/remove.png')}
                      style={styles.removeImageStyle}
                    />
                  </View>
                </View>

          )
        })
      )
    }

  </SafeAreaView>

</ScrollView>
      
 {/* ==========Button========== */}
        <LinearGradient colors={['#F6931B', '#DE2516']} style={styles.LGButton}>
          <Button
            title="Add new card"
         
            onPress={() => cardFunction()}
            buttonStyle={{backgroundColor: 'transparent'}}
          />
        </LinearGradient>
      </SafeAreaView>
    </ImageBackground>
  );
};

mapStateToProps = (state) => ({
  isLoading: state.PaymentMethodReducer.isLoading,
  userData: state.AuthReducer.userData,
  userPayments: state.PaymentMethodReducer.userPayments,
});
mapDispatchToProps = {
  paymentAction: PaymentMethodAction.PaymentMethod,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
