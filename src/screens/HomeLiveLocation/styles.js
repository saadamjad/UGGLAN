import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // ========liveLocationMainView======

  liveLocationMainView: {
    backgroundColor: 'black',
    height: 80,
    width: '93%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  IconView: {
    borderWidth: 2,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    borderColor: 'white',
  },
  IconsStyle: {
    // color: 'white', fontSize: size ? size : 35
  },
  TextName: {
    color: 'white',
    fontSize: 18,
    marginLeft: 10,
  },

  // =======SafeAreaViewMainView======
  SafeAreaViewMainView: {
    flex: 1,
  },

  // =======MapviewStyle=====

  MapviewStyle: {
    flex: 1,
  },

  // =======MainContentView====

  MainContentView: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'black',
    width: '100%',
    height: '50%',
  },
  backgroundColorView: {
    backgroundColor: '#242424',
    paddingVertical: 5,
  },
  ContentView: {
    width: '80%',
    alignSelf: 'flex-end',
  },
  CurrentLocationText: {
    color: 'white',
    fontSize: 16,
  },
});

export default styles;
