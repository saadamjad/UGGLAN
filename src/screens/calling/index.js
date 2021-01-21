import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import {Platform, ScrollView, Text, TouchableOpacity, View ,ImageBackground} from 'react-native';
import RtcEngine, {
  RtcLocalView,
  RtcRemoteView,
  VideoRenderMode,
} from 'react-native-agora';
import {connect} from 'react-redux';
import GlobalHeader from '../../components/header';


import requestCameraAndAudioPermission from './Permission';
import styles from './styles';

class App extends Component {
  // _engine?: RtcEngine;
  _engine = RtcEngine;

  constructor(props) {
    // console.log('props',props.route.params.id)
    super(props);
    this.state = {
      appId: 'a4a97cff51ed4d9786032b5e58903c72',
      token:
        '006a4a97cff51ed4d9786032b5e58903c72IACcagp6X2QeVGJelofgeLby3bUKP7pr9Z/VnQkiKuD8NE26FwAAAAAAEAC0V+Lrnq4KYAEAAQCcrgpg',
      channelName: 'UGGLAN',
      joinSucceed: false,
      peerIds: [],
      // userId: this.props.userData.user._id,
      // friendId: props.route.params.id,
    };
    if (Platform.OS === 'android') {
      // Request required permissions from Android
      requestCameraAndAudioPermission().then(() => {
        console.log('requested!');
      });
    }
  }

  componentDidMount() {
    this.init();
    // let userId=this.props.userData.user._id
    // this.setState({userId:userId})
  }

  /**
   * @name init
   * @description Function to initialize the Rtc Engine, attach event listeners and actions
   */
  init = async () => {
    // console.log('When Rtc Create',this.state)
    const {appId} = this.state;
    this._engine = await RtcEngine.create(appId);
    await this._engine.enableAudio();
    // console.log('Rtc created ',this._engine)
    this._engine.addListener('Warning', (warn) => {
      console.log('Warning', warn);
    });

    this._engine.addListener('Error', (err) => {
      console.log('Error', err);
    });

    this._engine.addListener('UserJoined', (uid, elapsed) => {
      console.log('UserJoined', uid, elapsed);
      // Get current peer IDs
      const {peerIds} = this.state;
      // If new user
      if (peerIds.indexOf(uid) === -1) {
        this.setState({
          // Add peer ID to state array
          peerIds: [...peerIds, uid],
        });
      }
    });

    this._engine.addListener('UserOffline', (uid, reason) => {
      console.log('UserOffline', uid, reason);
      const {peerIds} = this.state;
      this.setState({
        // Remove peer ID from state array
        peerIds: peerIds.filter((id) => id !== uid),
      });
    });

    // If Local user joins RTC channel
    this._engine.addListener('JoinChannelSuccess', (channel, uid, elapsed) => {
      console.log('JoinChannelSuccess', channel, uid, elapsed);
      // Set state variable to true
      this.setState({
        joinSucceed: true,
      });
    });
  };
  // joinId = () => {
  //   // let channelname=this.state.userId.concat("",this.state.friendId)
  //   // console.log('joins',channelname)

  //   let str1 = this.state.userId;
  //   let str2 = this.state.friendId;

  //   let str3 = str1.concat('', str2);
  //   console.log('joisbbshs', str3);
  //   this.setState({channelName: str3});
  // };

  /**
   * @name startCall
   * @description Function to start the call
   */
  startCall = async () => {
    // Join Channel using null token and channel name
    console.log('When click On start Call', this.state);
    await this._engine?.joinChannel(
      this.state.token,
      this.state.channelName,

      null,
      0,
    );
  };

  /**
   * @name endCall
   * @description Function to end the call
   */
  endCall = async () => {
    await this._engine?.leaveChannel();
    this.setState({peerIds: [], joinSucceed: false});
    console.log('When click On end Call', this.state);
  };

  render() {
    return (
      <ImageBackground 
      
      source={require('../../assets/images/bg_image.png')}
    
      
      style={styles.ImageBackgroundCall}
      >
         {/* <GlobalHeader
          screenText={'Audio Call'}
          navigation={this.props.navigation}
          isBack={true}
        /> */}
      <View style={styles.max}>
        <View style={styles.max}>
          {this._renderVideos()}
         
          <View style={styles.buttonHolder}>
            <TouchableOpacity onPress={this.startCall} style={styles.button}>
              <Text style={styles.buttonText}> Start AudioCall </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.endCall} style={styles.button}>
              <Text style={styles.buttonText}> End Call </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ImageBackground>
    );
  }

  _renderVideos = () => {
    const {joinSucceed} = this.state;
    return joinSucceed ? (
      <View style={styles.fullView}>
        <RtcLocalView.SurfaceView
          style={styles.max}
          channelId={this.state.channelName}
          renderMode={VideoRenderMode.Hidden}
        />
        {this._renderRemoteVideos()}
      </View>
    ) : null;
  };

  _renderRemoteVideos = () => {
    const {peerIds} = this.state;
    return (
      <ScrollView
        style={styles.remoteContainer}
        contentContainerStyle={{paddingHorizontal: 2.5}}
        horizontal={true}>
        {peerIds.map((value) => {
          console.log('peeridhbhc', value);
          return (
            <RtcRemoteView.SurfaceView
              style={styles.remote}
              uid={value}
              channelId={this.state.channelName}
              renderMode={VideoRenderMode.Hidden}
              zOrderMediaOverlay={true}
            />
          );
        })}
      </ScrollView>
    );
  };
}

mapStateToProps = (state) => ({
  isLoading: state.AllContactsReducer.isLoading,
  // hirePersonelData: state.HireSomeOneReducer.hirePersonelData,
  allContacts: state.AllContactsReducer.allContacts,
  userData: state.AuthReducer.userData,
});

export default connect(mapStateToProps, null)(App);
