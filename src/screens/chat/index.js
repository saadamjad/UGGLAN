import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, Bubble, Send} from 'react-native-gifted-chat';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import {connect} from 'react-redux';
import {HireSomeOneAction, UserMessageAction} from '../../store/actions';
import io from 'socket.io-client';

function Chat(props) {
  const [messages, setMessages] = useState({messages: []});
  const [state, setState] = useState({
    hirePersonelData: {},
    UserData: {},
    userMessage: '',
    // socket:''
  });
  const [socket, setSocket] = useState(io('http://192.168.18.96:4500'));

  useEffect(() => {
    _getUserMessage();
    // array();
  }, []);
  useEffect(() => {
    // const socket=io('http://192.168.18.96:4500')

    socket.on('chat', function (messageFromBackEnd) {
      props.SetUserMessage(messageFromBackEnd);
      // console.log('Message from Socket',messageFromBackEnd)
    });

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
      userId: state.userData._id,
      // userEmail: state.userData.email,
      to: state.hirePersonelData.id,
      message: state.userMessage,
    };
    // console.log('sending data', data, token);
    socket.emit('chat', data);
    // props.UserMessage(data, token, props.navigation, _getUserMessage);
  };
  const setCustomText = async (value, name) => {
    // console.log('messages of user', value);
    setState({...state, [name]: value});
  };
  const ChatHeader = () => (
    <View style={styles.ChatHeaderMainView}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
        <Icon style={styles.arrowLeftIcon} name="left" type="AntDesign" />
      </TouchableOpacity>
      <View style={styles.nameView}>
        <Text style={styles.nameText}>{state?.hirePersonelData?.name}</Text>
        <Text style={styles.OnlineNowText}>Online now</Text>
      </View>
      <TouchableOpacity onPress={() => props.navigation.navigate('calling')}>
        <Icon style={styles.phoneIcon} name="phone" type="FontAwesome" />
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
        <View style={styles.sendIconView}>
          <LinearGradient
            style={styles.LinearGradientSendIcon}
            colors={['#F6931B', '#DE2516']}>
            <Image
              style={styles.sendImage}
              source={require('../../assets/icons/send.png')}
            />
          </LinearGradient>
        </View>
      </Send>
    );
  };

  return (
    <SafeAreaView style={styles.SafeAreaViewGiftedChat}>
      {ChatHeader()}
      <GiftedChat
        messages={messages.messages}
        renderSend={renderSend}
        onSend={() => onSend()}
        renderBubble={renderBubble}
        user={{
          _id: state?.userData?._id,
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
  SetUserMessage: UserMessageAction.SetUserMessage,
  GetUserMessage: UserMessageAction.GetUserMessage,
};
export default connect(mapStateToProps, mapDispatchToProps)(Chat);
