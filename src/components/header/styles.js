import {Platform, StyleSheet} from 'react-native';
const styles = StyleSheet.create({

//  =========LinearGradientGlobalHeaderMain======

LinearGradientGlobalMain:{
    elevation: 0,
        borderBottomWidth: 0,
        flexDirection: 'row',
        // borderWidth: 1,
        // backgroundColor: '',
        borderColor: 'red',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-around',
},


// ======TouchableOpacityOfBack=====
TouchableOpacityOfBack:{

},

BackIcon:{
    color: 'white', fontSize: 21
},
ScreenText:{
    color: 'white', marginLeft: 5, fontSize: 17
},



// ========TouchableOpacityOfMonth======
TouchableOpacityOfMonth:{
    borderWidth: 1,
    borderColor: 'orange',
    width: 80,
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 28,
    paddingHorizontal: 5,
    borderRadius: 5,
    flexDirection: 'row',
},
MonthText:{
    color: 'white'
},
IconDown:{
    color: 'white', fontSize: 12
},



// =======toggleDrawerMenu======
toggleDrawerMenuView:{
    elevation: 0,
    borderBottomWidth: 0,
    flexDirection: 'row',
    // borderWidth: 1,
    // backgroundColor: '',
    borderColor: 'red',
    height: 50,
    alignItems: 'center',
    alignSelf: 'center',
    width: '90%',
    justifyContent: 'space-between',
},
TouchableOpacityOfMenu:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -15,
    // alignItems: 'center',
},
toggleDrawerMenuIcon:{
    color: 'white', fontSize: 32
},


// =======toggleDrawerUsersView=====
toggleDrawerUsersView:{
    justifyContent: 'center',
    alignItems: 'center',
},

UgglanTextMainScreen:{
    color: 'white', fontSize: 18, fontWeight: 'bold'
},
TouchableOpacityOfUsers:{
    justifyContent: 'center',
    alignItems: 'center',
},
toggleDrawerUsersIcon:{
    color: 'white'
}
});
export default styles;
