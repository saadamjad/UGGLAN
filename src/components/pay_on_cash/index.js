import React from 'react';
import {Button} from 'react-native-elements';
import {View, Text, Image, SafeAreaView, Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {useLinkProps} from '@react-navigation/native';
const App = (props) => {
  const buttonArrays = [
    {name: 'Confirm', func: () => props.onConfirm()},
    {name: 'Cancel', color: 'white', func: () => props.toggleVisible()},
  ];
  return (
    // <SafeAreaView style={{backgroundColor: '#000000', flex: 1}}>
    <Modal animationType="slide" visible={props.visible} transparent={true}>
      {/* <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}> */}
      <View style={styles.PaymentOnCashModelMainView}>
        <View style={styles.PaymentOnCashModelMainView2}>
          <View style={styles.PaymentOnCashModelMainView3}>
            <View style={styles.NotifyTextView}>
              <Text style={styles.NotifyText}>Notify</Text>
            </View>
            <View style={styles.ConfirmTextView}>
              <Text style={styles.ConfirmText}>
                Confirm you want to pay cash.?
              </Text>
            </View>
            {buttonArrays.map((val) => (
              <LinearGradient
                colors={val.color ? ['#fff', '#fff'] : ['#F6931B', '#DE2516']}
                style={styles.LinearGradientOfButton}>
                <Button
                  title={val.name}
                  onPress={() => val.func()}
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
      {/* </View> */}
      {/* // </SafeAreaView> */}
    </Modal>
  );
};
export default App;
