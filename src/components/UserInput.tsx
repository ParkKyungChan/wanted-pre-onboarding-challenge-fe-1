import React from 'react';
import styled from 'styled-components';

interface UserInputProps {
  value?: string;
  label: string;
  color: string;
  type: string;
  onChangeHandler: React.ChangeEventHandler;
}

const UserInput = ({ value, label, color, type, onChangeHandler }: UserInputProps) => {
  return (
    <UserInputLabel color={color}>
      {label}
      <input value={value} type={type} onChange={onChangeHandler} />
    </UserInputLabel>
  );
};

export default UserInput;

const UserInputLabel = styled.label<{
  color: string;
}>`
  width: 20rem;
  height: 2rem;
  line-height: 2rem;
  margin: 1.5rem auto;
  color: ${(props) => props.color};
  font-family: 'Work Sans', sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  & input {
    width: 15rem;
    border-radius: 0.5rem;
  }
`;
