import Geolocation from '@react-native-community/geolocation';
import {Icon} from 'native-base';
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  Animated,
  PermissionsAndroid,
  SafeAreaView,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import GlobalHeader from '../../components/header';
import RightDrawer from '../../components/rightSideDrawer';
import styles from './styles';
import * as Animatable from 'react-native-animatable';
export default (props) => {
  //  state here

  const [state, setState] = useState({
    position: {},
    isVisible: false,
    done: false,
    anim: useRef(new Animated.Value(0)).current,
  });
  const runAnimation = () => {
    if (state.done) {
      Animated.timing(state.anim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(state.anim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
    setState({...state, done: !state.done});
  };
  useEffect(() => {
    GettingLocationPermission();
  }, []);
  const GettingLocationPermission = async () => {
    if (Platform.OS == 'android') {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (!granted) {
        return;
      } else {
        Geolocation.setRNConfiguration({skipPermissionRequests: false});
        Geolocation.watchPosition(
          (position) => {
            // console.log('CHECK POSITION', position);
            setState({...state, position: position.coords});
          },
          (err) => {
            console.log('MAP ERROR', err);
          },
          {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
        );
      }
    } else {
      Geolocation.setRNConfiguration({skipPermissionRequests: false});
      Geolocation.watchPosition(
        (position) => {
          // console.log('CHECK POSITION', position);
          setState({...state, position: position.coords});
        },
        (err) => {
          console.log('MAP ERROR', err);
        },
        {enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
      );
    }
    // console.log('LOCATION HERE', location);
  };
  return (
    <SafeAreaView style={styles.SafeAreaViewMain}>
      <GlobalHeader
        toggleDrawer={() => setState({...state, isVisible: !state.isVisible})}
        navigation={props.navigation}
      />
      <RightDrawer
        toggleDrawer={() => setState({...state, isVisible: !state.isVisible})}
        isVisible={state.isVisible}
      />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.MapViewHome}
        showsUserLocation={true}
        mapType="standard"
        coordinate={{
          latitude: state.position.latitude,
          longitude: state.position.longitude,
        }}
        initialRegion={{
          latitude: state.position.latitude
            ? state.position.latitude
            : 37.78825,
          longitude: state.position.longitude
            ? state.position.longitude
            : -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}>
        {/* {this.state.markers.map((marker, index) => ( */}
        {Object.keys(state.position).length > 0 && (
          <Marker
            coordinate={{
              ...state.position,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            title={'Your Location'}
            description={
              'You are still there you have to must change your location or permanantly banned from this app'
            }
          />
        )}
        {/* ))} */}
      </MapView>
      <View style={styles.animationViewIcon}>
        {[
          {type: 'FontAwesome5', name: 'satellite-dish'},
          {type: 'SimpleLineIcons', name: 'volume-2', name1: 'volume-off'},
          {type: 'Feather', name: 'mic', name1: 'mic-off'},
          {type: 'SimpleLineIcons', name: 'location-pin', name1: 'mic-off'},
        ].map((val) => (
          <Animatable.View
            animation={state.done ? 'bounceIn' : 'bounceOut'}
            style={styles.AnimatableView}>
            <TouchableOpacity
              // onPress={() => runAnimation()}

              style={styles.TouchableOpacityIcon}>
              <Icon style={styles.IconStyle} type={val.type} name={val.name} />
            </TouchableOpacity>
          </Animatable.View>
        ))}
        <TouchableOpacity
          onPress={() => runAnimation()}
          style={{
            height: 50,
            width: 50,
            transform: [
              {
                rotate: state.anim.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '-45deg'],
                }),
              },
            ],
            borderRadius: 100,
            backgroundColor: 'white',

            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          // style={styles.TouchableOpacityrunAnimation}
        >
          <Icon style={styles.IconPlus} type="AntDesign" name="plus" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
