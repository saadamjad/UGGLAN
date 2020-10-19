import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {Icon} from 'native-base';
const RightDrawer = (props) => {
  const contacts = [
    {name: 'Shagufta', number: '+91 123 7665'},
    {name: 'Ahmed', number: '+91 123 7665'},
    {name: 'Punjwani', number: '+91 123 7665'},
  ];
  return props.isVisible ? (
    <TouchableOpacity
      onPress={props.toggleDrawer}
      style={{
        position: 'absolute',
        zIndex: 12,
        height: '100%',
        bottom: 0,
        width: '100%',
        alignItems: 'flex-end',
        backgroundColor: 'transparent',
      }}>
      <Animatable.View
        animation={'slideInRight'}
        style={{
          height: '100%',
          width: '75%',
          zIndex: 20,
          backgroundColor: 'black',
        }}>
        <View
          style={{
            width: '100%',
            height: '10%',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              width: '80%',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 0.2,
              borderBottomColor: 'white',
              paddingBottom: 20,
            }}>
            <Text style={{color: 'white', fontSize: 18}}>
              My Safety Network
            </Text>
            <Icon name="plus" type="AntDesign" style={{color: 'white'}} />
          </View>
        </View>
        <View
          style={{
            height: '10%',
            width: '90%',
            justifyContent: 'center',
            alignItems: 'flex-start',
            alignSelf: 'flex-end',
          }}>
          <Text style={{color: 'white', fontSize: 16}}>Sent Invitations</Text>
        </View>
        <View
          style={{
            width: '90%',
            justifyContent: 'center',
            alignItems: 'flex-start',
            alignSelf: 'flex-end',
          }}>
          {contacts.map((val) => (
            <View style={{paddingBottom: 15}}>
              <Text style={{color: 'white', fontSize: 18}}>{val.name}</Text>
              <Text style={{color: 'grey', fontSize: 16, paddingTop: 8}}>
                {val.number}
              </Text>
            </View>
          ))}
        </View>
      </Animatable.View>
    </TouchableOpacity>
  ) : null;
};

export default RightDrawer;
