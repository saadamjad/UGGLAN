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
import styles from './styles'
import {connect} from 'react-redux';
import {AuthAction, ProfileAction} from '../../store/actions';

const App = (props) => {
  const [state, setState] = useState({
   
    userData: {},
    editable: false,
  });

  useEffect(() => {
    let data = props.userData?.user;
    setState({...state, userData: data});
  }, []);
  useEffect(() => {
    let data = props.userData?.user;
    setState({...state, userData: data});
  }, [props.userData]);
  const editableText = () => {
    setState({...state, editable: !state.editable});
  };
  const saveChanges = () => {
    // props.navigation.navigate('HomeScreen');

    _saveChanges();
  };

  const _saveChanges = () => {
    let updatedData = {
      userName: state.userData.userName,
      phone: state.userData.phone,
      email: state.userData.email,
    };

    // let id=state.userData._id
    // let token =props.userData.token
    console.log('updted data in profile', updatedData);
    // console.log('id', id)
    // console.log('token', token)

    props.updatedUserAction(
      updatedData,
      props.navigation,
      props.userData.token,
      () => setState({...state, editable: false}),
    );
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
          screenText={'My Profile'}
          navigation={props.navigation}
        />
      </SafeAreaView>
      <SafeAreaView
        style={{flex: 1, marginTop: 20, width: '90%', alignSelf: 'center'}}>
        {/* ==========Profile Image========== */}

        <View style={{alignItems: 'center'}}>
          <View
            style={{
              borderRadius: 100,
              borderWidth: 0.5,
              borderColor: 'white',
              marginBottom: 50,
            }}>
            <ImageBackground
              source={require('../../assets/images/1.jpg')}
              style={{height: 100, width: 100}}
              imageStyle={{borderRadius: 100}}>
              <View style={{position: 'absolute', bottom: -10}}>
                <LinearGradient
                  colors={['#F6931B', '#DE2516']}
                  style={{
                    marginLeft: 75,
                    marginBottom: 15,
                    borderRadius: 20,
                    overflow: 'hidden',
                  }}>
                  <AntDesign
                    name="plus"
                    size={20}
                    color="#FFFF"
                    style={
                      {
                        // marginLeft: 20,
                        // backgroundColor: 'white',
                      }
                    }
                  />
                </LinearGradient>
              </View>
            </ImageBackground>
          </View>
        </View>

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
            value={state?.userData?.userName}
            placeholderTextColor="#696969"
            editable={state.editable}
            style={{
              color: 'white',
              width: '90%',
              height: 40,
            }}
            onChangeText={(text) =>
              setState({
                ...state,
                userData: {...state.userData, userName: text},
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
            value={state?.userData?.phone}
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
                userData: {...state.userData, phone: text},
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

        <View
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
        </View>

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
            title={state.editable ? 'Save' : 'Edit'}
            onPress={() => {
              state.editable ? saveChanges() : editableText();
            }}
            buttonStyle={{backgroundColor: 'transparent'}}
          />
        </LinearGradient>
      </SafeAreaView>
    </ImageBackground>
  );
};

mapStateToProps = (state) => ({
  isLoading: state.AuthReducer.isLoading,
  userData: state.AuthReducer.userData,
});
mapDispatchToProps = {
  updatedUserAction: ProfileAction.SaveChanges,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
