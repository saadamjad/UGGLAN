import React ,{useEffect,useState}from 'react';
import {Button} from 'react-native-elements';
import {View, Text, SafeAreaView, ImageBackground, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import GlobalHeader from '../../components/header'
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
  const Track=()=> {
    props.navigation.navigate('trackperson')
  }
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
          width: '90%',
          marginVertical: 20,
          alignSelf: 'center',
        }}>
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
        <GlobalHeader
          isBack={true}
          navigation={props.navigation}
        />
        <View style={{alignItems: 'center', marginTop: 30}}>
          <Text style={{color: '#FFFFFF', fontSize: 17}}>Thank You</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Image
            source={require('../../assets/images/check.png')}
            style={{height: 83.8, width: 83.8}}
          />
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{color: '#FFFFFF', fontSize: 13}}>
            Now contact the  {state.hirePersonelData.name}
          </Text>
        </View>

        <View>
          <LinearGradient
            colors={['#F6931B', '#DE2516']}
            style={{
              alignSelf: 'center',
              marginVertical: 10,
              marginTop: 50,
              borderRadius: 3,
            }}>
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
export default connect(mapStateToProps,null)(App);
