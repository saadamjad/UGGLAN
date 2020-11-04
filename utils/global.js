import axios from 'axios';
import Constants from './constant';

class Global {
  static getRequest(url) {
    return new Promise((resolve) => {
      axios
        .get(Constants.BASE_URL + url)
        .then((res) => {
          console.log(res, 'res');
          resolve(res);
        })
        .catch((err) => {
          console.log(err, 'err');
          resolve(err);
        });
    });
  }

  static postRequest(url, data) {
    return new Promise((resolve) => {
      axios.post(Constants.BASE_URL + url, data).then((res) => {
        console.log(res, 'res');
        resolve(res);
      });
    });
  }
  static saveData(key, data) {
    localStorage.setItem(key, data);
    console.log('KEY', key);
    console.log('DATA', data);
  }

  static getData(key) {
    return new Promise((resolve) => {
      const res = localStorage.getItem(key);

      resolve(res);
    });
  }
  static removeData(key) {
    localStorage.removeItem(key);
    console.log('DELTED');
  }
}
export default Global;
