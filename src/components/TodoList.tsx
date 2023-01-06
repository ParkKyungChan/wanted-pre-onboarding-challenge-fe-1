import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

interface TodoListProps {
  todoList: TodoItems[];
  selectedTodo: TodoItems | null;
  setSelectedTodo: React.Dispatch<TodoItems>;
  modifyButtonHandler: React.MouseEventHandler;
  deleteButtonHandler: React.MouseEventHandler;
}

const TodoList = ({ todoList, selectedTodo, setSelectedTodo, modifyButtonHandler, deleteButtonHandler }: TodoListProps) => {
  return (
    <TodoListContainer>
      {todoList.map(({ title, id, content }) => {
        return (
          <TodoItem
            key={id}
            title={title}
            id={id}
            content={content}
            isSelected={selectedTodo !== null && selectedTodo.id === id}
            modifyButtonHandler={modifyButtonHandler}
            itemClickHandler={setSelectedTodo}
            deleteButtonHandler={deleteButtonHandler}
          />
        );
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
