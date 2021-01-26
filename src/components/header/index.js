import React, {Component} from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {Icon} from 'native-base';
import styles from './styles'
import LinearGradient from 'react-native-linear-gradient';
import RightDrawer from '../rightSideDrawer';
const GlobalHeader = (props) => {
  return (
    <LinearGradient
      colors={
        props.isBack
          ? props.bg
            ? ['#F6931B', '#DE2516']
            : ['transparent', 'transparent']
          : ['#F6931B', '#DE2516']
      }
    
      
    style={styles.LinearGradientGlobalMain}
      >
      {props.isBack ? (
        <>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={{
              width: props.isMonthPicker ? '60%' : '90%',
              flexDirection: 'row',
              alignItems: 'center',
            }} 
            
            // style={styles.TouchableOpacityOfBack}
            >
            <Icon
          
              style={styles.BackIcon}
              name="left"
              type="AntDesign"
            />
            <Text  style={styles.ScreenText}>
              {props.screenText}
            </Text>
          </TouchableOpacity>
          {props.isMonthPicker && (
            <TouchableOpacity
              // onPress={() => co}
            
              style={styles.TouchableOpacityOfMonth}
              >
              <Text  style={styles.MonthText}>Month</Text>
              <Icon
                
                style={styles.IconDown}
                name="down"
                type="AntDesign"
              />
            </TouchableOpacity>
          )}
        </>
      ) : (
        <View
        
          style={styles.toggleDrawerMenuView}
          >
          <TouchableOpacity
            onPress={() => props.navigation.toggleDrawer()}
         
            
            style={styles.TouchableOpacityOfMenu}
            >
            <Icon
          
              style={styles.toggleDrawerMenuIcon}
              name="menu"
              type="MaterialIcons"
            />
          </TouchableOpacity>
          <View
           
            
            style={styles.toggleDrawerUsersView}
            >
            <Text  style={styles.UgglanTextMainScreen}>
              UGGLAN
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => props.toggleDrawer()}
           
            style={styles.TouchableOpacityOfUsers}
            >
            <Icon style={styles.toggleDrawerUsersIcon} name="users" type="FontAwesome5" />
          </TouchableOpacity>
        </View>
      )}
    </LinearGradient>
  );
};
export default GlobalHeader;
