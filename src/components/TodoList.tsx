import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

interface TodoListProps {
  todoList: TodoItems[];
  selectedTodo: string | null;
  setSelectedTodo: React.Dispatch<string>;
  modifyButtonHandler: React.MouseEventHandler;
}

const TodoList = ({ todoList, selectedTodo, setSelectedTodo, modifyButtonHandler }: TodoListProps) => {
  return (
    <TodoListContainer>
      {todoList.map(({ title, id, content }) => {
        return <TodoItem key={id} title={title} id={id} content={content} isSelected={selectedTodo !== null && selectedTodo === id} modifyButtonHandler={modifyButtonHandler} itemClickHandler={setSelectedTodo} />;
      })}
    </TodoListContainer>
  );
};

export default TodoList;

const TodoListContainer = styled.div`
  width: 15rem;
  height: 18rem;
  display: flex;
  overflow-x: hidden;
  overflow-y: auto;
  flex-direction: column;
`;
