import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {View, Text, ImageBackground, SafeAreaView} from 'react-native';
// import {Picker} from '@react-native-community/picker';
import DropDownPicker from 'react-native-dropdown-picker';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'native-base';

const App = () => {
  const [state, setState] = useState({country: ''});
  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <SafeAreaView style={{flex: 1, marginTop: 20}}>
        <View style={{width: '90%', alignSelf: 'center'}}>
          <View
            style={{
              alignItems: 'center',
              height: '50%',
              justifyContent: 'flex-end',
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 16,
                fontWeight: 'bold',
                letterSpacing: 1,
              }}>
              Please Select Language
            </Text>
          </View>
          {/* ============================================================== */}
          {/* <View
            style={{
              borderWidth: 0.5,
              borderColor: '#F6931B',
              borderRadius: 5,
              width: 300,
              alignSelf: 'center',
              marginVertical: 20,
            }}>
            <Picker
              //   selectedValue={}
              style={{height: 50, width: 200, color: '#FFFFFF'}}
              onValueChange={(itemValue, itemIndex) => ({language: itemValue})}>
              <Picker.Item label="Select Language" value="Select Language" />
              <Picker.Item label="English" value="Eng" />
              <Picker.Item label="Urdu" value="Urdu" />
              <Picker.Item label="Sindhi" value="Sindhi" />
              <Picker.Item label="Arabic" value="Arabic" />
              <Picker.Item label="Spanish" value="Spanish" />
              <Picker.Item label="Turkish" value="Turkish" />
            </Picker>
          </View> */}

          <DropDownPicker
            items={[
              {
                label: 'English',
                value: 'English',
                icon: () => <Icon name="flag" size={18} color="#900" />,
              },
              {
                label: 'French',
                value: 'French',
                icon: () => (
                  <Icon name="flag" type="AntDesign" size={18} color="#900" />
                ),
              },
            ]}
            defaultValue={state.country}
            containerStyle={{height: 40}}
            style={{backgroundColor: '#fafafa'}}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownStyle={{backgroundColor: '#fafafa'}}
            onChangeItem={(item) => setState({...state, country: item.value})}
          />

          {/* ========================================================== */}

          <View
            style={{
              flex: 1,
              justifyContent: 'flex-end',
              marginTop: 10,
            }}>
            <LinearGradient
              colors={['#F6931B', '#DE2516']}
              style={{
                alignSelf: 'center',
                borderRadius: 3,
              }}>
              <Button
                title="Continue"
                onPress={() => function2()}
                buttonStyle={{
                  backgroundColor: 'transparent',
                  height: 40,
                  width: 301,
                }}
              />
            </LinearGradient>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default App;
