import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import login from '../screens/login';
import signup from '../screens/signup';
import loginpage from '../screens/login_Page';
import otp from '../screens/otp';
import newpassword from '../screens/new_password';
import allcontacts from '../screens/all_contacts';
import call from '../screens/call';
import calling from '../screens/calling';
import hiresomeone from '../screens/hire someone';
import hireProfile from '../screens/hire_someones_profile';
import shareUGGLAN from '../screens/share_UGGLAN';
import help from '../screens/help';
import addPayment from '../screens/add_payment';
import addNewCard from '../screens/add_new_card';
import selectPaymentMethod from '../screens/selectPaymentMethod';
import payMasterCard from '../screens/payMasterCard';
import thankyou from '../screens/thankyou';
import settings from '../screens/settings';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer headerMode="none">
      <Stack.Navigator>
        <Stack.Screen
          name="payMasterCard"
          component={payMasterCard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="login"
          component={login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="signup"
          component={signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="loginpage"
          component={loginpage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="otp"
          component={otp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="newpassword"
          component={newpassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="allcontacts"
          component={allcontacts}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="call"
          component={call}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="settings"
          component={settings}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="calling"
          component={calling}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="hiresomeone"
          component={hiresomeone}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="hireProfile"
          component={hireProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="shareUGGLAN"
          component={shareUGGLAN}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="help"
          component={help}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="addPayment"
          component={addPayment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="addNewCard"
          component={addNewCard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="selectPaymentMethod"
          component={selectPaymentMethod}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="thankyou"
          component={thankyou}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
