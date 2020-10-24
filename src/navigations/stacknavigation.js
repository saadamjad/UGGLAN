import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import login from '../screens/login';
import Profile from '../screens/profile';
import {Image, View, Text, Settings} from 'react-native';
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
import SosPopup from '../components/popup';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from './drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from 'native-base';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native-gesture-handler';
import BottomTabNavigation from './bottomTabNavigation';
import selectlangauge from '../screens/select_language';
import Home from '../screens/Home';
import history from '../screens/history';
import HomeLiveLocation from '../screens/HomeLiveLocation';
import Chat from '../screens/chat';
import TrackPerson from '../screens/trackperson';
const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerStyle={{backgroundColor: 'transparent'}}
      drawerContentOptions={{
        activeTintColor: '#4C5AC9',
        itemStyle: {marginVertical: 30},
      }}
      drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="My Profile" component={MyTabs} />
      <Drawer.Screen name="Settings" component={settings} />
      <Drawer.Screen name="History" component={history} />
    </Drawer.Navigator>
  );
}
function AuthStack() {
  return (
    <Stack.Navigator>
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
      <Stack.Screen name="otp" component={otp} options={{headerShown: false}} />
      <Stack.Screen
        name="newpassword"
        component={newpassword}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="loginpage"
        component={loginpage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="chat"
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="trackperson"
        component={TrackPerson}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="allcontacts"
        component={allcontacts}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SosPopup"
        component={SosPopup}
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
        name="payMasterCard"
        component={payMasterCard}
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
  );
}
function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="allcontacts"
        component={allcontacts}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="trackperson"
        component={TrackPerson}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="chat"
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="selectlangauge"
        component={selectlangauge}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SosPopup"
        component={SosPopup}
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
        name="payMasterCard"
        component={payMasterCard}
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
  );
}

function LiveLocationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeLiveLocation"
        component={HomeLiveLocation}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="trackperson"
        component={TrackPerson}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="chat"
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="call"
        component={call}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="allcontacts"
        component={allcontacts}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="selectlangauge"
        component={selectlangauge}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SosPopup"
        component={SosPopup}
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
        name="payMasterCard"
        component={payMasterCard}
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
  );
}
function CallStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="call"
        component={call}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="chat"
        component={Chat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="allcontacts"
        component={allcontacts}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="trackperson"
        component={TrackPerson}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="selectlangauge"
        component={selectlangauge}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SosPopup"
        component={SosPopup}
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
        name="payMasterCard"
        component={payMasterCard}
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
  );
}

function App() {
  return (
    <NavigationContainer headerMode="none">
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeStacks"
          component={MyDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PayMasterCard"
          component={payMasterCard}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      tabBar={(props) => <BottomTabNavigation {...props} />}
      // tabBarOptions={{
      //   inactiveTintColor: 'white',
      //   activeTintColor: '#e91e63',
      //   iconStyle: {color: 'white', fontSize: 24},
      //   labelStyle: {
      //     fontSize: 14,
      //   },
      //   style: {
      //     backgroundColor: 'pink',
      //     height: 65,
      //   },
      // }}
    >
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="home"
              type="AntDesign"
              style={{fontSize: size, color: color}}
            />
          ),
        }}
        component={HomeStack}
      />
      <Tab.Screen
        name="Call"
        options={{
          tabBarLabel: 'Call',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="phone"
              type="FontAwesome"
              style={{fontSize: size, color: color}}
            />
          ),
        }}
        component={CallStack}
      />
      <Tab.Screen
        name="Pop"
        options={{
          tabBarIcon: ({color, size}) => (
            <Image
              style={{width: 80, height: 80, marginTop: -40}}
              source={require('../assets/icons/siren2.png')}
            />
          ),
          tabBarLabel: '',
        }}
        component={call}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Live Location',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="share"
              type="Entypo"
              style={{fontSize: size, color: color}}
            />
          ),
        }}
        name="Live Location"
        component={LiveLocationStack}
      />
      <Tab.Screen
        options={{
          tabBarLabel: 'Timer',
          tabBarIcon: ({color, size}) => (
            <Icon
              name="timer"
              type="MaterialIcons"
              style={{fontSize: size, color: color}}
            />
          ),
        }}
        name="Timer"
        component={MainStack}
      />
    </Tab.Navigator>
    // </LinearGradient>
  );
}

export default App;
