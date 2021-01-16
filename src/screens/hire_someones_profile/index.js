import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-elements';
import {View, Text, ImageBackground, SafeAreaView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StarRating from 'react-native-star-rating';
import GlobalHeader from '../../components/header';
import styles from './styles';
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

  const chatWithPerson = () => {
    props.navigation.navigate('chat');
  };

  const hireNowFunction = (personID) => {
    // props.navigation.navigate('selectPaymentMethod');
    _hireNowFunction(personID);
  };

  const _hireNowFunction = (personID) => {
    let token = props.userData.token;
    console.log('person ID', personID, token);
    props.HireNow(personID, token, props.navigation);
  };
  // const random = () => {
  //   return Math.random() * 5;
  // };

  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={styles.ImageBackgroundProfileMain}>
      <SafeAreaView style={styles.SafeAreaViewProfile}>
        <GlobalHeader
          screenText={'Profile'}
          navigation={props.navigation}
          isBack={true}
        />
        <View style={styles.CardMainView}>
          <View style={styles.CardMainView2}>
            <View style={styles.CardProfilePicView}>
              <Image
                source={require('../../assets/images/1.jpg')}
                style={styles.ProfileImage}
                resizeMode="cover"
              />
            </View>
            <View style={styles.UserNameTextView}>
              <Text style={styles.UserNameText}>
                {state?.hirePersonelData?.name}
              </Text>
            </View>
            <View style={styles.PriceTextView}>
              <Text style={styles.PriceText}>
                {state?.hirePersonelData?.name} Charges $
                {state?.hirePersonelData?.price}
              </Text>
            </View>
            <View>
              <Text
              
                
                style={styles.AdressText}
                >
                He is 0.7 Km away from you
              </Text>
            </View>
            {/* ******Ratting Stars******* */}

            <View
               style={styles.StarsView}>
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

            <View 
            style={styles.AboutView}
            >
              <Text  style={styles.AboutText}>
                About {state?.hirePersonelData?.name}
              </Text>
            </View>
            <View     style={styles.AboutView1} >
              <Text
             
                style={styles.AboutText1}
                
                >
                {/* I'm just here for good times, man. I want people to have the
                best time ever. Especially if they're around me. */}
                {state?.hirePersonelData?.about}
              </Text>
            </View>
            <View  style={styles.ButtonsView}>
              <LinearGradient
                colors={['#F6931B', '#DE2516']}
             
                
                style={styles.LinearGradientChatButton}
                >
                <Button
                  title="Chat"
                  onPress={() => chatWithPerson()}
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
               
                style={styles.LinearGradientHireNowButton}
                >

                     
                
            
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
