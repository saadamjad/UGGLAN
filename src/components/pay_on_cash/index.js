import React from 'react';
import {Button} from 'react-native-elements';
import {View, Text, Image, SafeAreaView, Modal} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useLinkProps} from '@react-navigation/native';
const App = (props) => {
  const buttonArrays = [
    {name: 'Confirm', func: () => props.onConfirm()},
    {name: 'Cancel', color: 'white', func: () => props.toggleVisible()},
  ];
  return (
    // <SafeAreaView style={{backgroundColor: '#000000', flex: 1}}>
    <Modal animationType='slide' visible={props.visible} transparent={true}>
      {/* <View
        style={{
          width: '100%',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'transparent',
        }}> */}
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
              <View style={{alignItems: 'center', marginVertical: 15}}>
                <Text
                  style={{
                    color: '#D4D4D4',
                    fontSize: 12,
                    textAlign: 'center',
                    lineHeight: 20,
                    letterSpacing: 1,
                  }}>
                  Confirm you want to pay cash.?
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
