import {Icon} from 'native-base';
import React from 'react';
import {
  View,
  Text,
  Animated,
  Dimensions,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';

const DrawerItems = [
  {title: 'My Profile', name: 'Home', icon: 'user'},
  {
    title: 'Hire Prople',
    name: 'hiresomeone',
    type: 'FontAwesome',
    icon: 'users',
  },
  {
    title: 'Add Payment',
    name: 'addPayment',
    type: 'Entypo',
    icon: 'credit-card',
  },
  {
    title: 'Settings',
    name: 'settings',
    type: 'Fontisto',
    icon: 'player-settings',
  },
  {
    title: 'History',
    name: 'settings',
    type: 'FontAwesome5',
    icon: 'history',
  },

  {
    title: 'Share UGGLAN',
    name: 'settings',
    type: 'FontAwesome',
    icon: 'share',
  },
  {
    title: 'Help',
    name: 'settings',
    type: 'Entypo',
    icon: 'help-with-circle',
  },
  {
    title: 'Log Out',
    name: 'football',
    icon: 'logout',
  },
];

const DrawerContent = (props) => {
  let activeName = props?.state?.history[1]?.key?.split('-')[0];

  return (
    <ImageBackground
      source={require('../assets/images/bg_image.png')}
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View style={{flex: 1, paddingTop: 10, marginTop: 60}}>
        {DrawerItems.map((val) => (
          <TouchableOpacity
            onPress={() => props.navigation.navigate(val.name)}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
              marginTop: 10,
              borderWidth: 1,
              borderTopColor: 'rgba(255,255,255, 0.4)',
              paddingTop: 10,
              borderBottomColor: 'transparent',
            }}>
            <Icon
              style={{
                flex: 0.2,
                color: activeName == val.name ? props.activeTintColor : 'white',
              }}
              type={val.type ? val.type : 'AntDesign'}
              name={val.icon}
            />
            <Text
              style={{
                fontSize: 16,
                letterSpacing: 1,
                // fontWeight: "100",
                marginLeft: 20,
                flex: 0.8,
                color: activeName == val.name ? props.activeTintColor : 'white',
              }}>
              {val.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ImageBackground>
  );
};
export default DrawerContent;
