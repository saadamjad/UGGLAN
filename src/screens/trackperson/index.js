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

const App = (props) => {
  const callfunction = () => {
    props.navigation.navigate('calling');
  };
  const [Data, SetData] = useState([
    {
      image: require('../../assets/images/1.jpg'),
      name: 'Abdul Samad',
      nickName: '(Hired)',
      status: 'hired',
      mobileNumber: '+92 3103844268',
      callImage: require('../../assets/images/call.png'),
      videoImage: require('../../assets/images/videocam.png'),
      chatImage: require('../../assets/images/chat.png'),
      gpsImage: require('../../assets/images/gps.png'),
    },
    {
      image: require('../../assets/images/2.jpg'),
      name: 'Logan',
      nickName: '(Pending...)',
      status: 'pending',
      mobileNumber: '+92 3103844268',
      callImage: require('../../assets/images/call.png'),
      videoImage: require('../../assets/images/videocam.png'),
      chatImage: require('../../assets/images/chat.png'),
      gpsImage: require('../../assets/images/gps.png'),
    },
    {
      image: require('../../assets/images/3.jpg'),
      name: 'Babu Bhai',
      nickName: '(Hired)',
      status: 'hired',
      mobileNumber: '+92 3103844268',
      callImage: require('../../assets/images/call.png'),
      videoImage: require('../../assets/images/videocam.png'),
      chatImage: require('../../assets/images/chat.png'),
      gpsImage: require('../../assets/images/gps.png'),
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
          screenText={'All Contacts'}
          navigation={props.navigation}
          isBack={true}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView
            style={{
              flex: 1,
              marginTop: 20,
              width: '90%',
              alignSelf: 'center',
            }}>
            {/* ==========Box Start========== */}

            {Data.map((item, i) => {
              return (
                <View
                  style={{
                    height: 120,
                    borderBottomWidth: 0.5,
                    borderColor: '#707070',
                    marginVertical: 6,
                  }}>
                  <View
                    style={{
                      height: '60%',
                      flexDirection: 'row',
                    }}>
                    <View
                      style={{
                        overflow: 'hidden',
                        width: '20%',
                      }}>
                      <View
                        style={{
                          borderWidth: 0.5,
                          borderColor: '#A1A1A1',
                          borderRadius: 100,
                          height: 60,
                          width: 60,
                          overflow: 'hidden',
                        }}>
                        <Image
                          source={item.image}
                          style={{
                            height: '100%',
                            width: '100%',
                            borderRadius: 100,
                          }}
                          resizeMode="cover"
                        />
                      </View>
                    </View>
                    <View style={{flex: 1}}>
                      <View style={{flexDirection: 'row', padding: 5}}>
                        <Text
                          style={{color: '#FFFFFF', height: 20, fontSize: 15}}>
                          {item.name}
                        </Text>
                        <Text
                          style={{
                            color:
                              item.status == 'pending'
                                ? '#A1A1A1'
                                : item.status == 'hired'
                                ? '#00B1FF'
                                : '#29FF00',
                            marginLeft: 5,
                            fontSize: 12,
                            padding: 2,
                          }}>
                          {item.nickName}
                        </Text>
                      </View>
                      <Text
                        style={{
                          color: '#B3B6B7',
                          marginLeft: 10,
                          fontSize: 13,
                        }}>
                        {item.mobileNumber}
                      </Text>
                    </View>
                  </View>

                  {/* ==========IconImages========== */}

                  {item.status !== 'hired' ? null : (
                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                      }}>
                      <TouchableOpacity
                        disabled={item.status !== 'hired'}
                        style={{
                          marginLeft: 10,
                          overflow: 'hidden',
                          height: 23,
                          width: 23,
                          backgroundColor:
                            item.status !== 'hired' ? 'grey' : 'white',
                          borderRadius: 23,
                        }}
                        onPress={() => callfunction()}>
                        <Image
                          source={item.callImage}
                          style={{
                            height: '100%',
                            width: '100%',
                            borderWidth: 0.5,
                            borderColor: '#707070',
                          }}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        disabled={item.status !== 'hired'}
                        style={{
                          marginLeft: 10,
                          overflow: 'hidden',
                          height: 23,
                          width: 23,
                          backgroundColor:
                            item.status !== 'hired' ? 'grey' : 'white',
                          borderRadius: 23,
                        }}>
                        <Image
                          source={item.videoImage}
                          style={{
                            height: '100%',
                            width: '100%',
                            borderWidth: 0.5,
                            borderColor: '#707070',
                          }}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => props.navigation.navigate('chat')}
                        disabled={item.status !== 'hired'}
                        style={{
                          marginLeft: 10,
                          overflow: 'hidden',
                          height: 23,
                          width: 23,
                          backgroundColor:
                            item.status !== 'hired' ? 'grey' : 'white',
                          borderRadius: 23,
                        }}>
                        <Image
                          source={item.chatImage}
                          style={{
                            height: '100%',
                            width: '100%',
                            borderWidth: 0.5,
                            borderColor: '#707070',
                          }}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        disabled={item.status !== 'hired'}
                        onPress={() => props.navigation.navigate("HomeLiveLocation")}
                        style={{
                          marginLeft: 10,
                          overflow: 'hidden',
                          height: 23,
                          width: 23,
                          backgroundColor:
                            item.status !== 'hired' ? 'grey' : 'white',
                          borderRadius: 23,
                        }}>
                        <Image
                          source={item.gpsImage}
                          style={{
                            height: '100%',
                            width: '100%',
                            borderWidth: 0.5,
                            borderColor: '#707070',
                          }}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                    </View>
                  )}
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
