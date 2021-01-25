import {Platform, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // ======SafeAreaViewMain====

  SafeAreaViewMain: {
    flex: 1,
  },

  // ======MapViewHome=====

  MapViewHome: {
    flex: 1,
  },
  // =======animationViewIcon======

  animationViewIcon: {
    left: 30,
    bottom: 50,
    position: 'absolute',
    // backgroundColor: 'black',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  AnimatableView: {
    paddingBottom: 10,
  },

  // =======TouchableOpacityIcon======

  TouchableOpacityIcon: {
    height: 50,

    width: 50,
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
  },
  IconStyle: {
    color: 'black',
    fontSize: 25,
  },
  // TouchableOpacityrunAnimation:{
  //     height: 50,
  //     width: 50,
  //     transform: [
  //       {
  //         rotate: state.anim.interpolate({
  //           inputRange: [0, 1],
  //           outputRange: ['0deg', '-45deg'],
  //         }),
  //       },
  //     ],
  //     borderRadius: 100,
  //     backgroundColor: 'white',

  //     shadowColor: '#000',
  //     shadowOffset: {
  //       width: 0,
  //       height: 2,
  //     },
  //     shadowOpacity: 0.25,
  //     shadowRadius: 3.84,
  //     elevation: 5,
  //     alignItems: 'center',
  //     justifyContent: 'center',
  // },
  IconPlus: {
    color: '#F6931B',
  },
});

export default styles;
