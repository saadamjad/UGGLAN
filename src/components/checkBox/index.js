import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

const CheckBox = ({mark, setMark}) => {
  return (
    <TouchableOpacity
      onPress={() => setMark(!mark)}
      style={{
        width: 20,
        height: 20,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {mark && (
        <Icon
          style={{color: 'white', fontSize: 16}}
          type="AntDesign"
          name="check"
        />
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;
