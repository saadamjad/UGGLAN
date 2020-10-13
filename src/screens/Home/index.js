import Geolocation from '@react-native-community/geolocation';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  PermissionsAndroid,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';

export default () => {
  //  state here

  const [state, setState] = useState({position: {}});

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
            console.log('CHECK POSITION', position);
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
    <View style={{flex: 1}}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
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
    </View>
  );
};
