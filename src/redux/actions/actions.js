// import * as actionTypes from '../actions/types';
// // import {NavigationActions, StackActions} from 'react-navigation';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';
// import {Alert} from 'react-native';
// import AsyncStorage from '@react-native-community/async-storage';

// export const Login = (navigation, userdata) => async (dispatch) => {
//   dispatch({
//     type: actionTypes.STARTLOADER,
//   });
//   auth()
//     .signInWithEmailAndPassword(userdata.email, userdata.password)
//     .then((res) => {
//       console.log('done', res);
//       if (res.user.emailVerified) {
//         console.log('liogn in ', res.user.uid);
//         let uid = res.user.uid;
//         dispatch({
//           type: actionTypes.UID,
//           paylaod: {uId: uid},
//         });
//         dispatch({
//           type: actionTypes.USERDATA,
//           paylaod: {...userdata, userdata},
//         });

//         dispatch({
//           type: actionTypes.STOPLOADER,
//         });

//         AsyncStorage.setItem('isLoggedin', JSON.stringify(true)).then((res) => {
//           console.log('res====', res);
//           navigation.navigate('home');
//         });
//       } else {
//         alert('kindly verify your email address ');
//         dispatch({
//           type: actionTypes.STOPLOADER,
//         });
//       }
//     })
//     .catch((err) => {
//       console.log('err', err.code);
//       if (err.code === 'auth/invalid-email') {
//         dispatch({
//           type: actionTypes.STOPLOADER,
//         });
//         alert('You entered an invalid email address, please correct.');
//       } else if (err.code === 'auth/email-already-in-use') {
//         dispatch({
//           type: actionTypes.STOPLOADER,
//         });
//         alert('The email address is already in use by another account.');
//       } else {
//         dispatch({
//           type: actionTypes.STOPLOADER,
//         });
//         alert(err.code);
//       }
//     });
// };

// export const Signup = (navigation, userdata) => async (dispatch) => {
//   dispatch({
//     type: actionTypes.STARTLOADER,
//   });
//   auth()
//     .createUserWithEmailAndPassword(userdata.email, userdata.password)
//     .then((res) => {
//       console.log('User created!', res);
//       const ref = firestore().collection('Bokshopusers').doc(res.user.uid);
//       Alert.alert(
//         '',
//         'Your account has been created and verification email has been sent to your email: ' +
//           userdata.email +
//           ' Kindly first verify your email from there.',
//         [
//           {
//             text: 'OK',
//             onPress: () => navigation.navigate('login'),
//           },
//         ],
//         {cancelable: false},
//       );
//       auth()
//         .currentUser.sendEmailVerification()
//         .then(async () => {
//           await ref.set({
//             firstname: userdata.firstname,
//             lastname: userdata.lastname,
//             phone: userdata.phone,
//             email: userdata.email,
//             password: userdata.password,
//             confirmPassword: userdata.confirmPassword,
//           });
//         })
//         .catch(async () => {
//           dispatch({
//             type: actionTypes.STOPLOADER,
//           });
//         });
//       dispatch({
//         type: actionTypes.STOPLOADER,
//       });
//       dispatch({
//         type: actionTypes.USERDATA,
//         paylaod: {...userdata, userdata, uId: res.user.uid},
//       });
//     })
//     .catch((err) => {
//       console.log('err', err.code);
//       if (err.code === 'auth/invalid-email') {
//         dispatch({
//           type: actionTypes.STOPLOADER,
//         });
//         alert('You entered an invalid email address, please correct.');
//       } else if (err.code === 'auth/email-already-in-use') {
//         dispatch({
//           type: actionTypes.STOPLOADER,
//         });
//         alert('The email address is already in use by another account.');
//       } else {
//         dispatch({
//           type: actionTypes.STOPLOADER,
//         });
//         alert(err.code);
//       }
//     });
// };

// export const Mydetails = (userid) => async (dispatch) => {
//   console.log('function running mydetials', userid);
//   dispatch({
//     type: actionTypes.STARTLOADER,
//   });
//   const user = await firestore()
//     .collection('Bokshopusers')
//     .doc(userid)
//     .get()
//     .then((user) => {
//       console.log('resss', user._data);
//       let myDetails = user._data;
//       dispatch({
//         type: actionTypes.MYDETAILS,
//         paylaod: {...myDetails, myDetails},
//       });
//       dispatch({
//         type: actionTypes.STOPLOADER,
//       });
//     })
//     .catch((e) => {
//       console.log('error', e);
//       dispatch({
//         type: actionTypes.STOPLOADER,
//       });
//     });
// };
// export const Updatemydetails = (data) => async (dispatch) => {
//   console.log('Updatemydetails===>>', data);
//   dispatch({
//     type: actionTypes.STARTLOADER,
//   });
//   const updateref = firestore().collection('Bokshopusers').doc(data.userId);
//   updateref
//     .update({
//       firstname: data.firstname,
//       lastname: data.lastname,
//       phone: data.phone,
//     })
//     .then((res) => {
//       console.log('User updated!', res),
//         dispatch({
//           type: actionTypes.STOPLOADER,
//         });
//     });
//   dispatch({
//     type: actionTypes.MYDETAILS,
//     paylaod: {...data, data},
//   });
// };

// export const Logout = (navigation) => async (dispatch) => {
//   console.log('logout');
//   auth()
//     .signOut()
//     .then(
//       () => console.log('User signed out!'),
//       dispatch({
//         type: actionTypes.ISLOGGEDIN,
//         paylaod: false,
//       }),

//       AsyncStorage.removeItem('isLoggedin').then((res) => {
//         console.log('LOGOUT', res);
//         navigation.navigate('login');
//       }),
//       // this.props.navigation.navigate('login'),
//     );
// };
