import {useLinkProps} from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, SafeAreaView, Modal} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const App = (props) => {
  return (
    <Modal transparent={true} animationType={'fade'} visible={props.visible}>
      <View style={{width: '90%', alignSelf: 'center', marginVertical: 50}}>
        <View
          style={{
            backgroundColor: '#3E3E3E',
            paddingVertical: 10,
            borderRadius: 3,
          }}>
          <View style={{width: '90%', alignSelf: 'center'}}>
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Text
                style={{color: '#FFFFFF', fontSize: 16, fontWeight: 'bold'}}>
                Notify
              </Text>
            </View>
            <View style={{alignItems: 'center', marginVertical: 10}}>
              <Feather
                name="check-circle"
                size={20}
                color="#C0C0C0"
                style={{color: '#FFFFFF'}}
              />
            </View>
            <View style={{alignItems: 'center', marginVertical: 15}}>
              <Text
                style={{
                  color: '#D4D4D4',
                  fontSize: 12,
                  textAlign: 'center',
                  lineHeight: 20,
                  letterSpacing: 1,
                }}>
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
