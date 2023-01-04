export const loginValidator = (loginForm: { email: string; password: string }) => {
  const { email, password } = loginForm;
  if (email === '' || password === '') {
    return {
      isValid: false,
      message: ERROR_MESSAGES.EMPTY_FORM,
    };
  }
  if (!email.match(emailRegExp)) {
    return {
      isValid: false,
      message: ERROR_MESSAGES.INVALID_EMAIL,
    };
  }
  if (password.length < 8) {
    return {
      isValid: false,
      message: ERROR_MESSAGES.INVALID_PASSWORD,
    };
  }
  return {
    isValid: true,
    message: '',
  };
};

const emailRegExp = new RegExp('^[a-zA-Z0-9+-_.]+@{1}[a-zA-Z0-9]+[.]{1}[a-zA-Z0-9-.]+$', 'i');

const ERROR_MESSAGES = {
  EMPTY_FORM: '이메일 / 패스워드 값이 비어있습니다',
  INVALID_EMAIL: '이메일 형식에 맞게 입력해주세요',
  INVALID_PASSWORD: '패스워드 길이는 8 이상이어야 합니다',
  USER_NOT_FOUND: '로그인에 실패했습니다',
  EXIST_USER: '이미 존재하는 유저입니다',
};

export {};
