// import {handleApiErrors} from './api-errors';
import axios from 'axios';
// export const API_URL = 'http://192.168.18.96:4500';
// export const API_URL = 'http://localhost:5000';
export const API_URL = 'https://ugglan-app-security.herokuapp.com';


export function put(path, obj, id, token) {
  const API_REQ_URL = id
    ? `${API_URL}/api/${path}/${id}`
    : `${API_URL}/api/${path}`;
  console.log(API_REQ_URL);
  let request;
  try {
    request = fetch(API_REQ_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(obj),
    });
  } catch (error) {
    throw error;
  }
  return request;
}

export function get(path, token, check) {
  const API_REQ_URL = `${API_URL}/api/${path}`;
  console.log(API_REQ_URL);

  let request;
  try {
    request = axios(API_REQ_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw error;
  }
  return request;
}

export function Otp(path, obj) {
  const API_REQ_URL = `${API_URL}/api/users/${path}`;
  console.log('api url', API_REQ_URL, obj);
  try {
    return axios.post(API_REQ_URL, obj);
  } catch (error) {
    console.log('throw chal gya', error);
    throw error;
  }
}

export function login(path, obj) {
  const API_REQ_URL = `${API_URL}/api/users/${path}`;
  console.log('api url', API_REQ_URL);
  try {
    return axios.post(API_REQ_URL, obj);
  } catch (error) {
    console.log('throw chal gya', error);
    throw error;
  }
}

export function signup(path, data) {
  console.log('DATAAAAAA', data);
  const API_REQ_URL = `${API_URL}/api/users/${path}`;
  console.log(API_REQ_URL);
  try {
    return axios.post(API_REQ_URL, data);
  } catch (error) {
    console.log('throw chal gya', error);
    throw error;
  }
}

export function post(path, obj, token) {
  // console.log('hit api', path, obj, token);
  const API_REQ_URL = `${API_URL}/api/${path}`;
  console.log('api url', API_REQ_URL);
  try {
    return axios.post(API_REQ_URL, obj, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.log('error', error);
    throw error;
  }
}

export function Delete(path, id, token) {
  const API_REQ_URL = `${API_URL}/api/${path}/${id}`;
  console.log(API_REQ_URL);

  let request;
  try {
    request = axios.delete(API_REQ_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  } catch (error) {
    throw error;
  }
  return request;
}
