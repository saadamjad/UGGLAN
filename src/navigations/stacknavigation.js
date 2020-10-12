import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import login from '../screens/login';

import {Image, View, Text} from 'react-native';
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
function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="allcontacts"
        component={allcontacts}
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
          name="allcontacts"
          component={MyDrawer}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      tabBar={({state, descriptors, navigation}) => {
        const focusedOptions =
          descriptors[state.routes[state.index].key].options;
        console.log('BHAIYAA', focusedOptions);
        return (
          <LinearGradient
            style={{
              height: 65,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
            colors={['#F6931B', '#DE2516']}>
            {[
              {
                name: 'Home',
                icon: (
                  <Icon
                    name="home"
                    type="AntDesign"
                    style={{
                      fontSize: 25,
                      color:
                        focusedOptions.tabBarLabel == 'Home'
                          ? 'black'
                          : 'white',
                    }}
                  />
                ),
              },
              {
                name: 'Call',
                icon: (
                  <Icon
                    name="phone"
                    type="FontAwesome"
                    style={{
                      fontSize: 25,
                      color:
                        focusedOptions.tabBarLabel == 'Call'
                          ? 'black'
                          : 'white',
                    }}
                  />
                ),
              },
              {
                name: '',
                icon: (
                  <Image
                    style={{width: 80, height: 80, marginTop: -40}}
                    source={require('../assets/icons/siren2.png')}
                  />
                ),
              },
              {
                name: 'Live Location',
                icon: (
                  <Icon
                    name="share"
                    type="Entypo"
                    style={{
                      fontSize: 25,
                      color:
                        focusedOptions.tabBarLabel == 'Live Location'
                          ? 'black'
                          : 'white',
                    }}
                  />
                ),
              },
              {
                name: 'Timer',
                icon: (
                  <Icon
                    name="timer"
                    type="MaterialIcons"
                    style={{
                      fontSize: 25,
                      color:
                        focusedOptions.tabBarLabel == 'Timer'
                          ? 'black'
                          : 'white',
                    }}
                  />
                ),
              },
            ].map((val) => (
              <View
                style={{
                  height: '100%',
                  width: '20%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    const event = navigation.emit({
                      type: 'tabPress',
                      target: val.name,
                      canPreventDefault: true,
                    });
                    if (!event.defaultPrevented) navigation.navigate(val.name);
                  }}
                  style={{
                    width: '100%',
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {val.icon}
                  <Text
                    style={{
                      color:
                        focusedOptions.tabBarLabel == val.name
                          ? 'black'
                          : 'white',
                      fontSize: 14,
                    }}>
                    {val.name.length <= 6
                      ? val.name
                      : val.name.substring(0, 6).concat('...')}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </LinearGradient>
        );
      }}
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
        component={MainStack}
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
        component={call}
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
        component={MainStack}
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
