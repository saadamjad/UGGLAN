// import {handleApiErrors} from './api-errors';
import axios from 'axios';
// export const API_URL = 'http://192.168.1.107:5000';
export const API_URL = 'http://192.168.18.69:5000';

// function processRequest(request) {
//   return request
//     .then((json) => {
//       if (!json.ok) throw json._bodyInit;
//       else return json();
//     })
//     .catch((error) => {
//       throw error;
//     });
// }

// export function get(path, token, check) {
//   const API_REQ_URL = API_URL + path;
//   console.log(API_REQ_URL, {check});

//   let request;
//   try {
//     check !== 'no'
//       ? (request = fetch(API_REQ_URL, {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }))
//       : (request = fetch(API_REQ_URL, {
//           method: 'GET',
//         }));
//   } catch (error) {
//     throw error;
//   }
//   return request;
// }

// export function post(path, obj, token) {
//   const API_REQ_URL = API_URL + path;
//   let request;
//   try {
//     request = fetch(API_REQ_URL, {
//       method: 'POST',
//       headers: token
//         ? {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         }
//         : {
//           'Content-Type': 'application/json',
//         },
//       body: JSON.stringify(obj),
//     });
//   } catch (error) {
//     throw error;
//   }
//   return request;
// }

// export function put(path, obj, id, token) {
//   const API_REQ_URL = `${API_URL}/${path}/${id}`;
//   console.log(API_REQ_URL);
//   let request;
//   try {
//     request = fetch(API_REQ_URL, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(obj),
//     });
//   } catch (error) {
//     throw error;
//   }
//   return request;
// }

export function login(path, obj) {
  const API_REQ_URL = `${API_URL}/api/users/${path}`;
  // console.log(API_REQ_URL, ...obj);
  try {
    return axios.post(API_REQ_URL, obj);
  } catch (error) {
    console.log('throw chal gya', error);
    throw error;
  }
}

export function signup(path, obj) {
  const API_REQ_URL = `${API_URL}/api/users/${path}`;
  // console.log(API_REQ_URL, ...obj);
  try {
    return axios.post(API_REQ_URL, obj);
  } catch (error) {
    console.log('throw chal gya', error);
    throw error;
  }
}
