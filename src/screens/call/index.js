import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import GlobalHeader from '../../components/header';
import styles from './styles'
import {connect} from 'react-redux';
import {AllContactsAction} from '../../store/actions';
import allContacts from '../../store/reducers/allContacts';

const App = (props) => {
  useEffect(() => {


 
    // let data = props.allContacts;
    // // console.log('data of cntanj', data);
    // setState({...state, allContacts: data});

    getAllContacts();
  }, []);

  useEffect(() => {


 
    let data = props.allContacts;
    // console.log('data of cntanj', data);
    setState({...state, allContacts: data});

    // getAllContacts();
  }, [props.allContacts]);

  const [state, setState] = useState({
    allContacts: [],
  });

  const getAllContacts = () => {
    _getAllContacts();
  };

  const _getAllContacts = () => {
    let token = props.userData.token;
    // console.log('token',token)
    props.AllContacts(token);
  };
  const callfunction = (id) => {
    // console.log('call id',id)
    props.navigation.navigate('calling' ,{id: id});
    // alert('caling ')
  };

  const videoCallFunction=(id)=>{
// console.log('vediocall id',id)
props.navigation.navigate('videocalling' ,{id: id});


  }



  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
    
      
    style={styles.ImageBackgroundCall}
      >
      <SafeAreaView>
        <GlobalHeader
          screenText={'Call'}
          navigation={props.navigation}
          isBack={true}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView
          
            
            style={styles.SafeAreaViewMain}
            >
            {/* ==========Box Start========== */}
            {props.isLoading === true ? (
              <View
            
                
                style={styles.BoxView}
                >
                <ActivityIndicator size="large" color="#DE2516" />
              </View>
            ) : (
              state?.allContacts?.map((item, i) => {
                // console.log("BHOOOOT", item)
                return (
                  <View
                    key={i}
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
                            source={require('../../assets/images/1.jpg')}
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
                            style={{
                              color: '#FFFFFF',
                              height: 20,
                              fontSize: 15,
                            }}>
                            {item?.securityUserId?.userName}
                          </Text>
                          <Text
                            style={{
                              color:
                                item.status == 'pending'
                                  ? '#A1A1A1'
                                  : '#29FF00',
                              marginLeft: 5,
                              fontSize: 12,
                              padding: 2,
                            }}>
                            {item?.statusText}
                          </Text>
                        </View>
                        <Text
                          style={{
                            color: '#B3B6B7',
                            marginLeft: 10,
                            fontSize: 13,
                          }}>
                             {/* {item?.securityUserId?.phone} */}
                             +92 3103844268

                        </Text>
                      </View>
                    </View>

                    {/* ==========IconImages========== */}

                    <View
                      style={{
                        flex: 1,
                        flexDirection: 'row',
                      }}>
                      <TouchableOpacity
                        style={{
                          marginLeft: 10,
                          overflow: 'hidden',
                          height: 28,
                          width: 28,
                          borderRadius: 28,
                        }}
                        onPress={() => callfunction(item._id)}>
                        <Image
                          source={require('../../assets/images/call.png')}
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
                        style={{
                          marginLeft: 10,
                          overflow: 'hidden',
                          height: 28,
                          width: 28,
                          borderRadius: 28,
                        }} 
                        onPress={() => videoCallFunction(item._id)}
                        >
                        <Image
                          source={require('../../assets/images/videocam.png')}
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
                        style={{
                          marginLeft: 10,
                          overflow: 'hidden',
                          height: 28,
                          width: 28,
                          borderRadius: 28,
                        }}>
                        <Image
                          source={require('../../assets/images/chat.png')}
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
                        style={{
                          marginLeft: 10,
                          overflow: 'hidden',
                          height: 28,
                          width: 28,
                          borderRadius: 28,
                        }}>
                        <Image
                          source={require('../../assets/images/gps.png')}
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
                  </View>
                );
              })
            )}
          </SafeAreaView>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

mapStateToProps = (state) => ({
  isLoading: state.AllContactsReducer.isLoading,
  // hirePersonelData: state.HireSomeOneReducer.hirePersonelData,
  allContacts: state.AllContactsReducer.allContacts,
  userData: state.AuthReducer.userData,
});
mapDispatchToProps = {
  // HireNow: HireSomeOneAction.HireNow,
  AllContacts: AllContactsAction.AllContacts,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
