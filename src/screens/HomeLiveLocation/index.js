import Geolocation from '@react-native-community/geolocation';
import {Icon} from 'native-base';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
  SafeAreaView,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
import GlobalHeader from '../../components/header';
import styles from './styles';
import RightDrawer from '../../components/rightSideDrawer';

const Tab = (name, iconObj, size) => {
  return (
    <View style={styles.liveLocationMainView}>
      <View style={styles.IconView}>
        <Icon
          style={{color: 'white', fontSize: size ? size : 35}}
          // style={styles.IconsStyle}
          name={iconObj.name}
          type={iconObj.type}
        />
      </View>
      <Text style={styles.TextName}>{name}</Text>
    </View>
  );
};

export default (props) => {
  //  state here

  const [state, setState] = useState({position: {}, isVisible: false});
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
    }
    // console.log('LOCATION HERE', location);
  };
  return (
    <SafeAreaView style={styles.SafeAreaViewMainView}>
      <GlobalHeader
        isBack={true}
        bg={true}
        screenText={'Share live Location'}
        navigation={props.navigation}
      />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.MapviewStyle}
        showsUserLocation={true}
        // initialRegion={
        //   Object.keys(state.position).length > 0
        //     ? {...state.position, latitudeDelta: 0.0922, longitudeDelta: 0.0421}
        //     : {
        //         latitude: 37.78825,
        //         longitude: -122.4324,
        //         latitudeDelta: 0.0922,
        //         longitudeDelta: 0.0421,
        //       }
        // }
      >
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
      <View style={styles.MainContentView}>
        {Tab('Share live location', {name: 'location', type: 'EvilIcons'})}
        <View style={styles.backgroundColorView}>
          <View style={styles.ContentView}>
            <Text style={styles.CurrentLocationText}>Current Location</Text>
          </View>
        </View>
        {Tab(
          'Send Your Current Location',
          {name: 'circle', type: 'FontAwesome'},
          18,
        )}
      </View>
    </SafeAreaView>
  );
};
