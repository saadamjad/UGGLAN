import React from 'react';
import {Button} from 'react-native-elements';
import {View, Text, ImageBackground, SafeAreaView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';

const App = (props) => {
  const cardFunction = () => {
    props.navigation.navigate('addNewCard');
  };
  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <SafeAreaView style={styles.mainView}>
        <View style={styles.rowView}>
          {/* ==========Image========== */}

          <View style={styles.imageMainView}>
            <View style={styles.imageView}>
              <Image
                source={require('../../assets/images/1.jpg')}
                style={styles.imageStyle}
              />
            </View>
          </View>

          {/* ==========Title & Card:========== */}

          <View
            style={{
              flex: 1,
            }}>
            <View style={{marginVertical: 10}}>
              <Text style={{color: '#FFFFFF'}}>Abdul Samad</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../../assets/images/mastercard.png')}
                style={styles.mcImageStyle}
              />

              <Text style={styles.textStyle}>Master card</Text>
            </View>
          </View>

          {/* ==========Remove Image Button========== */}

          <View style={styles.removeImageView}>
            <Image
              source={require('../../assets/images/remove.png')}
              style={styles.removeImageStyle}
            />
          </View>
        </View>

        {/* ==========Button========== */}

        <LinearGradient colors={['#F6931B', '#DE2516']} style={styles.LGButton}>
          <Button
            title="Add new card"
            onPress={() => cardFunction()}
            buttonStyle={{backgroundColor: 'transparent'}}
          />
        </LinearGradient>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default App;
