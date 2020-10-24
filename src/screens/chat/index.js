import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat, Bubble, Send} from 'react-native-gifted-chat';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';

function Chat(props) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);
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
        <Text style={{color: 'white', fontSize: 18}}>David</Text>
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
        messages={messages}
        renderSend={renderSend}
        onSend={(messages) => onSend(messages)}
        renderBubble={renderBubble}
        user={{
          _id: 1,
        }}
      />
    </SafeAreaView>
  );
}
export default Chat;
