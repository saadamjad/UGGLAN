import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  ImageBackgroundCall: {
    height: '100%',
    width: '100%',
  },

  // ==========Box Start==========

  SafeAreaViewMain: {
    flex: 1,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  BoxView: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },

  // ==========CardMainView==========

  CardMainView: {
    height: 120,
    borderBottomWidth: 0.5,
    borderColor: '#707070',
    marginVertical: 6,
  },
  CardNameNumberView: {
    height: '60%',
    flexDirection: 'row',
  },

  // ==========CardImageMainView==========

  CardImageMainView: {
    overflow: 'hidden',
    width: '20%',
  },
  CardImageView: {
    borderWidth: 0.5,
    borderColor: '#A1A1A1',
    borderRadius: 100,
    height: 60,
    width: 60,
    overflow: 'hidden',
  },
  CardProfileImage: {
    height: '100%',
    width: '100%',
    borderRadius: 100,
  },
  // ==========CardNameView==========

  CardNameView: {
    flex: 1,
  },
  NameNumberView: {
    flexDirection: 'row',
    padding: 5,
  },
  CardNameText: {
    color: '#FFFFFF',
    height: 20,
    fontSize: 15,
  },
  CardPendingText: {
    marginLeft: 5,
    fontSize: 12,
    padding: 2,
  },
  CardNumberText: {
    color: '#B3B6B7',
    marginLeft: 10,
    fontSize: 13,
  },

  // ==========IconImages==========

  IconImagesMainView: {
    flex: 1,
    flexDirection: 'row',
  },
  TouchableOpacityCallImage: {
    marginLeft: 10,
    overflow: 'hidden',
    height: 28,
    width: 28,
    borderRadius: 28,
  },
  CallImageStyle: {
    height: '100%',
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#707070',
  },
  TouchableOpacityVideoCallImage: {
    marginLeft: 10,
    overflow: 'hidden',
    height: 28,
    width: 28,
    borderRadius: 28,
  },
  VideoCallImageStyle: {
    height: '100%',
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#707070',
  },
  TouchableOpacityChatImage: {
    marginLeft: 10,
    overflow: 'hidden',
    height: 28,
    width: 28,
    borderRadius: 28,
  },
  ChatImageStyle: {
    height: '100%',
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#707070',
  },
  TouchableOpacityGPSImage: {
    marginLeft: 10,
    overflow: 'hidden',
    height: 28,
    width: 28,
    borderRadius: 28,
  },
  GPSImageStyle: {
    height: '100%',
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#707070',
  },
});

export default styles;
