import React, {useState, useEffect} from 'react';
import {Button} from 'react-native-elements';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Platform,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import GlobalHeader from '../../components/header';
import AlertPopup from '../../components/popup_for_alerts';

import styles from './styles';
import {connect} from 'react-redux';
import {AddFriendContactsAction} from '../../store/actions';

const App = (props) => {
  const [state, setState] = useState({
    name: '',
    phone: '',
    popupText: '',
  });

  const [visible, setVisible] = useState(false);

  const addContacts = () => {
    if (state.name == '' || state.phone == '') {
        setVisible(!visible);
        state.popupText = 'Kindly fill fields';
    } else {
      _addContacts();
    }
  };
  const _addContacts = () => {
    // alert('done');
    let token =props.userData.token
    let data ={
        name:state.name,
        phone:state.phone
    }
    console.log('Data',data)
    props.AddFriendContacts(data,token,props.navigation)

  };

  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <SafeAreaView>
        <GlobalHeader
          isBack={true}
          screenText={'Add Contacts'}
          navigation={props.navigation}
        />
      </SafeAreaView>
      <SafeAreaView
        style={{flex: 1, marginTop: 20, width: '90%', alignSelf: 'center'}}>
        {/* ==========Form Start========== */}

        {/* ==========Full Name Row========== */}

        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#C0C0C0',
            alignItems: 'center',
            width: '100%',
          }}>
          <TextInput
            placeholder="Full Name"
            // value={state?.userData?.userName}
            placeholderTextColor="#696969"
            // editable={state.editable}
            style={{
              color: 'white',
              width: '90%',
              height: 40,
            }}
            // onChangeText={(text) =>
            //   setState({
            //     ...state,
            //     userData: {...state.userData, userName: text},
            //   })
            // }

            onChangeText={(text) =>
              setState({
                ...state,
                name: text,
              })
            }
          />
          <AntDesign
            name="user"
            size={14}
            color="#C0C0C0"
            style={{
              alignItems: 'flex-end',
              height: 15.87,
              // width: 13.34,
            }}
          />
        </View>
        {/* {console.log('userdata in profile console', props.userData)} */}
        {/* ====== Phone Row====== */}

        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#C0C0C0',
            alignItems: 'center',
            width: '100%',
          }}>
          <TextInput
            placeholder="Phone"
            // value={state?.userData?.phone}
            placeholderTextColor="#696969"
            keyboardType="numeric"
            // editable={state.editable}
            style={{
              color: 'white',
              width: '90%',
              height: 40,
            }}
            // onChangeText={(text) =>
            //   setState({
            //     ...state,
            //     userData: {...state.userData, phone: text},
            //   })
            // }
            onChangeText={(text) =>
              setState({
                ...state,
                phone: text,
              })
            }
          />
          <View style={{width: '15%'}}>
            <Fontisto
              name="phone"
              // size={14}
              color="#C0C0C0"
              style={{
                alignItems: 'flex-end',
                height: 13.31,
                width: 20.07,
              }}
            />
          </View>
        </View>

        {/* ==========Email Row==========   */}

        {/* <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#C0C0C0',
            alignItems: 'center',
            width: '100%',
          }}>
          <TextInput
            placeholder="Email"
            value={state?.userData?.email}
            placeholderTextColor="#696969"
            keyboardType="email-address"
            editable={state.editable}
            style={{
              color: 'white',
              width: '90%',
              height: 40,
            }}
            onChangeText={(text) =>
              setState({
                ...state,
                userData: {...state.userData, email: text},
              })
            }
          />
          <View style={{width: '15%'}}>
            <Fontisto
              name="email"
              // size={14}
              color="#C0C0C0"
              style={{
                alignItems: 'flex-end',
                height: 13.31,
                width: 20.07,
              }}
            />
          </View>
        </View> */}

        {/* </View> */}

        {/* ========Sign Up Button======== */}

        <LinearGradient
          colors={['#F6931B', '#DE2516']}
          style={{
            width: 301,
            marginTop: 40,
            height: 42,
            alignSelf: 'center',
            marginVertical: 10,
            borderRadius: 3,
          }}>
          <Button
            loading={props.isLoading}
            // title={state.editable ? 'Save' : 'Edit'}
            // onPress={() => {
            //   state.editable ? saveChanges() : editableText();
            // }}
            title={'Add'}
            onPress={() => {
              addContacts();
            }}
            buttonStyle={{backgroundColor: 'transparent'}}
          />
        </LinearGradient>
        <AlertPopup
            visible={visible}
            toggleVisible={() => setVisible(!visible)}
            popupText={state.popupText}
            onConfirm={() => {
              setVisible(false);
            
            }}
          />
      </SafeAreaView>
    </ImageBackground>
  );
};

mapStateToProps = (state) => ({
  userData: state.AuthReducer.userData,
});
mapDispatchToProps = {
    AddFriendContacts:AddFriendContactsAction.AddFriendContacts
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

