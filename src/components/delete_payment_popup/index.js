import React from 'react';
import {Button} from 'react-native-elements';
import {View, Text, Image, SafeAreaView, Modal} from 'react-native';
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient';

const App = ({toggleVisible, visible, onConfirm}) => {
  const buttonArrays = [
    {name: 'Confirm', func: () => onConfirm()},
    {name: 'Cancel', color: 'white', func: () => toggleVisible()},
  ];
  return (
    <Modal transparent={true} animationType={'slide'} visible={visible}>
      <View  style={styles.DeletePaymentModelMainView}>
        <View
         
          style={styles.DeletePaymentModelMainView2}
          
          >
          <View 
            style={styles.DeletePaymentModelMainView3}
          
          >
            <View  style={styles.NotifyTextView}>
              <Text
              style={styles.NotifyText}>
                Notify
              </Text>
            </View>
            <View style={styles.ConfirmTextView}>
              <Text
            
                style={styles.ConfirmText}
                >
                Confirm this deletion.?

              </Text>
            </View>
            {buttonArrays.map((val) => (
              <LinearGradient
                colors={val.color ? ['#fff', '#fff'] : ['#F6931B', '#DE2516']}
             
                
                style={styles.LinearGradientOfButton}
                >
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
