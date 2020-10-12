import React from 'react';
import {Button} from 'react-native-elements';
import {View, Text, ImageBackground, SafeAreaView, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StarRating from 'react-native-star-rating';

const App = (props) => {
  const hireNowFunction = () => {
    props.navigation.navigate('shareUGGLAN');
  };
  const random = () => {
    return Math.random() * 5;
  };
  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <SafeAreaView
        style={{
          flex: 1,
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
            height: 400,
            width: 301,
          }}>
          <View
            style={{
              marginTop: 50,
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
            <Text style={{color: '#FFFFFF', fontSize: 17}}>Abdul Samad</Text>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{height: 20, color: '#29FF00', fontSize: 13}}>
              David Charge $50
            </Text>
          </View>
          <View>
            <Text style={{height: 20, color: '#F6931B', fontSize: 13}}>
              He is 0.7 Km away from you
            </Text>
          </View>
          {/* ******Ratting Stars******* */}

          <View style={{marginVertical: 5}}>
            <StarRating
              disabled={false}
              maxStars={5}
              fullStarColor={'#FFF700'}
              emptyStarColor={'#FFF700'}
              emptyStar={'ios-star-outline'}
              fullStar={'ios-star'}
              halfStar={'ios-star-half'}
              iconSet={'Ionicons'}
              starSize={19}
              containerStyle={{width: 80, marginLeft: 5, marginTop: -5}}
              rating={random()}
            />
          </View>

          <View style={{marginVertical: 8}}>
            <Text style={{height: 20, color: '#FFFFFF', fontSize: 15}}>
              About David
            </Text>
          </View>
          <View>
            <Text
              style={{
                // height: 16,
                color: '#FFFFFF',
                fontSize: 13,
                textAlign: 'center',
              }}>
              I'm just here for good times, man. I want {'\n'}
              people to have the best time ever.{'\n'}
              Especially if they're around me.
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 50}}>
            <LinearGradient
              colors={['#F6931B', '#DE2516']}
              style={{marginRight: 20, borderRadius: 3}}>
              <Button
                title="Chat"
                //   onPress={}
                buttonStyle={{
                  backgroundColor: 'transparent',
                  width: 90,
                  height: 30,
                }}
              />
            </LinearGradient>
            <LinearGradient
              colors={['#F6931B', '#DE2516']}
              style={{borderRadius: 3}}>
              <Button
                title="Hire Now"
                onPress={() => hireNowFunction()}
                buttonStyle={{
                  backgroundColor: 'transparent',
                  width: 90,
                  height: 30,
                }}
              />
            </LinearGradient>
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};
export default App;
