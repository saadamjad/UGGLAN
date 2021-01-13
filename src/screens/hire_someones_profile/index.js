import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-elements';
import {View, Text, ImageBackground, SafeAreaView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StarRating from 'react-native-star-rating';
import GlobalHeader from '../../components/header';
import {connect} from 'react-redux';
import {HireSomeOneAction} from '../../store/actions';

const App = (props) => {
  useEffect(() => {
    let data = props.hirePersonelData;
    setState({...state, hirePersonelData: data});
    // console.log('hire some profile',data)
    
  }, []);

  const [state, setState] = useState({
    hirePersonelData: {},
  });


const chatWithPerson=()=>{


  props.navigation.navigate('chat')
}

  const hireNowFunction = (personID) => {
    // props.navigation.navigate('selectPaymentMethod');
    _hireNowFunction(personID);
  };

  const _hireNowFunction = (personID) => {
    let token = props.userData.token;
    console.log('person ID', personID, token);
    props.HireNow(personID, token,props.navigation);
  };
  // const random = () => {
  //   return Math.random() * 5;
  // };

  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <SafeAreaView style={{flex: 1}}>
        <GlobalHeader
          screenText={'Profile'}
          navigation={props.navigation}
          isBack={true}
        />
        <View
          style={{
            // flex: 1,
            height: '80%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              borderColor: '#707070',
              borderWidth: 0.5,
              elevation: 2,
              // height: 400,
              width: '80%',
            }}>
           {/* {console.log('message',props.message)} */}
            <View
              style={{
                // marginTop: 50,
                marginVertical: 10,
                borderWidth: 0.5,
                borderColor: '#707070',
                height: 100,
                width: 100,
                borderRadius: 100,
              }}>
              <Image
                source={require('../../assets/images/1.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 100}}
                resizeMode="cover"
              />
            </View>
            <View style={{marginVertical: 3}}>
              <Text style={{color: '#FFFFFF', fontSize: 17}}>
                {state?.hirePersonelData?.name}
              </Text>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text
                style={{
                  height: 20,
                  color: '#29FF00',
                  fontSize: 13,
                  marginTop: 5,
                }}>
                {state?.hirePersonelData?.name} Charges $
                {state?.hirePersonelData?.price}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  height: 20,
                  color: '#F6931B',
                  fontSize: 13,
                  marginTop: 5,
                }}>
                He is 0.7 Km away from you
              </Text>
            </View>
            {/* ******Ratting Stars******* */}

            <View
              style={{marginVertical: 5, width: '100%', alignItems: 'center'}}>
              <StarRating
                disabled={false}
                maxStars={5}
                fullStarColor={'#FFF700'}
                starStyle={{paddingHorizontal: 2}}
                emptyStarColor={'#FFF700'}
                // emptyStar={'ios-star-outline'}
                // fullStar={'ios-star'}
                // halfStar={'ios-star-half'}
                // iconSet={'Ionicons'}
                starSize={25}
                containerStyle={{marginTop: 0}}
                rating={state?.hirePersonelData?.stars}
              />
            </View>

            <View style={{marginVertical: 8}}>
              <Text style={{height: 20, color: '#FFFFFF', fontSize: 15}}>
                About {state?.hirePersonelData?.name}
              </Text>
            </View>
            <View style={{width: '85%', alignSelf: 'center'}}>
              <Text
                style={{
                  // height: 16,
                  color: '#FFFFFF',
                  fontSize: 13,
                  textAlign: 'center',
                }}>
                {/* I'm just here for good times, man. I want people to have the
                best time ever. Especially if they're around me. */}
                {state?.hirePersonelData?.about}
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginVertical: 30}}>
              <LinearGradient
                colors={['#F6931B', '#DE2516']}
                style={{marginRight: 20, borderRadius: 3}}>
                <Button
                  title="Chat"
                  onPress={() =>chatWithPerson() }
                  buttonStyle={{
                    backgroundColor: 'transparent',
                    width: 90,
                    paddingVertical: 5,

                    // height: 30,
                  }}
                  titleStyle={{fontSize: 16}}
                />
              </LinearGradient>
              <LinearGradient
                colors={['#F6931B', '#DE2516']}
                style={{borderRadius: 3}}>
                <Button
                  title="Hire Now"
                  loading={props.isLoading}
                  onPress={() => hireNowFunction(state.hirePersonelData.id)}
                  buttonStyle={{
                    backgroundColor: 'transparent',
                    width: 90,
                    paddingVertical: 5,
                    // height: 30,
                  }}
                  titleStyle={{fontSize: 16}}
                />
              </LinearGradient>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

mapStateToProps = (state) => ({
  isLoading: state.HireSomeOneReducer.isLoading,
  hirePersonelData: state.HireSomeOneReducer.hirePersonelData,
  userData: state.AuthReducer.userData,


});
mapDispatchToProps = {
  HireNow: HireSomeOneAction.HireNow,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
