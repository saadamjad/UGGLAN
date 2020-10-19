import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import GlobalHeader from '../../components/header';
import styles from './styles';

const App = (props) => {
  const sendfunction = () => {
    props.navigation.navigate('call');
  };
  const [Array, Setarray] = useState([
    {
      image: require('../../assets/images/1.jpg'),
      title: 'Abdul Samad',
      mobileNumber: '+92 3103844268',
    },
    {
      image: require('../../assets/images/2.jpg'),
      title: 'Logan',
      mobileNumber: '+92 3103844261',
    },
    {
      image: require('../../assets/images/3.jpg'),
      title: 'Babu Bhai',
      mobileNumber: '+92 3103844262',
    },
    {
      image: require('../../assets/images/4.jpg'),
      title: 'Samad Soomro',
      mobileNumber: '+92 3103844263',
    },
    {
      image: require('../../assets/images/5.jpg'),
      title: 'Jungle Book',
      mobileNumber: '+92 3103844264',
    },
    {
      image: require('../../assets/images/6.jpg'),
      title: 'Jet Ski',
      mobileNumber: '+92 3103844265',
    },
    {
      image: require('../../assets/images/7.jpg'),
      title: 'Desi Munda',
      mobileNumber: '+92 3103844266',
    },
  ]);

  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={styles.imageBackground}>
      <SafeAreaView style={styles.SafeAreaView}>
        <GlobalHeader navigation={props.navigation} isBack={true} screenText={"All Contacts"} />
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* ==========Using Map========== */}

          {Array.map((item, i) => {
            console.log('loop', i),
              console.log(
                'item==',
                item.image,
                'title',
                item.title,
                'mobileNumber',
                item.mobileNumber,
              );
            return (
              /* ==========Parrent Box========== */

              <View key={i} style={styles.parrentBoxView}>
                {/* ==========Image========== */}

                <View style={styles.imageMainView}>
                  <View style={styles.imageView}>
                    <Image source={item.image} style={styles.imageStyle} />
                  </View>
                </View>

                {/* ==========Title & Mobile no:========== */}

                <View style={{flex: 1}}>
                  <View style={{marginVertical: 10}}>
                    <Text style={styles.titleText}>{item.title}</Text>
                  </View>

                  <View>
                    <Text style={styles.mobileText}>{item.mobileNumber}</Text>
                  </View>
                </View>

                {/* ==========Send Image Button========== */}

                <View style={styles.sendView}>
                  <TouchableOpacity onPress={() => sendfunction()}>
                    <Image
                      source={require('../../assets/images/send.png')}
                      style={styles.sendImageStyle}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default App;
