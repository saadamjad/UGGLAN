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
import styles from './styles';
import {connect} from 'react-redux';
import {AuthAction, ProfileAction} from '../../store/actions';
import { ScrollView } from 'react-native-gesture-handler';

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
      style={styles.ImageBackgroundProfileMain}>
      <SafeAreaView>
        <GlobalHeader
          isBack={true}
          screenText={'My Profile'}
          navigation={props.navigation}
        />
      </SafeAreaView>
      <SafeAreaView style={styles.SafeAreaViewProfile}>
        <ScrollView>
        {/* ==========Profile Image========== */}

        <View style={styles.ProfileImageMain}>
          <View style={styles.ProfileImageView}>
            <ImageBackground
              source={require('../../assets/images/1.jpg')}
              style={styles.ImageBackgroundProfilePic}
              imageStyle={{borderRadius: 100}}>
              <View style={styles.PlusIconView}>
                <LinearGradient
                  colors={['#F6931B', '#DE2516']}
                  style={styles.PlusIconColor}>
                  <AntDesign name="plus" size={20} color="#FFFF" />
                </LinearGradient>
              </View>
            </ImageBackground>
          </View>
        </View>

        {/* ==========Form Start========== */}

        {/* ==========Full Name Row========== */}

        <View style={styles.FullNameView}>
          <TextInput
            placeholder="Full Name"
            value={state?.userData?.userName}
            placeholderTextColor="#696969"
            editable={state.editable}
            style={styles.TextInputFullName}
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
            style={styles.UserIcon}
          />
        </View>

        {/* ====== Phone Row====== */}

        <View style={styles.PhoneRowView}>
          <TextInput
            placeholder="Phone"
            value={state?.userData?.phone}
            placeholderTextColor="#696969"
            keyboardType="email-address"
            editable={state.editable}
            style={styles.TextInputPhoneRow}
            onChangeText={(text) =>
              setState({
                ...state,
                userData: {...state.userData, phone: text},
              })
            }
          />
          <View style={styles.PhoneIconView}>
            <Fontisto
              name="phone"
              // size={14}
              color="#C0C0C0"
              style={styles.PhoneIcon}
            />
          </View>
        </View>

        {/* ==========Email Row==========   */}

        <View style={styles.EmailRowView}>
          <TextInput
            placeholder="Email"
            value={state?.userData?.email}
            placeholderTextColor="#696969"
            keyboardType="email-address"
            editable={false}
            style={styles.TextInputEmailRow}
            onChangeText={(text) =>
              setState({
                ...state,
                userData: {...state.userData, email: text},
              })
            }
          />
          <View style={styles.EmailIconView}>
            <Fontisto
              name="email"
              // size={14}
              color="#C0C0C0"
              style={styles.EmailIcon}
            />
          </View>
        </View>

        {/* </View> */}

        {/* ========Sign Up Button======== */}

        <LinearGradient
          colors={['#F6931B', '#DE2516']}
          style={styles.LinearGradientButton}>
          <Button
            loading={props.isLoading}
            title={state.editable ? 'Save' : 'Edit'}
            onPress={() => {
              state.editable ? saveChanges() : editableText();
            }}
            buttonStyle={{backgroundColor: 'transparent'}}
          />
        </LinearGradient>
        </ScrollView>
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
