export default class ActionType {
  /**
    |--------------------------------------------------
    | Login Action
    |--------------------------------------------------
    */

  static ISLOGGEDIN = 'ISLOGGEDIN';

  static CRF_TOKEN = 'CRF_TOKEN';
  static CRF_TOKEN_SUCCESS = 'CRF_TOKEN_SUCCESS';
  static CRF_TOKEN_FAIL = 'CRF_TOKEN__FAIL';

  static LOGIN = 'LOGIN';
  static LOGIN_SUCCESS = 'LOGIN_SUCCESS';
  static LOGIN_UNSUCCESS = 'LOGIN_UNSUCESS';
  static LOGIN_FAIL = 'LOGIN__FAIL';

  static OTP = 'OTP';
  static OTP_SUCCESS = 'OTP_SUCCESS';
  static OTP_FAIL = 'OTP_FAIL';

  static SET_ROLE = 'SET_ROLE';

  static FACEBOOK_AUTH = 'FACEBOOK_AUTH';
  static FACEBOOK_AUTH_SUCCESS = 'FACEBOOK_AUTH_SUCCESS';
  static FACEBOOK_AUTH_UNSUCCESS = 'FACEBOOK_AUTH_UNSUCESS';
  static FACEBOOK_AUTH_FAIL = 'FACEBOOK_AUTH_FAIL';

  static GMAIL_AUTH = 'GMAIL_AUTH';
  static GMAIL_AUTH_SUCCESS = 'GMAIL_AUTH_SUCCESS';
  static GMAIL_AUTH_UNSUCCESS = 'GMAIL_AUTH_UNSUCESS';
  static GMAIL_AUTH_FAIL = 'GMAIL_AUTH_FAIL';

  static FORGOT_PASSWORD = 'FORGOT_PASSWORD';
  static FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
  static FORGOT_PASSWORD_FAIL = 'FORGOT_PASSWORD_FAIL';

  static UPDATE_PASSWORD = 'UPDATE_PASSWORD';
  static UPDATE_PASSWORD_SUCCESS = 'UPDATE_PASSWORD_SUCCESS';
  static UPDATE_PASSWORD_FAIL = 'UPDATE_PASSWORD_FAIL';

  static LOGOUT = 'LOGIN_OUT';
  static LOGOUT_SUCCESS = 'LOGIN_OUT_SUCCESS';

  static SIGNUP = 'SIGNUP';
  static SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
  static SIGNUP_FAIL = 'SIGNUP_FAIL';

  static UPDATE_USER = 'UPDATE_USER';
  static UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
  static UPDATE_USERDATA_SUCCESS = 'UPDATE_USERDATA_SUCCESS';
  static UPDATE_USER_UNSUCCESS = 'UPDATE_USER_UNSUCCESS';
  static UPDATE_USER_FAIL = 'UPDATE_USER_FAIL';

  /**
|--------------------------------------------------
| Updated Profile Data Action
|--------------------------------------------------
*/

static UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE'
static UPDATE_USER_PROFILE_SUCCESS='UPDATE_USER_PROFILE_SUCCESS'
static UPDATE_USERDATA_PROFILE_SUCCESS='UPDATE_USERDATA_PROFILE_SUCCESS'
static UPDATE_USER_PROFILE_UNSUCCESS= 'UPDATE_USER_PROFILE_UNSUCCESS'
static UPDATE_USER_PROFILE_FAIL = 'UPDATE_USER_PROFILE_FAIL'


 /**
|--------------------------------------------------
| Payment Method  Action
|--------------------------------------------------
*/

static PAYMENT_METHOD = 'PAYMENT_METHOD'
static PAYMENT_METHOD_SUCCESS = 'PAYMENT_METHOD_SUCCESS'
static PAYMENT_METHOD_FAIL = 'PAYMENT_METHOD_FAIL'

static ADD_PAYMENT_METHOD = 'ADD_PAYMENT_METHOD'
static ADD_PAYMENT_METHOD_SUCCESS = 'ADD_PAYMENT_METHOD_SUCCESS'
static ADD_PAYMENT_METHOD_FAIL = 'ADD_PAYMENT_METHOD_FAIL'


static DELETE_PAYMENT_METHOD = 'DELETE_PAYMENT_METHOD'
static DELETE_PAYMENT_METHOD_SUCCESS = 'DELETE_PAYMENT_METHOD_SUCCESS'
static DELETE_PAYMENT_METHOD_FAIL = 'DELETE_PAYMENT_METHOD_FAIL'


/**
|--------------------------------------------------
| Hire SomeOne   Action
|--------------------------------------------------
*/

static HIRE_SOME_ONE='HIRE_SOME_ONE'
static HIRE_SOME_ONE_SUCCESS='HIRE_SOME_ONE_SUCCESS'
static HIRE_SOME_ONE_FAILD='HIRE_SOME_ONE_FAILD'

static HIRE_NOW='HIRE_NOW'
static HIRE_NOW_SUCCESS='HIRE_NOW_SUCCESS'
static HIRE_NOW_FAILD='HIRE_NOW_FAILD'

static HIRE_PERSON_DATA='HIRE_PERSON_DATA'
static HIRE_PERSON_DATA_SUCCESS='HIRE_PERSON_DATA_SUCCESS'
static HIRE_PERSON_DATA_FAILD='HIRE_PERSON_DATA_FAILD'

static SEND_MESSAGE='SEND_MESSAGE'
static SEND_MESSAGE_SUCCESS='SEND_MESSAGE_SUCCESS'
static SEND_MESSAGE_FAILD='SEND_MESSAGE_FAILD'

static GET_MESSAGE='GET_MESSAGE'
static GET_MESSAGE_SUCCESS='GET_MESSAGE_SUCCESS'
static GET_MESSAGE_FAILD='GET_MESSAGE_FAILD'




/**
|--------------------------------------------------
| All Contacts of Security   Action
|--------------------------------------------------
*/

static GET_ALL_CONTACTS='GET_ALL_CONTACTS'
static GET_ALL_CONTACTS_SUCCESS='GET_ALL_CONTACTS_SUCCESS'
static GET_ALL_CONTACTS_FAILD='GET_ALL_CONTACTS_FAILD'



/**
|--------------------------------------------------
| Add Freinds Contacts for Send Notification
|--------------------------------------------------
*/

static ADD_FRIEND_CONTACTS='ADD_FRIEND_CONTACTS'
static ADD_FRIEND_CONTACTS_SUCCESS='ADD_FRIEND_CONTACTS_SUCCESS'
static ADD_FRIEND_CONTACTS_FAILD='ADD_FRIEND_CONTACTS_FAILD'

}
