import {useLinkProps} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, SafeAreaView, Modal} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';

const App = (props) => {
  return (
    <Modal transparent={true} animationType={'fade'} visible={props.visible}>
      <View style={styles.SendNotificationModelMainView}>
        <View style={styles.SendNotificationModelMainView2}>
          <View style={styles.SendNotificationModelMainView3}>
            <View style={styles.NotifyTextView}>
              <Text style={styles.NotifyText}>Notify</Text>
            </View>
            <View style={styles.CheckCirclIconView}>
              <Feather
                name="check-circle"
                size={20}
                color="#C0C0C0"
                style={styles.CheckCirclIcon}
              />
            </View>
            <View style={styles.NotifyExtraTextView}>
              <Text style={styles.NotifyExtraText}>
                Emergency notification has been sent to your all contacts
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default App;
