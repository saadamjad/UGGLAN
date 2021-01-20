import React from 'react';
import {Button} from 'react-native-elements';
import {View, Text, Image, SafeAreaView, Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const App = ({toggleVisible, visible, onConfirm,popupText}) => {
  const buttonArrays = [
    // {name: 'Confirm', func: () => onConfirm()},
    {name: 'OK', color: 'white', func: () => toggleVisible()},
  ];
  return (
    <Modal transparent={true} animationType={'slide'} visible={visible}>
      <View style={{width: '90%', alignSelf: 'center', marginVertical: 100}}>
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
            <View style={{alignItems: 'center', marginVertical: 15}}>
              <Text
                style={{
                  color: '#D4D4D4',
                  fontSize: 12,
                  textAlign: 'center',
                  lineHeight: 20,
                  letterSpacing: 1,
                }}>
                {popupText ? popupText:'Kindly fill inputs correctly'}
              </Text>
            </View>
            {buttonArrays.map((val) => (
              <LinearGradient
                colors={val.color ? ['#fff', '#fff'] : ['#F6931B', '#DE2516']}
                style={{
                  alignSelf: 'center',
                  borderRadius: 3,
                  marginBottom: 10,
                }}>
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
