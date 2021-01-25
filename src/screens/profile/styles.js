import {Platform, StyleSheet} from 'react-native';


const styles=StyleSheet.create({

    // ======ImageBackgroundProfileMain=====

    ImageBackgroundProfileMain:{
        height: '100%',
        width: '100%',
    },
    SafeAreaViewProfile:{
        flex: 1, marginTop: 20, width: '90%', alignSelf: 'center'
    },


    // ======ProfileImageMain=====

    ProfileImageMain:{
        alignItems: 'center'
    },
    ProfileImageView:{
        borderRadius: 100,
        borderWidth: 0.5,
        borderColor: 'white',
        marginBottom: 50,
    },
    ImageBackgroundProfilePic:{
        height: 100, width: 100
    },
    PlusIconView:{
        position: 'absolute', bottom: -10
    },
    PlusIconColor:{
        marginLeft: 75,
        marginBottom: 15,
        borderRadius: 20,
        overflow: 'hidden',
    },


    // =======FullNameView======

    FullNameView:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#C0C0C0',
        alignItems: 'center',
        width: '100%',
    },
    TextInputFullName:{
        color: 'white',
        width: '90%',
        height: 40,
    },
    UserIcon:{
        alignItems: 'flex-end',
        height: 15.87,
        // width: 13.34,
    },



    // =====PhoneRowView====

    PhoneRowView:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#C0C0C0',
        alignItems: 'center',
        width: '100%',
    },
    TextInputPhoneRow:{
        color: 'white',
        width: '90%',
        height: 40,
    },
    PhoneIconView:{
        width: '15%'
    },
    PhoneIcon:{
        alignItems: 'flex-end',
        height: 13.31,
        width: 20.07,
    },

    // =====EmailRowView=====

    EmailRowView:{
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#C0C0C0',
        alignItems: 'center',
        width: '100%',
    },
    TextInputEmailRow:{
        color: 'white',
        width: '90%',
        height: 40,
    },
    EmailIconView:{
        width: '15%'
    },
    EmailIcon:{
        alignItems: 'flex-end',
        height: 13.31,
        width: 20.07,
    },


    // =====LinearGradientButton====
    
    LinearGradientButton:{
        width: 301,
        marginTop: 40,
        height: 42,
        alignSelf: 'center',
        marginVertical: 10,
        borderRadius: 3,
    }
})

export default styles