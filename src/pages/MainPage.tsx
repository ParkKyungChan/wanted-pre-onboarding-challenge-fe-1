import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import TodoList from '../components/TodoList';
import { createTodosRequest, getTodosRequest, modifyTodosRequest, getTodoRequest } from '../API/todo';
import Modal from '../components/Modal';
import { TodoListColumnTitles, TodoInputFormMode } from '../constants';
import TodoCreateForm from '../components/TodoCreateForm';

const MainPage = () => {
  const [userTodos, setUserTodos] = useState<TodoItems[]>([]);
  const [isTodoCreateModalOpen, setIsTodoCreateModalOpen] = useState(false);
  const [todoFormMode, setTodoFormMode] = useState(TodoInputFormMode.CREATE);
  const [todoTitle, onTodoTitleChange, setTodoTitle] = useInput();
  const [todoDetail, onTodoDetailChange, setTodoDetail] = useInput();
  const [selectedTodo, setSelectedTodo] = useState<string | null>(null);

  const getUserTodos = async () => {
    const todos = await getTodosRequest();
    setUserTodos(todos);
  };

  const refreshTodoinput = () => {
    setTodoTitle('');
    setTodoDetail('');
  };

  const handleTodoSubmitButtonClick = async () => {
    if (todoFormMode === TodoInputFormMode.CREATE) {
      const response = await createTodosRequest(todoTitle, todoDetail);
      if (response) alert('할일이 정상적으로 추가되었습니다');
      else alert('할일 추가에 실패하였습니다.');
    } else if (todoFormMode === TodoInputFormMode.MODIFY) {
      if (!selectedTodo) return;
      const response = await modifyTodosRequest(todoTitle, todoDetail, selectedTodo);
      if (response) alert('할일이 정상적으로 수정되었습니다');
      else alert('할일 수정에 실패하였습니다.');
    }
    refreshTodoinput();
    getUserTodos();
    setIsTodoCreateModalOpen(false);
  };

  const handleTodoInputFormOpen = async (mode: string) => {
    if (mode === TodoInputFormMode.MODIFY) {
      if (!selectedTodo) return;
      const response = await getTodoRequest(selectedTodo);
      if (!response) return;
      const { title, content } = response;
      setTodoTitle(title);
      setTodoDetail(content);
    }
    setTodoFormMode(mode);
    setIsTodoCreateModalOpen(true);
  };

  useEffect(() => {
    getUserTodos();
  }, []);

  return (
    <>
      <MainContainer>
        <MainTitle>
          {TodoListColumnTitles.map((column) => {
            return <span key={column}>{column}</span>;
          })}
        </MainTitle>
        <TodosContainer>
          <TodoList todoList={userTodos} selectedTodo={selectedTodo} setSelectedTodo={setSelectedTodo} modifyButtonHandler={() => handleTodoInputFormOpen(TodoInputFormMode.MODIFY)} />
        </TodosContainer>
        <CreateTodoButton onClickHandler={() => handleTodoInputFormOpen(TodoInputFormMode.CREATE)} />
      </MainContainer>
      <Modal
        element={<TodoCreateForm todoTitle={todoTitle} todoDetail={todoDetail} todoTitleChangeHandler={onTodoTitleChange} todoDetailChangeHandler={onTodoDetailChange} submitButtonClickHandler={handleTodoSubmitButtonClick} />}
        width={'30rem'}
        height={'15rem'}
        color={'var(--color-main)'}
        isOpen={isTodoCreateModalOpen}
        setModalState={setIsTodoCreateModalOpen}
      />
    </>
  );
};

export default MainPage;

const CreateTodoButton = ({ onClickHandler }: { onClickHandler: React.Dispatch<boolean> }) => {
  const handleCreateButtonClick = () => {
    onClickHandler(true);
  };
  return <CreateButton onClick={handleCreateButtonClick}>+</CreateButton>;
};
const MainContainer = styled.div`
  width: 30rem;
  height: 25rem;
  position: relative;
  margin: 15rem auto;
  border: 1px solid var(--color-main);
`;
const TodosContainer = styled.div`
  width: 100%;
  display: flex;
`;
const MainTitle = styled.div`
  width: 100%;
  height: 2rem;
  line-height: 2rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-around;
  background: rgba(0, 37, 49, 0.8);
  border-radius: 1rem;
  font-family: 'Noto Sans KR';
  font-size: 1.25rem;
  color: var(--color-main);
`;

const CreateButton = styled.div`
  width: 3rem;
  height: 3rem;
  line-height: 2.5rem;
  position: absolute;
  padding: 0;
  text-align: center;
  background: rgb(0, 37, 49);
  border-radius: 2rem;
  color: var(--color-main);
  font-size: 3rem;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;
`;
