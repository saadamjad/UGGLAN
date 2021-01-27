import React from 'react';
import {Button} from 'react-native-elements';
import {View, Text, Image, SafeAreaView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const App = () => {
  const buttonArrays = [{name: 'Confirm'}, {name: 'Cancel', color: 'white'}];
  return (
    <SafeAreaView style={styles.SafeAreaViewOfPaymentVisaMain}>
      <View style={styles.PaymentVisaModelMainView}>
        <View style={styles.PaymentVisaModelMainView2}>
          <View style={styles.PaymentVisaModelMainView3}>
            <View style={styles.NotifyTextView}>
              <Text style={styles.NotifyText}>Notify</Text>
            </View>
            <View style={styles.ConfirmTextView}>
              <Text style={styles.ConfirmText}>Confirm this Payment.?</Text>
            </View>
            {buttonArrays.map((val) => (
              <LinearGradient
                colors={val.color ? ['#fff', '#fff'] : ['#F6931B', '#DE2516']}
                style={styles.LinearGradientOfButton}>
                <Button
                  title={val.name}
                  titleStyle={{
                    color: val.color ? 'grey' : 'white',
                    fontSize: 13,
                  }}
                  // onPress={() => LginFntn()}
                  buttonStyle={{
                    backgroundColor: 'transparent',
                    width: 275,
                    height: 33,
                    fontSize: 12,
                  }}
                />
              </LinearGradient>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;
