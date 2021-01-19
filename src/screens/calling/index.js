import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  PermissionsAndroid,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import RtcEngine, {
  RtcLocalView,
  RtcRemoteView,
  StreamFallbackOptions,
  VideoRenderMode,
} from 'react-native-agora';
// import RtcEngine from 'react-native-agora';

const App = (props) => {
  const [state, setState] = useState({
    appId: 'a4a97cff51ed4d9786032b5e58903c72',
    token:
      '006a4a97cff51ed4d9786032b5e58903c72IAC58PBiQAZCiQkkWRXvCVSh0LUMdEnO1TeJicU9AbHgK026FwAAAAAAEAC0V+Lr4N8HYAEAAQDg3wdg',
    channelName: 'UGGLAN',
    joinSucceed: false,
    peerIds: [],
  });
  let _engine;
  useEffect(() => {
    requestCameraAndAudioPermission();
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
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ]);
      if (
        granted['android.permission.RECORD_AUDIO'] ===
          PermissionsAndroid.RESULTS.GRANTED &&
        granted['android.permission.CAMERA'] ===
          PermissionsAndroid.RESULTS.GRANTED
      ) {
        console.log('You can use the cameras & mic');
      } else {
        console.log('Permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const init = async () => {
    // const { appId } = this.state;
    let appId = 'a4a97cff51ed4d9786032b5e58903c72';
    // console.log('eeeee');

    _engine = await RtcEngine.create(appId);
    await _engine.enableVideo();

    _engine.addListener('Warning', (warn) => {
      console.log('Warning', warn);
    });

    _engine.addListener('Error', (err) => {
      console.log('Error', err);
    });

    _engine.addListener('UserJoined', (uid, elapsed) => {
      console.log('UserJoined', uid, elapsed);
      // Get current peer IDs
      // const { peerIds } = this.state;
      // If new user
      if (state.peerIds.indexOf(uid) === -1) {
        setState({
          peerIds: [...peerIds, uid],
        });
      }
    });

    _engine.addListener('UserOffline', (uid, reason) => {
      console.log('UserOffline', uid, reason);
      // const { peerIds } = this.state;
      setState({
    
        // Remove peer ID from state array
        peerIds: state.peerIds.filter((id) => id !== uid),
      });
    });

    // If Local user joins RTC channel
    _engine.addListener('JoinChannelSuccess', (channel, uid, elapsed) => {
      console.log('JoinChannelSuccess', channel, uid, elapsed);
      // Set state variable to true
      setState({
        joinSucceed: true,
      });
    });
    _engine.addListener('LeaveChannel', (channel, uid, elapsed) => {
      console.log('Channel Leaved Successfully', channel, uid, elapsed);
      setState({...state, peerIds: [], joinSucceed: false});
     
     
    });
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
    // alert('hddg')
    console.log('start call')
    // Join Channel using null token and channel name
    // console.log('ALL DETAIL BEFORE JOINING', state.peerIds[3]);

    await _engine?.joinChannel(state.token, state.channelName, null, 0);
   
 
  };

const  endCall = async () => {

console.log('ended call')
    // alert('end call')
    await _engine?.leaveChannel();
    // // await _engine?.leaveChannel();
    setState({ peerIds: [], joinSucceed: false});
    props.navigation.navigate('call');
    // console.log('props',props)
  //  _engine?.muteLocalAudioStream()
  RtcLocalView.stop()
    
   
 
   
  };

  return (
    <View style={styles.max}>
    <View style={styles.max}>
    {_renderVideos()}
      <View style={styles.buttonHolder}>
        <TouchableOpacity onPress={()=>startCall()} style={styles.button}>
          <Text style={styles.buttonText}> Start Call </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>endCall()} style={styles.button}>
          <Text style={styles.buttonText}> End Call </Text>
        </TouchableOpacity>
      </View>
     
    </View>
  </View>
  
  );
};

export default App;


// {_renderVideos()}