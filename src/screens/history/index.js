import React, {useState} from 'react';
import {Button} from 'react-native-elements';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StarRating from 'react-native-star-rating';
import GlobalHeader from '../../components/header';
const App = (props) => {
  const Hirefunction = () => {
    props.navigation.navigate('hireProfile');
  };
  const random = () => {
    return Math.random() * 5;
  };
  const [Array, Setarray] = useState([
    {
      image: require('../../assets/images/1.jpg'),
      name: 'Abdul Samad',
      dollar: '$50',
      rating: random(),
      time: 'Hired 24-02-2017',
      address: ' Km: 0.7km away',
    },
    {
      image: require('../../assets/images/2.jpg'),
      name: 'Logan',
      dollar: '$40',
      rating: random(),
      time: 'Hired 24-02-2017',
      address: ' Km: 2.4km away',
    },
    {
      image: require('../../assets/images/3.jpg'),
      name: 'Babu Bhai',
      dollar: '$90',
      rating: random(),
      time: 'Hired 24-02-2017',
      address: ' Km: 1.2km away',
    },
    {
      image: require('../../assets/images/4.jpg'),
      name: 'Samad Soomro',
      dollar: '$75',
      rating: random(),
      time: 'Hired 24-02-2017',
      address: ' Km: 0.7km away',
    },
    {
      image: require('../../assets/images/5.jpg'),
      name: 'Jungle Book',
      dollar: '$99',
      rating: random(),
      time: 'Hired 24-02-2017',
      address: ' Km: 0.4km away',
    },
    {
      image: require('../../assets/images/6.jpg'),
      name: 'Jet Ski',
      dollar: '$50',
      rating: random(),
      time: 'Hired 24-02-2017',
      address: ' Km: 0.9km away',
    },
    {
      image: require('../../assets/images/7.jpg'),
      name: 'Desi Munda',
      dollar: '$60',
      rating: random(),
      time: 'Hired 24-02-2017',
      address: ' Km: 0.8km away',
    },
  ]);

  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <SafeAreaView>
        <GlobalHeader
          navigation={props.navigation}
          isBack={true}
          screenText={'History'}
          isMonthPicker={true}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView
            style={{
              flex: 1,
              marginTop: 20,
              width: '100%',
              alignSelf: 'center',
            }}>
            {/* ==========Parrent Box========== */}
            {Array.map((item, i) => {
              return (
                <View
                  style={{
                    flexDirection: 'row',
                    width: '95%',
                    alignSelf: 'center',
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
                        style={{height: 60, width: 60, borderRadius: 100}}
                        resizeMode="cover"
                      />
                    </View>
                  </View>

                  {/* ==========Name & Address & Stars========== */}

                  <View
                    style={{
                      flex: 1,
                      marginLeft: 0,
                    }}>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{fontSize: 15, color: '#FFFFFF'}}>
                        {item.name}
                      </Text>
                    </View>
                    <View>
                      <Text
                        style={{
                          color:
                            item.status == 'pending' ? '#A1A1A1' : '#29FF00',
                          // marginLeft: 5,
                          marginTop: 5,
                          fontSize: 12,
                          padding: 2,
                        }}>
                        {item.dollar}
                      </Text>
                    </View>
                    <View style={{marginVertical: 5}}>
                      <Text style={{fontSize: 13, color: 'white'}}>
                        {item.time}
                      </Text>
                    </View>
                  </View>

                  {/* ==========Hire Button========== */}

                  <View
                    style={{
                      width: '25%',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <LinearGradient
                      colors={['#F6931B', '#DE2516']}
                      style={{borderRadius: 3}}>
                      <Button
                        title="Hire Again"
                        onPress={() => Hirefunction()}
                        titleStyle={{fontSize: 14}}
                        buttonStyle={{
                          backgroundColor: 'transparent',
                          width: 100,
                          height: 40,
                        }}
                      />
                    </LinearGradient>
                  </View>
                </View>
              );
            })}
          </SafeAreaView>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default App;
