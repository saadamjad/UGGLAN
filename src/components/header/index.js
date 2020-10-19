import React, {Component} from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import RightDrawer from '../rightSideDrawer';
const GlobalHeader = (props) => {
  return (
    <LinearGradient
      colors={
        props.isBack
          ? props.bg
            ? ['#F6931B', '#DE2516']
            : ['transparent', 'transparent']
          : ['#F6931B', '#DE2516']
      }
      style={{
        elevation: 0,
        borderBottomWidth: 0,
        flexDirection: 'row',
        // borderWidth: 1,
        backgroundColor: '',
        borderColor: 'red',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      {props.isBack ? (
        <TouchableOpacity
          onPress={() => props.navigation.goBack()}
          style={{
            width: '95%',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon
            style={{color: 'white', fontSize: 17}}
            name="left"
            type="AntDesign"
          />
          <Text style={{color: 'white', marginLeft: 5, fontSize: 16}}>
            {props.screenText}
          </Text>
        </TouchableOpacity>
      ) : (
        <>
          <TouchableOpacity
            onPress={() => props.navigation.toggleDrawer()}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: -15,
              // alignItems: 'center',
            }}>
            <Icon
              style={{color: 'white', fontSize: 32}}
              name="menu"
              type="MaterialIcons"
            />
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
              UGGLAN
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => props.toggleDrawer()}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Icon style={{color: 'white'}} name="users" type="FontAwesome5" />
          </TouchableOpacity>
        </>
      )}
    </LinearGradient>
  );
};
export default GlobalHeader;
