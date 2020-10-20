import React from 'react';
import {TextInput,View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Fontisto'

function LoginSignupInputFeild(props) {
  return (
    // <TextInput
    //   placeholder={props.placeholderText ? props.placeholderText : 'enter text'}
    //   placeholderTextColor={props.placeholder ? props.placeholder : null}
    //   style={styles.textInput}
    //   onChangeText={(text) => props.onChangeText(text)}
    //   value={props.value}
    //   keyboardType={props.keyboardType}
    //   secureTextEntry={props.secureTextEntry ? props.secureTextEntry : false}
    // />
    <View style={styles.passwordView}>
    <TextInput
      placeholder="Password"
      placeholderTextColor="#696969"
      keyboardType="default"
        secureTextEntry
      style={styles.passwordTextInput}
    />
    <Icon
      name="key"
      // size={14}
      color="#C0C0C0"
      style={styles.passwordIcon}
    />
  </View>
  );
}

export default LoginSignupInputFeild;
