import { HOST, API_URL, API_METHODS, LocalStorageIndex } from '../constants';

const HEDERS = (userToken: string) => {
  return new Headers({
    Authorization: userToken,
    'Content-Type': 'application/json',
  });
};

const HTTPTodoRequests = (method: string, body: any, url: string, id: string) => {
  const userToken = localStorage.getItem(LocalStorageIndex.TOKEN);
  if (!userToken) throw new Error('로그인이 해제되었습니다.');
  const userTodos = fetch(`${HOST}${url}/${id}`, {
    method: method,
    headers: HEDERS(userToken),
    body: body,
  }).then((res) => {
    return res.json();
  });
  return userTodos;
};

export const getTodosRequest = (): Promise<TodoItems[]> => {
  const response = HTTPTodoRequests(API_METHODS.GET, null, API_URL.GET_TODO, '');
  const userTodos = response
    .then((data: APIResponse<TodoItems[]>) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
      return [];
    });
  return userTodos;
};

export const createTodosRequest = (title: string, detail: string): Promise<TodoItems | null> => {
  const createTodoBody = {
    title: title,
    content: detail,
  };
  const response = HTTPTodoRequests(API_METHODS.POST, JSON.stringify(createTodoBody), API_URL.CREATE_TODO, '');
  const userTodos = response
    .then((data: APIResponse<TodoItems>) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
  return userTodos;
};

export const modifyTodosRequest = (title: string, detail: string, id: string): Promise<TodoItems | null> => {
  const createTodoBody = {
    title: title,
    content: detail,
  };
  const response = HTTPTodoRequests(API_METHODS.PUT, JSON.stringify(createTodoBody), API_URL.MODIFY_TODO, id);
  const userTodos = response
    .then((data: APIResponse<TodoItems>) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
  return userTodos;
};

export const getTodoRequest = (id: string): Promise<TodoItems | null> => {
  const response = HTTPTodoRequests(API_METHODS.GET, null, API_URL.MODIFY_TODO, id);
  const userTodos = response
    .then((data: APIResponse<TodoItems>) => {
      return data.data;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
  return userTodos;
};
