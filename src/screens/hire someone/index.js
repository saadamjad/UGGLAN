import React, {useState, useEffect} from 'react';
import {Button} from 'react-native-elements';
import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StarRating from 'react-native-star-rating';
import {connect} from 'react-redux';
import {HireSomeOneAction} from '../../store/actions';
import GlobalHeader from '../../components/header';
const App = (props) => {
  useEffect(() => {
    let data = props.hireSomeOneData;
    // console.log('hireSome One data', data);
    setState({...state, hireSomeOneData: data});
    getAllSecurityUser();
  }, []);
  const [state, setState] = useState({
    hireSomeOneData: [],
    // someOneId:''
  });

  const Hirefunction = (id, name, price, stars, about) => {
    const hirePersonelData = {
      id: id,
      name: name,
      price: price,
      stars: stars,
      about: about,
    };
    // console.log('hirePerson data',hirePersonlData)

    _Hirefunction(hirePersonelData);
    props.navigation.navigate('hireProfile');
  };

  const _Hirefunction = (hirePersonelData) => {
    // console.log('data in other fucn', hirePersonelData);

    // let token = props.userData.token;
    props.SendSomeData(hirePersonelData);
    // props.HireNow(id,hirePersonlData,token)
    // props.HireNow(id,token)
  };
  const random = () => {
    return Math.random() * 5;
  };

  const getAllSecurityUser = () => {
    _getAllSecurityUser();
  };

  const _getAllSecurityUser = () => {
    let token = props.userData.token;
    // console.log('token of hired',token)
    props.HireSomeOneAction(token);
  };
  // const [Array, Setarray] = useState([
  //   {
  //     image: require('../../assets/images/1.jpg'),
  //     name: 'Abdul Samad',
  //     dollar: '$50',
  //     rating: random(),
  //     address: ' Km: 0.7km away',
  //   },
  //   {
  //     image: require('../../assets/images/2.jpg'),
  //     name: 'Logan',
  //     dollar: '$40',
  //     rating: random(),
  //     address: ' Km: 2.4km away',
  //   },
  //   {
  //     image: require('../../assets/images/3.jpg'),
  //     name: 'Babu Bhai',
  //     dollar: '$90',
  //     rating: random(),
  //     address: ' Km: 1.2km away',
  //   },
  //   {
  //     image: require('../../assets/images/4.jpg'),
  //     name: 'Samad Soomro',
  //     dollar: '$75',
  //     rating: random(),
  //     address: ' Km: 0.7km away',
  //   },
  //   {
  //     image: require('../../assets/images/5.jpg'),
  //     name: 'Jungle Book',
  //     dollar: '$99',
  //     rating: random(),
  //     address: ' Km: 0.4km away',
  //   },
  //   {
  //     image: require('../../assets/images/6.jpg'),
  //     name: 'Jet Ski',
  //     dollar: '$50',
  //     rating: random(),
  //     address: ' Km: 0.9km away',
  //   },
  //   {
  //     image: require('../../assets/images/7.jpg'),
  //     name: 'Desi Munda',
  //     dollar: '$60',
  //     rating: random(),
  //     address: ' Km: 0.8km away',
  //   },
  // ]);

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
          screenText={'Hire Someone'}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView
            style={{
              flex: 1,
              marginTop: 20,
              width: '90%',
              alignSelf: 'center',
            }}>
            {/* ==========Parrent Box========== */}
            {props.isLoading === true ? (
              <View
                style={{
                  justifyContent: 'center',
                  flex: 1,
                  alignItems: 'center',
                }}>
                <ActivityIndicator size="large" color="#DE2516" />
              </View>
            ) : (
              state?.hireSomeOneData?.map((item, i) => {
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
                          source={require('../../assets/images/1.jpg')}
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
                          {item?.userName}
                          {'   |'}
                        </Text>
                        <Text
                          style={{
                            color:
                              item.status == 'pending' ? '#A1A1A1' : '#29FF00',
                            marginLeft: 5,
                            fontSize: 12,
                            padding: 2,
                          }}>
                          {item?.price}
                        </Text>
                      </View>
                      <View style={{marginVertical: 5}}>
                        <Text style={{fontSize: 13, color: '#F6931B'}}>
                          {/* {item.address} */}
                          Km: 0.7km away
                        </Text>
                      </View>
                      {/* ********Stars Area******** */}
                      <View style={{marginVertical: 5}}>
                        <StarRating
                          disabled={false}
                          maxStars={5}
                          fullStarColor={'#FFF700'}
                          emptyStarColor={'#FFF700'}
                          // emptyStar={'ios-star-outline'}
                          // fullStar={'ios-star'}
                          // halfStar={'ios-star-half'}
                          // iconSet={'Ionicons'}
                          starSize={15}
                          containerStyle={{
                            width: 80,
                            marginLeft: 5,
                            marginTop: -5,
                          }}
                          rating={item?.stars}
                        />
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
                          title="Hire Now"
                          loading={props.isLoading}
                          onPress={() =>
                            Hirefunction(
                              item._id,
                              item.userName,
                              item.price,
                              item.stars,
                              item.about,
                            )
                          }
                          buttonStyle={{
                            backgroundColor: 'transparent',
                            width: 90,
                          }}
                        />
                      </LinearGradient>
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
  isLoading: state.HireSomeOneReducer.isLoading,
  hireSomeOneData: state.HireSomeOneReducer.hireSomeOneData,
  userData: state.AuthReducer.userData,
});
mapDispatchToProps = {
  HireSomeOneAction: HireSomeOneAction.HireSomeOne,
  HireNow: HireSomeOneAction.HireNow,
  SendSomeData: HireSomeOneAction.SendSomeData,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
