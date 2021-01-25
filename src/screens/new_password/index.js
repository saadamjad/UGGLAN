import React,{useState} from 'react';
import {Button} from 'react-native-elements';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {Icon} from 'native-base';

import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

const App = (props) => {

  const [eye1, setEye1] = useState(true);
  const [eye2, setEye2] = useState(true);

  const LginFntn = () => {
    props.navigation.navigate('loginpage');
  };


  const toggleEye1 = () => {
    setEye1(!eye1);
    // console.log('EYE ', eye);
  };
  const toggleEye2 = () => {
    setEye2(!eye2);
    // console.log('EYE ', eye);
  };
  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={styles.ImageBackground}>
      <SafeAreaView style={styles.SafeAreaView}>
        <ScrollView>
        {/* ========Title======== */}
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Create New Password</Text>
        </View>

        {/* ======Form Start====== */}

        <View style={styles.formView}>
          {/* ==========Password========== */}

          <View style={styles.passwordView}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="#696969"
              keyboardType="default"
              secureTextEntry={eye1 == false ? false : true}
              style={styles.passwordTextInput}
            />
            <View style={{width: '15%'}}>
            <TouchableOpacity onPress={() => toggleEye1()}>
              <Icon
                name={eye1 == false ? 'eye' : 'eye-with-line'}
                type="Entypo"
                // color="#C0C0C0"
                // size={19}
                style={styles.passwordIcon}
              />
            </TouchableOpacity>
            </View>
          </View>

          {/* ==========Repeat Password========== */}

          <View style={styles.rpView}>
            <TextInput
              placeholder="Repeat Password"
              placeholderTextColor="#696969"
              keyboardType="default"
              secureTextEntry={eye2 == false ? false : true}
              style={styles.rpTextInput}
            />
            <View style={{width: '15%'}}>
            <TouchableOpacity onPress={() => toggleEye2()}>
              <Icon
                name={eye2 == false ? 'eye' : 'eye-with-line'}
                type="Entypo"
                // color="#C0C0C0"
                // size={19}
                style={styles.passwordIcon}
              />
            </TouchableOpacity>
            </View>
          </View>

          {/* ========Continue Button======== */}

          <LinearGradient
            colors={['#F6931B', '#DE2516']}
            style={styles.buttonView}>
            <Button
              title="Continue"
              onPress={() => LginFntn()}
              buttonStyle={{backgroundColor: 'transparent'}}
            />
          </LinearGradient>
        </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default App;
