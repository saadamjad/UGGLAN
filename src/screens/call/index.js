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
import styles from './styles';
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
    props.navigation.navigate('calling', {id: id});
    // alert('caling ')
  };

  const videoCallFunction = (id) => {
    // console.log('vediocall id',id)
    props.navigation.navigate('videocalling', {id: id});
  };

  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={styles.ImageBackgroundCall}>
      <SafeAreaView>
        <GlobalHeader
          screenText={'Call'}
          navigation={props.navigation}
          isBack={true}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView style={styles.SafeAreaViewMain}>
            {/* ==========Box Start========== */}
            {props.isLoading === true ? (
              <View style={styles.BoxView}>
                <ActivityIndicator size="large" color="#DE2516" />
              </View>
            ) : (
              state?.allContacts?.map((item, i) => {
                // console.log("BHOOOOT", item)
                return (
                  <View key={i} style={styles.CardMainView}>
                    <View style={styles.CardNameNumberView}>
                      <View style={styles.CardImageMainView}>
                        <View style={styles.CardImageView}>
                          <Image
                            source={require('../../assets/images/1.jpg')}
                            style={styles.CardProfileImage}
                            resizeMode="cover"
                          />
                        </View>
                      </View>
                      <View style={styles.CardNameView}>
                        <View style={styles.NameNumberView}>
                          <Text style={styles.CardNameText}>
                            {item?.securityUserId?.userName}
                            {/* {console.log('secitr name',item.securityUserId.userName)} */}
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
                            }}
                            // style={styles.CardPendingText}
                          >
                            {item?.statusText}
                          </Text>
                        </View>
                        <Text style={styles.CardNumberText}>
                          {/* {item?.securityUserId?.phone} */}
                          +92 3103844268
                        </Text>
                      </View>
                    </View>

                    {/* ==========IconImages========== */}

                    <View style={styles.IconImagesMainView}>
                      <TouchableOpacity
                        style={styles.TouchableOpacityCallImage}
                        onPress={() => callfunction(item._id)}>
                        <Image
                          source={require('../../assets/images/call.png')}
                          style={styles.CallImageStyle}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.TouchableOpacityVideoCallImage}
                        onPress={() => videoCallFunction(item._id)}>
                        <Image
                          source={require('../../assets/images/videocam.png')}
                          style={styles.VideoCallImageStyle}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => props.navigation.navigate('chat')}
                        style={styles.TouchableOpacityChatImage}>
                        <Image
                          source={require('../../assets/images/chat.png')}
                          style={styles.ChatImageStyle}
                          resizeMode="contain"
                        />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.TouchableOpacityGPSImage}>
                        <Image
                          source={require('../../assets/images/gps.png')}
                          style={styles.GPSImageStyle}
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
