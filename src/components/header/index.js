import React, {Component} from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {Header, Body, Left, Right} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
export default class GlobalHeader extends Component {
  state = {
    selectLocationValue: '',
    pickerItem: [
      {
        time: 'Brighton',
      },
      {
        time: 'Eastbourne',
      },
      {
        time: 'South Croydon',
      },
    ],
  };
  render() {
    return (
      <View
        style={{
          elevation: 0,
          borderBottomWidth: 0,
          flexDirection: 'row',
          // borderWidth: 1,
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : 'transparent',
          borderColor: 'red',
          height: this.props.headerHeight ? this.props.headerHeight : 50,
        }}>
        <View
          style={{
            borderWidth: 0,
            height: '100%',
            width: '40%',
            alignItems: 'center',
            // backgroundColor: 'green',
            justifyContent: 'center',
          }}>
          {this.props.logo ? (
            <Image
              source={require('../../../assets/icons/Logo.png')}
              resizeMode="contain"
              style={{height: 160, width: 120}}
            />
          ) : null}
        </View>

        <View
          style={{
            flex: 1,
            borderColor: 'white',
            flexDirection: 'row',
            alignItems: 'center',
            // backgroundColor: 'blue',
            justifyContent: 'flex-end',
          }}>
          {this.props.showUserLocation ? (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-end',
              }}>
              <Entypo name="location-pin" color="white" size={16} />

              <Picker
                selectedValue={this.state.selectLocationValue}
                style={{
                  width: 130,
                  height: 50,
                  fontSize: 10,

                  backgroundColor: 'black',
                  color: 'white',
                }}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({
                    selectLocationValue: itemValue,
                  })
                }>
                {this.state.pickerItem.map((item, i) => {
                  return (
                    <Picker.Item
                      label={item.time}
                      value={item.time}
                      color="black"
                      fontSize={8}
                      backgroundColor="black"
                    />
                  );
                })}
              </Picker>
              <View
                style={{
                  position: 'absolute',
                  right: 7,
                }}>
                <AntDesign name="caretdown" color="white" size={10} />
              </View>
            </View>
          ) : null}
          {this.props.accountIcon ? (
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('myaccount')}
              style={{
                width: '16%',
                alignItems: 'flex-end',
                justifyContent: 'center',
                // backgroundColor: 'red',
                height: '100%',
              }}>
              <MaterialCommunityIcons
                name={'account-circle'}
                size={30}
                color={'white'}
              />
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    );
  }
}
