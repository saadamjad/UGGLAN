import React from 'react';
import {Button} from 'react-native-elements';
import {View, Text, Image, SafeAreaView, Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const App = ({toggleVisible, visible, onConfirm}) => {
  const buttonArrays = [
    {name: 'Confirm', func: () => onConfirm()},
    {name: 'Cancel', color: 'white', func: () => toggleVisible()},
  ];
  return (
    <Modal transparent={true} animationType={'slide'} visible={visible}>
      <View style={styles.PaymentMasterModelMainView}>
        <View style={styles.PaymentMasterModelMainView2}>
          <View style={styles.PaymentMasterModelMainView3}>
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
                  onPress={val.func}
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
    </Modal>
  );
};
export default App;
