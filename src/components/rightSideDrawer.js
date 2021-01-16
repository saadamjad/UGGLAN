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
  const NewView = Animatable.createAnimatableComponent(TouchableOpacity);
  return props.isVisible ? (
    <TouchableOpacity
      activeOpacity={1}
      onPress={props.toggleDrawer}
      style={{
        position: 'absolute',
        zIndex: 12,
        height: '100%',
        bottom: 0,
        width: '100%',
        alignItems: 'flex-end',
      }}>
      <NewView
        onPress={() => {}}
        animation={'slideInRight'}
        activeOpacity={1}
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
            <TouchableOpacity onPress={()=>{props.navigation.navigate('addContacts')}}>
            <Icon name="plus" type="AntDesign" style={{color: 'white'}} />
            </TouchableOpacity>
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
              <TouchableOpacity>
                <Text style={{color: 'grey', fontSize: 16, paddingTop: 8}}>
                  {val.number}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </NewView>
    </TouchableOpacity>
  ) : null;
};

export default RightDrawer;


// 6ddbaa144f51f192a105cdef803eb556cf76b317