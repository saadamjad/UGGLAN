import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {useState} from 'react';
import Popup from '../components/popup';
import Notify from '../components/notification_sent';
export default ({state, descriptors, navigation}) => {
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  const navs = [
    {
      name: 'Home',
      icon: (
        <Icon
          name="home"
          type="AntDesign"
          style={{
            fontSize: 25,
            color:
              focusedOptions.tabBarLabel == 'Home'
                ? 'white'
                : 'rgba(255,255,255, 0.6)',
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
            color:
              focusedOptions.tabBarLabel == 'Call'
                ? 'white'
                : 'rgba(255,255,255, 0.6)',
          }}
        />
      ),
    },
    {
      name: '',
      icon: (
        <TouchableOpacity onPress={() => setVisible(!visible)}>
          <Image
            style={{width: 80, height: 80, marginTop: -40}}
            source={require('../assets/icons/siren2.png')}
          />
        </TouchableOpacity>
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
                ? 'white'
                : 'rgba(255,255,255, 0.6)',
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
              focusedOptions.tabBarLabel == 'Timer'
                ? 'white'
                : 'rgba(255,255,255, 0.6)',
          }}
        />
      ),
    },
  ];

  return (
    <LinearGradient
      style={{
        height: 65,
        flexDirection: 'row',
        justifyContent: 'space-around',
        overflow: 'visible',
      }}
      colors={['#F6931B', '#DE2516']}>
      {navs.map((val) => (
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
                  focusedOptions.tabBarLabel == val.name
                    ? 'white'
                    : 'rgba(255,255,255, 0.6)',
                fontSize: 14,
              }}>
              {val.name.length <= 6
                ? val.name
                : val.name.substring(0, 6).concat('...')}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
      <Notify visible={visible1} />
      <Popup
        visible={visible}
        notifySpecific={() => {
          setVisible(false);
          navigation.navigate('allcontacts');
        }}
        notify={() => {
          setVisible(false);
          setVisible1(true);
          setTimeout(() => {
            setVisible1(false);
          }, 3000);
        }}
        toggleVisible={() => setVisible(!visible)}
      />
    </LinearGradient>
  );
};
