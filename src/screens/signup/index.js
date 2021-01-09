import React, {useEffect, useState} from 'react';
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
import AlertPopup from '../../components/popup_for_alerts';
import {connect} from 'react-redux';
import {AuthAction} from '../../store/actions';
import {TouchableOpacity} from 'react-native-gesture-handler';
const App = (props) => {
  const [state, setState] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const [visible, setVisible] = useState(false);
  const [popupText, setPopupText] = useState(false);
  const SgnUpFntn = () => {
    console.log('sss', Number(state.email) ? 'number' : 'email');
    const data = Number(state.email)
      ? {
          phone: state.email,
          password: state.password,
        }
      : {
          email: state.email.toLocaleLowerCase(),
          password: state.password,
        };
    // console.log('signup',data)
    // props._Signup(data, props.navigation);
    _Signup();

    // props.navigation.navigate('otp');
  };

  const _OnChangeText = async (text, name) => {
    setState({...state, [name]: text});
  };

  const _Signup = () => {
    let key = Object.keys(state);
    console.log(key);
     let value= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(state.email) 


    let fieldIsMissing = false;
    let emptyField = '';
    key.map((item, i) => {
      console.log('item laoo beta ', item);
      if (state[item] == '') {
        fieldIsMissing = true;
      }
    });
    if (fieldIsMissing) {
      // console.log('THIS FIELD IS MISSING ', emptyField);
      state.popupText = 'Kindly fill all fields ';
      setVisible(!visible);
    }
    
    else if (!fieldIsMissing) {
      let data = state;
       if (!value){
        state.popupText = 'Email is not valid';
        setVisible(!visible);
      }
     else  if (state.password.length <= 8) {
        state.popupText = 'Password should be greater than 8';
        setVisible(!visible);
      }
     
      else {
         if (Number(state.email)) {
          console.log('number  ');
         
          data['phone'] = state.email;
          props._Signup(state, props.navigation);
  
        } 
        else if (!Number(state.email)) {
         
          console.log('string  ');
  
          data['email'] = state.email;
          props._Signup(state, props.navigation);
          
        }
        
      }
    

    }
  };

  const loginPage = () => {
    props.navigation.navigate('loginpage');
  };
  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <SafeAreaView
        style={{flex: 1, marginTop: 20, width: '90%', alignSelf: 'center'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Text style={{color: '#FFFFFF', fontSize: 25}}>Create Account</Text>
        </View>

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
            placeholderTextColor="#696969"
            autoCapitalize="none"
            style={{
              color: 'white',
              width: '90%',
              height: 40,
            }}
            onChangeText={(text) => _OnChangeText(text, 'fullName')}
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

        {/* ======Code & Phone Row====== */}

        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'center',
            width: '100%',
          }}>
          {/* <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: '#C0C0C0',
              width: '35%',
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Code"
              placeholderTextColor="#696969"
              keyboardType="number-pad"
              style={{
                color: 'white',
                width: '85%',
                height: 40,
              }}
              onChangeText={(text) => _OnChangeText(text, 'code')}
            />
            <View style={{width: '15%'}}>
              <AntDesign
                name="down"
                size={12}
                color="#C0C0C0"
                style={{
                  alignItems: 'flex-end',
                  // height: 5.21,
                  // width: 9.12,
                }}
              />
            </View>
          </View>
           */}
          {/* ====+==== */}
          {/* <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderColor: '#C0C0C0',
              width: '55%',
              marginHorizontal: 28,
              alignItems: 'center',
            }}>
            <TextInput
              placeholder="Phone"
              placeholderTextColor="#696969"
              keyboardType="numeric"
              style={{
                color: 'white',
                width: '85%',
                height: 40,
              }}
              onChangeText={(text) => _OnChangeText(text, 'phone')}
            />
            <Fontisto
              name="phone"
              // size={14}
              color="#C0C0C0"
              style={{
                alignItems: 'flex-end',
                height: 14.33,
                width: 14.33,
              }}
            />
          </View> */}
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
            placeholder="Email or phone"
            placeholderTextColor="#696969"
            keyboardType="email-address"
            autoCapitalize="none"
            style={{
              color: 'white',
              width: '90%',
              height: 40,
            }}
            onChangeText={(text) => _OnChangeText(text, 'email')}
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

        {/* ==========Password Row==========   */}

        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderColor: '#C0C0C0',
            alignItems: 'center',
            width: '100%',
          }}>
          <TextInput
            placeholder="Password"
            placeholderTextColor="#696969"
            keyboardType="default"
            autoCapitalize="none"
            //   secureTextEntry= {secure}
            style={{
              color: 'white',
              width: '90%',
              height: 40,
            }}
            onChangeText={(text) => _OnChangeText(text, 'password')}
          />
          <View style={{width: '15%'}}>
            <Fontisto
              name="key"
              // size={14}
              color="#C0C0C0"
              style={{
                alignItems: 'flex-end',
                height: 13.5,
                width: 13.5,
              }}
            />
          </View>
        </View>
        {/* </View> */}

        {/* ========Already Have An Account======== */}

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 40,
          }}>
          <Text style={{color: '#808080', fontSize: 12}}>
            Already have an Account?
          </Text>
          <TouchableOpacity onPress={() => loginPage()}>
            <Text style={{color: '#C0C0C0', paddingLeft: 5, height: 19}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

        {/* ========Sign Up Button======== */}

        <LinearGradient
          colors={['#F6931B', '#DE2516']}
          style={{
            width: 301,
            height: 42,
            alignSelf: 'center',
            marginVertical: 10,
            borderRadius: 3,
          }}>
          <Button
            title="Sign Up"
            loading={props.isLoading}
            // onPress={() => _Signup()}
            onPress={() => SgnUpFntn()}
            buttonStyle={{backgroundColor: 'transparent'}}
          />
        </LinearGradient>

        <AlertPopup
          visible={visible}
          toggleVisible={() => setVisible(!visible)}
          popupText={state.popupText}
          onConfirm={() => {
            setVisible(false);
            // deletePaymentCard();
            // props.navigation.navigate('thankyou');
            // alert('Deleted')
          }}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

mapStateToProp = (state) => ({
  isLoading: state.AuthReducer.isLoading,
});
mapDispatchToProps = {
  _Signup: AuthAction.Signup,
  // loginAction: AuthAction.Login,
};
export default connect(mapStateToProp, mapDispatchToProps)(App);
