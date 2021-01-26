import {Platform, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  //  =======SendNotificationModelMainView=====
  SendNotificationModelMainView: {
    width: '90%',
    alignSelf: 'center',
    marginVertical: 50,
  },
  SendNotificationModelMainView2: {
    backgroundColor: '#3E3E3E',
    paddingVertical: 10,
    borderRadius: 3,
  },
  SendNotificationModelMainView3: {
    width: '90%',
    alignSelf: 'center',
  },

  // =====NotifyTextView====
  NotifyTextView: {
    alignItems: 'center',
    marginTop: 20,
  },
  NotifyText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // =====CheckCirclIconView=====
  CheckCirclIconView: {
    alignItems: 'center',
    marginVertical: 10,
  },
  CheckCirclIcon: {
    color: '#FFFFFF',
  },

  // ======NotifyExtraTextView======
  NotifyExtraTextView: {
    alignItems: 'center',
    marginVertical: 15,
  },
  NotifyExtraText: {
    color: '#D4D4D4',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 20,
    letterSpacing: 1,
  },
});
export default styles;
