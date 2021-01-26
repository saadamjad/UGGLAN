import React, {useEffect, useState} from 'react';
import {Button} from 'react-native-elements';
import {View, Text, SafeAreaView, ImageBackground, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
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
  const Track = () => {
    props.navigation.navigate('trackperson');
  };
  return (
    <ImageBackground
      source={require('../../assets/images/bg_image.png')}
      style={styles.ImageBackgroundThankuMain}>
      <SafeAreaView style={styles.SafeAreaViewThanku}>
        {/* <View style={{flexDirection: 'row'}}>
          <AntDesign
            name="left"
            size={19}
            color="#C0C0C0"
            style={{height: 19, width: 19}}
          />
          {/* <Text style={{color: '#FFFFFF', marginLeft: 5}}>
            Select payment method
          </Text> */}
        {/* </View> */}
        <GlobalHeader isBack={true} navigation={props.navigation} />
        <View style={styles.ThankYouTextView}>
          <Text style={styles.ThankYouText}>Thank You</Text>
        </View>
        <View style={styles.CheckImageView}>
          <Image
            source={require('../../assets/images/check.png')}
            style={styles.CheckImage}
          />
        </View>
        <View style={styles.NowContactView}>
          <Text style={styles.NowContactText}>
            Now contact the {state.hirePersonelData.name}
          </Text>
        </View>

        <View>
          <LinearGradient
            colors={['#F6931B', '#DE2516']}
            style={styles.LinearGradientTrackButton}>
            <Button
              title="Track Person"
              onPress={() => Track()}
              buttonStyle={{
                backgroundColor: 'transparent',
                width: 290,
                height: 42,
              }}
            />
          </LinearGradient>
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
export default connect(mapStateToProps, null)(App);
