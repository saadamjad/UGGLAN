/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect,useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert
} from 'react-native';
import 'react-native-gesture-handler';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Stack from './src/navigations/stacknavigation';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './src/store/store';
import OneSignal from 'react-native-onesignal';

const App = (props) => {
  const [state,setState]=useState({
    requiresPrivacyConsent :'',
    isSubscribed:''
  })
  useEffect(async () => {
    /* O N E S I G N A L   S E T U P */
    OneSignal.setAppId('72213651-048b-4a7d-a149-25bbc0a014eb');
    OneSignal.setLogLevel(6, 0);
    OneSignal.setRequiresUserPrivacyConsent(state.requiresPrivacyConsent);
    OneSignal.postNotification((response) => {
      OSLog('Prompt response:', response);
    });

    /* O N E S I G N A L  H A N D L E R S */
    OneSignal.setNotificationWillShowInForegroundHandler(
      (notifReceivedEvent) => {
        OSLog(
          'OneSignal: notification will show in foreground:',
          notifReceivedEvent,
        );
        let notif = notifReceivedEvent.getNotification();

        const button1 = {
          text: 'Cancel',
          onPress: () => {
            notifReceivedEvent.complete();
          },
          style: 'cancel',
        };

        const button2 = {
          text: 'Complete',
          onPress: () => {
            notifReceivedEvent.complete(notif);
          },
        };

        Alert.alert('Complete notification?', 'Test', [button1, button2], {
          cancelable: true,
        });
      },
    );
    OneSignal.setNotificationOpenedHandler((notification) => {
      OSLog('OneSignal: notification opened:', notification);
    });
    OneSignal.setInAppMessageClickHandler((event) => {
      OSLog('OneSignal IAM clicked:', event);
    });
    OneSignal.addEmailSubscriptionObserver((event) => {
      OSLog('OneSignal: email subscription changed: ', event);
    });
    OneSignal.addSubscriptionObserver((event) => {
      OSLog('OneSignal: subscription changed:', event);
      setState({isSubscribed: event.to.isSubscribed});
    });
    OneSignal.addPermissionObserver((event) => {
    OSLog('OneSignal: permission changed:', event);
    });

    const deviceState = await OneSignal.getDeviceState();

    setState({
      isSubscribed: deviceState.isSubscribed,
    });
  }, []);

  // useEffect(()=>{
  //   OneSignal.setAppId("72213651-048b-4a7d-a149-25bbc0a014eb");
  //   OneSignal.setLogLevel(6, 0);
  //   OneSignal.setRequiresUserPrivacyConsent(this.state.requiresPrivacyConsent);
  //   OneSignal.promptForPushNotificationsWithUserResponse(response => {
  //       this.OSLog("Prompt response:", response);
  // },[])

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar barStyle="dark-content" />
          <Stack navigation={props.navigation} />
        </PersistGate>
      </Provider>
    </>
  );
};

export default App;
