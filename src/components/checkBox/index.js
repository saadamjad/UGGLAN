import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import styles from './styles'

const CheckBox = ({mark, setMark}) => {
  return (
    <TouchableOpacity
      onPress={() => setMark(!mark)}
     
      
      style={styles.TouchableOpacityOfCheckBox}
      >
      {mark && (
        <Icon
        
          style={styles.CheckIcon}
          type="AntDesign"
          name="check"
        />
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;
