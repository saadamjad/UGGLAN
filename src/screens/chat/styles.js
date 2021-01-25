import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  // ===========ChatHeader=============

  ChatHeaderMainView: {
    height: 80,
    width: '100%',
    backgroundColor: '#1C1C1C',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  arrowLeftIcon: {
    color: 'white',
    fontSize: 20,
  },
  nameView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    color: 'white',
    fontSize: 18,
  },
  OnlineNowText: {
    color: '#41AF26',
    fontSize: 10,
  },
  phoneIcon: {
    color: 'white',
    fontSize: 26,
    marginLeft: 10,
  },

  // =======renderSend==========

  sendIconView: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
  },
  LinearGradientSendIcon: {
    borderRadius: 20,
    padding: 10,
  },
  sendImage: {
    width: 20,
    height: 20,
  },

  // =====GiftedChat=======

  SafeAreaViewGiftedChat: {
    flex: 1,
    backgroundColor: 'black',
  },
});

export default styles;
