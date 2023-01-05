import React from 'react';

import styled from 'styled-components';
import UserInput from './UserInput';
import { ColoredButton } from '../common/GlobalStyle';

interface TodoCreateFormProps {
  todoTitle: string;
  todoDetail: string;
  todoTitleChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  todoDetailChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
  submitButtonClickHandler: React.MouseEventHandler<HTMLButtonElement>;
}

const TodoCreateForm = ({ todoTitle, todoDetail, todoTitleChangeHandler, todoDetailChangeHandler, submitButtonClickHandler }: TodoCreateFormProps) => {
  return (
    <TodoCreateFormContainer>
      <UserInput value={todoTitle} label={'Title'} color={'black'} type="text" onChangeHandler={todoTitleChangeHandler} />
      <UserInput value={todoDetail} label={'Detail'} color={'black'} type="text" onChangeHandler={todoDetailChangeHandler} />
      <ColoredButton onClick={submitButtonClickHandler} width={'10rem'} height={'2rem'} color={'white'}>
        Submit!
      </ColoredButton>
    </TodoCreateFormContainer>
  );
};

export default TodoCreateForm;

const TodoCreateFormContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
