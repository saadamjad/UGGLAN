/** @format */

const inputplaceholderColorLight = '#b8b8b8';
const inputplaceholderColorDark = '#868686';
const commonFontColorBlack = '#0a0a0a';
const commonFontColorWhite = '#ffffff';
const gradient = '#e96c35';
const transparentBackground = 'transparent';

const Theme = {
  dark: {
    CommonColors: {
      fontColor: commonFontColorWhite,
    },

    signupScreen: {
      inputPlaceHolderColor: inputplaceholderColorDark,
      signupTextcolor: commonFontColorWhite,
      inputTextColor: commonFontColorWhite,
    },
    loginScreen: {
      inputPlaceHolderColor: inputplaceholderColorDark,
      loginTextcolor: commonFontColorWhite,
      inputTextColor: commonFontColorWhite,
    },
  },
  light: {
    CommonColors: {
      fontColor: commonFontColorBlack,
    },

    signupScreen: {
      inputPlaceHolderColor: inputplaceholderColorLight,
      signupTextcolor: '#f34845',
      inputTextColor: commonFontColorBlack,
    },
    signupScreen: {
      inputPlaceHolderColor: inputplaceholderColorLight,
      loginTextcolor: commonFontColorBlack,
      inputTextColor: commonFontColorBlack,
    },
  },
};
export default { Theme, gradient };
