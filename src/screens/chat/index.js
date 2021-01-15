import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, Bubble, Send} from 'react-native-gifted-chat';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {connect} from 'react-redux';
import {HireSomeOneAction, UserMessageAction} from '../../store/actions';
import io from 'socket.io-client';

function Chat(props) {
  const [messages, setMessages] = useState({messages: []});
  const [state, setState] = useState({
    hirePersonelData: {},
    UserData: {},
    userMessage: '',
    socket:''
  });

  useEffect(() => {
    _getUserMessage();
    // array();
  }, []);
  useEffect(() => {
    // const socket=io('http://192.168.18.96:4500')

    let user = props.userData?.user;
    let data = props.hirePersonelData;

    setState({
      ...state,
      userData: user,
      hirePersonelData: data,
      // socket:socket

    });


    array();
  }, [props.getUserMessage]);

  const _getUserMessage = () => {
    // console.log('OH MY GO WOW', props.userData.user._id);
    let to = props.hirePersonelData?.id;
    let token = props.userData?.token;
    // // console.log('ideis',userId,to,token)
    props.GetUserMessage(token, to);
  };

  const array = () => {
    let values = props?.getUserMessage?.map((item, i) => {
      // console.log('item lelo', item);
      return {
        _id: item._id,
        text: item.message,
        createdAt: new Date(),
        user: {
          _id: item.userId,
          name: item.userName,
        },
      };

      // ABC.push(testingArray)
    });
    // console.log('state of data======= ', values);
    setMessages({...messages, messages: [...values]});
  };

  const onSend = () => {
    //  // console.log('data',state.userMessages)
    _onSend();
  };

  const _onSend = () => {
    // console.log('user messages', state.userMessage);
    let token = props.userData.token;
    let data = {
      // userName: state.userData.userName,
      // userId: state.userData._id,
      // userEmail: state.userData.email,
      to: state.hirePersonelData.id,
      message: state.userMessage,
    };
    // console.log('sending data', data, token);
  // state.socket.emit("chat message",state.userMessage)
    props.UserMessage(data, token, props.navigation, _getUserMessage);
  };
  const setCustomText = async (value, name) => {
    // console.log('messages of user', value);
    setState({...state, [name]: value});
  };
  const ChatHeader = () => (
    <View
      style={{
        height: 80,
        width: '100%',
        backgroundColor: '#1C1C1C',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
      }}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Icon
          style={{color: 'white', fontSize: 20}}
          name="left"
          type="AntDesign"
        />
      </TouchableOpacity>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: 'white', fontSize: 18}}>
          {state?.hirePersonelData?.name}
        </Text>
        <Text style={{color: '#41AF26', fontSize: 10}}>Online now</Text>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('calling')}>
        <Icon
          style={{color: 'white', fontSize: 26, marginLeft: 10}}
          name="phone"
          type="FontAwesome"
        />
      </TouchableOpacity>
    </View>
  );

  function renderBubble(props) {
    return (
      // Step 3: return the component
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            // Here is the color change
            backgroundColor: '#F4922F',
            borderBottomRightRadius: 0,
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
    );
  }

  const renderSend = (props) => {
    // // console.log('props',props.messages)
    return (
      <Send
        // containerStyle={{
        //   height: '100%',
        //   width: 60,
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   backgroundColor: 'white',
        // }}
        {...props}>
        <View
          style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            width: 60,
          }}>
          <LinearGradient
            style={{borderRadius: 20, padding: 10}}
            colors={['#F6931B', '#DE2516']}>
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/icons/send.png')}
            />
          </LinearGradient>
        </View>
      </Send>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      {ChatHeader()}
      <GiftedChat
        messages={messages.messages}
        renderSend={renderSend}
        onSend={() => onSend()}
        renderBubble={renderBubble}
        user={{
          _id: props?.userMessage?.userId,
        }}
        // onInputTextChanged={text =>setCustomText(text,'userMessage')}
        onInputTextChanged={(text) => setCustomText(text, 'userMessage')}
      />
    {/* {console.log('soket conectio -----',state.socket)} */}
    </SafeAreaView>
  );
}

mapStateToProps = (state) => ({
  isLoading: state.HireSomeOneReducer.isLoading,
  hirePersonelData: state.HireSomeOneReducer.hirePersonelData,
  userData: state.AuthReducer.userData,
  userMessage: state.UserMessageReducer.userMessage,
  getUserMessage: state.UserMessageReducer.getUserMessage,
});
mapDispatchToProps = {
  // updatedUserAction: ProfileAction.SaveChanges,
  UserMessage: UserMessageAction.UserMessage,
  GetUserMessage: UserMessageAction.GetUserMessage,
};
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
