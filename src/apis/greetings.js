export const API_MSG_URL = 'http://127.0.0.1:3000/api/v1/greetings';

export const getAny = () => fetch(API_MSG_URL)
  .then(res => res.json())
  .then(greeting => greeting)
  .catch(() => '');
