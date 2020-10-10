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
      style={{
        height: '100%',
        width: '100%',
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SafeAreaView
          style={{
            flex: 1,
            marginTop: 20,
            width: '90%',
            alignSelf: 'center',
          }}>
          {/* ==========Parrent Box========== */}
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
              <View
                key={i}
                style={{
                  flexDirection: 'row',
                  width: '100%',
                  marginVertical: 10,
                  borderBottomWidth: 0.5,
                  borderColor: '#707070',
                }}>
                {/* ==========Image========== */}

                <View
                  style={{
                    width: '25%',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                  }}>
                  <View
                    style={{
                      borderWidth: 0.5,
                      borderColor: '#F6931B',
                      borderRadius: 100,
                      overflow: 'hidden',
                    }}>
                    <Image
                      source={item.image}
                      style={{height: 60, width: 60, borderRadius: 60}}
                    />
                  </View>
                </View>

                {/* ==========Title & Mobile no:========== */}

                <View
                  style={{
                    flex: 1,
                  }}>
                  <View style={{marginVertical: 10}}>
                    <Text style={{color: '#FFFFFF'}}>{item.title}</Text>
                  </View>

                  <View>
                    <Text style={{color: '#B3B6B7', fontSize: 12}}>
                      {item.mobileNumber}
                    </Text>
                  </View>
                </View>

                {/* ==========Send Image Button========== */}

                <View
                  style={{
                    width: '15%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <TouchableOpacity onPress={() => sendfunction()}>
                    <Image
                      source={require('../../assets/images/send.png')}
                      style={{height: 30, width: 30}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
        </SafeAreaView>
      </ScrollView>
    </ImageBackground>
  );
};
export default App;
