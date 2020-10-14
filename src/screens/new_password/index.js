import React from 'react';
import {Button} from 'react-native-elements';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';

const App = (props) => {
  const LginFntn = () => {
    props.navigation.navigate('allcontacts');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={styles.ImageBackground}>
      <SafeAreaView style={styles.SafeAreaView}>
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
              keyboardType="visible-password"
              //   secureTextEntry= {secure}
              style={styles.passwordTextInput}
            />
            <View style={{width: '15%'}}>
              <Fontisto
                name="key"
                // size={14}
                color="#C0C0C0"
                style={styles.passwordIcon}
              />
            </View>
          </View>

          {/* ==========Repeat Password========== */}

          <View style={styles.rpView}>
            <TextInput
              placeholder="Repeat Password"
              placeholderTextColor="#696969"
              keyboardType="visible-password"
              //   secureTextEntry= {secure}
              style={styles.rpTextInput}
            />
            <View style={{width: '15%'}}>
              <Fontisto
                name="key"
                // size={14}
                color="#C0C0C0"
                style={styles.rpIcon}
              />
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
      </SafeAreaView>
    </ImageBackground>
  );
};

export default App;
