import React, {useState} from 'react';
import {View, Text, Image, SafeAreaView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import ToggleSwitch from 'toggle-switch-react-native';

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <SafeAreaView style={{backgroundColor: '#000000', flex: 1}}>
      <View style={{width: '90%', alignSelf: 'center'}}>
        <View style={{flexDirection: 'row', marginVertical: 20}}>
          <AntDesign
            name="left"
            size={19}
            color="#C0C0C0"
            style={{height: 19, width: 19}}
          />
          <Text style={{color: '#FFFFFF', marginLeft: 3}}>
            Select payment method
          </Text>
        </View>

        {/* ==========Map View========== */}

        <View
          style={{
            flexDirection: 'row',
            marginVertical: 20,
            alignItems: 'center',
          }}>
          <FontAwesome5
            name="map-marked-alt"
            size={25}
            color="#C0C0C0"
            style={{height: 31.11, width: 35}}
          />
          <Text style={{color: '#FFFFFF', fontSize: 16}}>Map View</Text>
        </View>

        {/* ============Box Row============ */}

        <View
          style={{
            flexDirection: 'row',
            height: 40,
            width: '100%',
            marginBottom: 10,
          }}>
          {/* ====Box 1==== */}
          <View
            style={{
              width: '50%',
              borderWidth: 1,
              borderColor: '#F6931B',
              borderRadius: 3,
              backgroundColor: '#F6931B',
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFFFFF', fontSize: 12, textAlign: 'center'}}>
              Street View
            </Text>
          </View>

          {/* ====Box 2==== */}
          <View
            style={{
              width: '50%',
              borderWidth: 1,
              borderColor: '#F6931B',
              borderRadius: 3,
              //   marginLeft: 25,
              justifyContent: 'center',
            }}>
            <Text style={{color: '#FFFFFF', fontSize: 12, textAlign: 'center'}}>
              Satalite View
            </Text>
          </View>
        </View>

        <View>
          <Text style={{color: '#FFFFFF', fontSize: 12}}>
            Select preferred map view mode.
          </Text>
        </View>

        {/* ==========Video Recording========== */}

        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            marginVertical: 10,
            alignItems: 'center',
          }}>
          <Ionicons
            name="videocam"
            size={25}
            color="#C0C0C0"
            style={{height: 31.11, width: 35}}
          />
          <View
            style={{
              width: '87%',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 16,
                height: 20,
                width: '87%',
              }}>
              Video Recording
            </Text>
            <ToggleSwitch
              isOn={toggle}
              onColor="#F6931B"
              offColor="#DE2516"
              //   label="Video Recording"
              //   labelStyle={{color: '#FFFFFF', fontSize: 16, width: '50%'}}
              size="small"
              onToggle={(isOn) => setToggle(isOn)}
            />
          </View>
        </View>

        <View style={{width: '100%'}}>
          <Text style={{color: '#FFFFFF', fontSize: 12, lineHeight: 18}}>
            Protect yourself by keeping alarm video recording enabled. This
            allows UGGLAN to record and securely store the video of what is
            happening in case alarm is triggered.
          </Text>
        </View>

        {/* ==========Video Streaming========== */}

        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            marginVertical: 10,
            alignItems: 'center',
          }}>
          <Entypo
            name="video-camera"
            size={25}
            color="#C0C0C0"
            style={{height: 31.11, width: 35}}
          />
          <View
            style={{
              width: '87%',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 16,
                height: 20,
                width: '87%',
              }}>
              Video Streaming
            </Text>
            <ToggleSwitch
              isOn={toggle}
              onColor="#F6931B"
              offColor="#DE2516"
              //   label="Video Recording"
              //   labelStyle={{color: '#FFFFFF', fontSize: 16, width: '50%'}}
              size="small"
              onToggle={(isOn) => setToggle(isOn)}
            />
          </View>
        </View>

        <View style={{width: '100%'}}>
          <Text style={{color: '#FFFFFF', fontSize: 12, lineHeight: 18}}>
            In case of emergrncy video of what is happening will be streamed
            live to your safety network. Maximum video streaming limit is 5
            minutes.
          </Text>
        </View>

        {/* ==========Alarm Delay========== */}

        <View
          style={{
            flexDirection: 'row',
            marginTop: 30,
            marginVertical: 10,
            alignItems: 'center',
            width: '100%',
          }}>
          <Ionicons
            name="alarm"
            size={25}
            color="#C0C0C0"
            style={{height: 31.11, width: 32}}
          />
          <View style={{width: '80%'}}>
            <Text style={{color: '#FFFFFF', fontSize: 16, height: 20}}>
              Alarm Delay
            </Text>
          </View>

          <Text style={{color: '#F6931B', fontSize: 15, height: 20}}>
            5 Sec
          </Text>
        </View>
        {/* ================== */}

        {/* ================== */}

        <View style={{width: '100%'}}>
          <Text style={{color: '#FFFFFF', fontSize: 12, lineHeight: 18}}>
            Number of seconds from when the emergency button is pushed until the
            alarm is triggered
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
