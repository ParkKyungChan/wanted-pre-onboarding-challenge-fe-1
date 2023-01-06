export const RoutePath = {
  ROOT: '/',
  SIGNUP: '/auth/signup',
  LOGIN: '/auth/login',
};

export const LocalStorageIndex = {
  TOKEN: 'token',
  USERNAME: 'user_name',
  SELECTED_TODO: 'todo',
};

export const ButtonContents = {
  LOGIN: '로그인',
  SIGNUP: '회원가입',
};

export const API_URL = {
  LOGIN: '/users/login',
  SIGNUP: '/users/create',
  TODO: '/todos',
};

export const API_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const TodoInputFormMode = {
  CREATE: 'create',
  MODIFY: 'modify',
};

export const TodoListColumnTitles: string[] = ['Title', 'Detail'];

export const HOST = 'http://localhost:8080';
