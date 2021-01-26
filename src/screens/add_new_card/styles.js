import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    width: '90%',
    marginTop: 50,
    alignSelf: 'center',
  },

  /* ==========Name On Card========== */

  NameView: {
    borderBottomWidth: 1,
    borderColor: '#C0C0C0',
    width: '100%',
    marginVertical: 10,
  },
  NameText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  NameTextInput: {
    color: 'white',
    fontSize: 13,
    height: 40,
  },

  /* ========Card no:========== */

  rowView: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#C0C0C0',
  },
  cardTypeImageView: {
    width: '25%',
    // height: 90,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginRight: 5,
    top:10
  },
  cardTypeImageStyle: {
    // height: 20.94,
    // width: 18.85,
    width: 29,
    height: 18,
    margin: 2,
  },
  CardView: {
    width: '70%',
    height:60,
    marginVertical: 10,
    // flexDirection:'row'
  },
  CardText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  CardTextInput: {
    color: 'white',
    fontSize: 13,
    height: 40,
  },

  /* ======Expiry Date & CVV Row====== */

  RowView: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
  },

  DateView: {
    borderBottomWidth: 1,
    borderColor: '#C0C0C0',
    width: '55%',
  },

  DateText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  SelectDateText: {
    color: '#696969',
    fontSize: 13,
    paddingTop:15
  },

  DateTextInput: {
    color: 'white',
    fontSize: 13,
    height: 40,
  },
  /* ====+==== */
  CVVView: {
    borderBottomWidth: 1,
    borderColor: '#C0C0C0',
    width: '35%',
    marginHorizontal: 28,
  },
  CVVText: {
    color: '#FFFFFF',
    fontSize: 15,
  },
  CVVTextInput: {
    color: 'white',
    fontSize: 13,
  },

  /* ==========Buttons========== */

  SaveLG: {
    width: 280,
    height: 37,
    alignSelf: 'center',
    marginVertical: 10,
    marginTop: 50,
    borderRadius: 3,
  },
  CancelView: {
    width: 280,
    height: 50,
    alignSelf: 'center',
    borderRadius: 3,
  },
});
export default styles;
