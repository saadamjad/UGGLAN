import {Platform, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  // =========SafeAreaViewOfPaymentVisaMain=====
  SafeAreaViewOfPaymentVisaMain: {
    backgroundColor: '#000000',
    flex: 1,
  },
  // ======PaymentVisaModelMainView=====
  PaymentVisaModelMainView: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 50,
  },
  PaymentVisaModelMainView2: {
    backgroundColor: '#3E3E3E',
    paddingVertical: 10,
    borderRadius: 3,
  },
  PaymentVisaModelMainView3: {
    width: '90%',
    alignSelf: 'center',
  },

  // =======NotifyTextView======
  NotifyTextView: {
    alignItems: 'center',
    marginTop: 20,
  },
  NotifyText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // ======ConfirmTextView=====
  ConfirmTextView: {
    alignItems: 'center',
    marginVertical: 15,
  },
  ConfirmText: {
    color: '#D4D4D4',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 20,
    letterSpacing: 1,
  },
  // =======LinearGradientOfButton======
  LinearGradientOfButton: {
    alignSelf: 'center',
    borderRadius: 3,
    marginBottom: 10,
  },
});
export default styles;
