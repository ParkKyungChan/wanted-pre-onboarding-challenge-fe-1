import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface TodoContentsProps {
  currentTodo: TodoItems;
}

const TodoContents = ({ currentTodo }: TodoContentsProps) => {
  return (
    <TodoContnetsContainer>
      <div>Title: {currentTodo.title}</div>
      <div>Content: {currentTodo.content}</div>
    </TodoContnetsContainer>
  );
};

export default TodoContents;

const TodoContnetsContainer = styled.div`
  width: 12.5rem;
  height: 100%;
  background: var(--color-main);
  padding: 1rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
