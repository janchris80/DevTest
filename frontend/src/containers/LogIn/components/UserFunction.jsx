import axios from 'axios';

export const register = newUser => axios
  .post('api/register', newUser, {
    headers: { 'Content-Type': 'application/json' },
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

export const login = user => axios
  .post('api/login', {
    email: user.email,
    password: user.password,
  }, {
    headers: { 'Content-Type': 'application/json' },
  })
  .then((result) => {
    localStorage.setItem('userToken', result.data.token);
    return result;
  })
  .catch((error) => {
    console.error(error);
  });

export const profile = () => axios
  .get('api/profile', {
    headers: { Authorization: `Bearer ${localStorage.getItem('userToken')}` },
  })
  .then((result) => {
    console.log(result);
    return result.data;
  })
  .catch((error) => {
    console.error(error);
  });

export const isLoggedIn = () => !!localStorage.getItem('userToken');

export const logOut = () => localStorage.removeItem('userToken');
