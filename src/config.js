export const BASE_URL = 'http://54.180.140.106:8000';
export const LOGIN_URL = 'http://10.58.6.236:8000';

export const api = {
  allProducts: BASE_URL + '/skin/products',
  subCategory: BASE_URL + '/categories',
  login: LOGIN_URL + '/users/emailvalid',
  signIn: LOGIN_URL + '/users/login',
  signUp: LOGIN_URL + '/users/signup',
};
