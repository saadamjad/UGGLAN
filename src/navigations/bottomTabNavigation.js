import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

export default ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;
  console.log('BHAIYAA', focusedOptions);
  return (
    <LinearGradient
      style={{
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
      colors={['#F6931B', '#DE2516']}>
      {[
        {
          name: 'Home',
          icon: (
            <Icon
              name="home"
              type="AntDesign"
              style={{
                fontSize: 25,
                color: focusedOptions.tabBarLabel == 'Home' ? 'black' : 'white',
              }}
            />
          ),
        },
        {
          name: 'Call',
          icon: (
            <Icon
              name="phone"
              type="FontAwesome"
              style={{
                fontSize: 25,
                color: focusedOptions.tabBarLabel == 'Call' ? 'black' : 'white',
              }}
            />
          ),
        },
        {
          name: '',
          icon: (
            <Image
              style={{width: 80, height: 80, marginTop: -40}}
              source={require('../assets/icons/siren2.png')}
            />
          ),
        },
        {
          name: 'Live Location',
          icon: (
            <Icon
              name="share"
              type="Entypo"
              style={{
                fontSize: 25,
                color:
                  focusedOptions.tabBarLabel == 'Live Location'
                    ? 'black'
                    : 'white',
              }}
            />
          ),
        },
        {
          name: 'Timer',
          icon: (
            <Icon
              name="timer"
              type="MaterialIcons"
              style={{
                fontSize: 25,
                color:
                  focusedOptions.tabBarLabel == 'Timer' ? 'black' : 'white',
              }}
            />
          ),
        },
      ].map((val) => (
        <View
          style={{
            height: '100%',
            width: '20%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            onPress={() => {
              const event = navigation.emit({
                type: 'tabPress',
                target: val.name,
                canPreventDefault: true,
              });
              if (!event.defaultPrevented) navigation.navigate(val.name);
            }}
            style={{
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {val.icon}
            <Text
              style={{
                color:
                  focusedOptions.tabBarLabel == val.name ? 'black' : 'white',
                fontSize: 14,
              }}>
              {val.name.length <= 6
                ? val.name
                : val.name.substring(0, 6).concat('...')}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
    </LinearGradient>
  );
};
