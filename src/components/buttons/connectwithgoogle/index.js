/** @format */

import * as React from 'react';
import {Button} from 'react-native-elements';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

function GoogleConnect(props) {
  return (
    <Button
      icon={
        <AntDesign
          name="googleplus"
          size={25}
          color="white"
          style={{marginRight: 15}}
        />
      }
      title="Connect with Google"
      buttonStyle={styles.buttonStyle}
      containerStyle={styles.containerStyle}
      titleStyle={styles.buttonText}
      onPress={props.onPress}
    />
  );
}
export default GoogleConnect;
