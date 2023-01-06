import React from 'react';
import styled from 'styled-components';
import { ColoredButton } from '../common/GlobalStyle';

interface TodoItemProps {
  title: string;
  id: string;
  content: string;
  isSelected: boolean;
  modifyButtonHandler: React.MouseEventHandler;
  itemClickHandler: React.Dispatch<TodoItems>;
  deleteButtonHandler: React.MouseEventHandler;
}

const TodoItem = ({ title, id, content, isSelected, modifyButtonHandler, itemClickHandler, deleteButtonHandler }: TodoItemProps) => {
  return (
    <TodoItemContainer onClick={() => itemClickHandler({ id: id, title: title, content: content })}>
      <span>{title}</span>
      {isSelected && (
        <>
          <ColoredButton width="2.5srem" height="1rem" color="var(--color-main)" onClick={modifyButtonHandler}>
            수정
          </ColoredButton>
          <ColoredButton width="2.5rem" height="1rem" color="var(--color-main)" onClick={deleteButtonHandler}>
            삭제
          </ColoredButton>
        </>
      )}
    </TodoItemContainer>
  );
};

export default TodoItem;

const TodoItemContainer = styled.div`
  width: 14rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  margin: 0.25rem auto;
  display: flex;
  align-items: center;
  gap: 0.24rem;
  border-radius: 1rem;
  background: rgba(0, 37, 49, 0.8);
  color: var(--color-main);
  font-family: 'Noto Sans KR', sans-serif;
  cursor: pointer;
  & span {
    width: 8rem;
  }
`;
