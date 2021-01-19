import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import RtcEngine, {
  RtcLocalView,
  RtcRemoteView,
  VideoRenderMode,
} from 'react-native-agora';

const App = (props) => {
  const [state, setState] = useState({
    appId: 'a4a97cff51ed4d9786032b5e58903c72',
    token:
      '006a4a97cff51ed4d9786032b5e58903c72IAADwNb+mx04B5mzCijcmudGTdF4wsvRDDp9LhQ76bIfnHhUVXMAAAAAEABXvn0FhYwGYAEAAQCEjAZg',
    channelName: 'asim',
    joinSucceed: false,
    peerIds: [],
  });



  useEffect(() => {
    // requestCameraAndAudioPermission();
    init();

    // if (Platform.OS === 'android') {
    //   // Request required permissions from Android
    //   requestCameraAndAudioPermission().then(() => {
    //     console.log('requested!');
    //   });
    // }

    // startCall()
  }, []);

  const requestCameraAndAudioPermission = async () => {
    try {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ]);
      if (
        granted['android.permission.RECORD_AUDIO'] ===
        PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('You can use the mic');
      } else {
        console.log('Permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const init = async () => {
    // const { appId } = this.state;
    let     appId= 'a4a97cff51ed4d9786032b5e58903c72';
    console.log ("eeeee")

    RtcEngine = await RtcEngine.create(appId);
    console.log ("eeeee",RtcEngine)
    // await RtcEngine.enableVideo();

    // RtcEngine.addListener('Warning', (warn) => {
    //   console.log('Warning', warn);
    // });

    // RtcEngine.addListener('Error', (err) => {
    //   console.log('Error', err);
    // });

    // RtcEngine.addListener('UserJoined', (uid, elapsed) => {
    //   console.log('UserJoined', uid, elapsed);
    //   // Get current peer IDs
    //   // const { peerIds } = this.state;
    //   // If new user
    //   if (state.peerIds.indexOf(uid) === -1) {
    //     this.setState({
    //       // Add peer ID to state array
    //       peerIds: [...peerIds, uid],
    //     });
    //   }
    // });

    // RtcEngine.addListener('UserOffline', (uid, reason) => {
    //   console.log('UserOffline', uid, reason);
    //   // const { peerIds } = this.state;
    //   this.setState({
    //     // Remove peer ID from state array
    //     peerIds: state.peerIds.filter((id) => id !== uid),
    //   });
    // });

    // // If Local user joins RTC channel
    // RtcEngine.addListener('JoinChannelSuccess', (channel, uid, elapsed) => {
    //   console.log('JoinChannelSuccess', channel, uid, elapsed);
    //   // Set state variable to true
    //   setState({
    //     joinSucceed: true,
    //   });
    // });
  };

  const _renderVideos = () => {
    // const { joinSucceed } = this.state;
    return state.joinSucceed ? (
      <View style={styles.fullView}>
        <RtcLocalView.SurfaceView
          style={styles.max}
          channelId={state.channelName}
          renderMode={VideoRenderMode.Hidden}
        />
        {_renderRemoteVideos()}
      </View>
    ) : null;
  };

  const _renderRemoteVideos = () => {
    // const { peerIds } = this.state;
    return (
      <ScrollView
        style={styles.remoteContainer}
        contentContainerStyle={{paddingHorizontal: 2.5}}
        horizontal={true}>
        {state?.peerIds?.map((value) => {
          return (
            <RtcRemoteView.SurfaceView
              style={styles.remote}
              uid={value}
              channelId={state.channelName}
              renderMode={VideoRenderMode.Hidden}
              zOrderMediaOverlay={true}
            />
          );
        })}
      </ScrollView>
    );
  };
  const callingfunction = () => {
    // props.navigation.navigate('hiresomeone');
    alert('caling alert');
  };
  const startCall = async () => {
    console.log('REEEEEE', RtcEngine.joinChannel());
    // Join Channel using null token and channel name
    // await RtcEngine?.joinChannel(
    //   state.token,
    // state.channelName,
    //   null,
    //   0
    // );
  };

  const endCall = async () => {
    await RtcEngine?.leaveChannel();
    setState({peerIds: [], joinSucceed: false});
  };

  return (
    <View style={styles.max}>
      <View style={styles.max}>
        <View style={styles.buttonHolder}>
          <TouchableOpacity onPress={() => startCall()} style={styles.button}>
            <Text style={styles.buttonText}> Start Call </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => endCall()} style={styles.button}>
            <Text style={styles.buttonText}> End Call </Text>
          </TouchableOpacity>
        </View>
        {_renderVideos()}
      </View>
    </View>
  );
};

export default App;
