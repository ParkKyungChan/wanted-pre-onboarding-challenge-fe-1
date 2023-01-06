import { HOST, API_URL, API_METHODS } from '../constants';

export const postLoginRequest = (email: string, password: string) => {
  const loginRequestBody = {
    email: email,
    password: password,
  };
  const userToekn = fetch(`${HOST}${API_URL.LOGIN}`, {
    method: API_METHODS.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(loginRequestBody),
  })
    .then((res) => {
      return res.json();
    })
    .then((data: AuthResponse) => {
      const { message, token, details } = data;
      if (!token) alert(details);
      else alert(message);
      return token;
    })
    .catch((err) => console.log(err));
  return userToekn;
};

export const postSignUpRequest = (email: string, password: string) => {
  const signupRequestBody = {
    email: email,
    password: password,
  };
  const userToekn = fetch(`${HOST}${API_URL.SIGNUP}`, {
    method: API_METHODS.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(signupRequestBody),
  })
    .then((res) => {
      return res.json();
    })
    .then((data: AuthResponse) => {
      const { message, token, details } = data;
      if (!token) alert(details);
      else alert(message);
      return token;
    })
    .catch((err) => console.log(err));
  return userToekn;
};
