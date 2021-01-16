import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  ImageBackgroundHireSomeMain: {
    height: '100%',
    width: '100%',
  },
  SafeAreaViewHireSome: {
    flex: 1,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  ParrentBoxView: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  CardsView: {
    flexDirection: 'row',
    width: '100%',
    marginVertical: 10,
    borderBottomWidth: 0.5,
    borderColor: '#707070',
  },
  CardImageViewMain: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  ProfileImageView: {
    borderWidth: 0.5,
    borderColor: '#F6931B',
    borderRadius: 100,
    overflow: 'hidden',
  },
  ProfileImage: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  CardNameAddressStarsView: {
    flex: 1,
    marginLeft: 0,
  },
  RowViewCardNameAddressStars: {
    flexDirection: 'row',
  },
  TextOfUserName: {
    fontSize: 15,
    color: '#FFFFFF',
  },
  TextOfPrice: {
    marginLeft: 5,
    fontSize: 12,
    padding: 2,
  },
  CardAdressView: {
    marginVertical: 5,
  },
  TextOfAdress: {
    fontSize: 13,
    color: '#F6931B',
  },
  CardStarsView: {
    marginVertical: 5,
  },
  HireNowButtonView: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LinearGradientHireNowButton: {
    borderRadius: 3,
  },
});

export default styles;
