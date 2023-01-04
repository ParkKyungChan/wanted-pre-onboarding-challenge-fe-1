import React from 'react';
import styled from 'styled-components';

interface UserInputProps {
  label: string;
  type: string;
}

const UserInput = ({ label, type }: UserInputProps) => {
  return (
    <UserInputLabel>
      {label}
      <input type={type} />
    </UserInputLabel>
  );
};

export default UserInput;

const UserInputLabel = styled.label`
  width: 19rem;
  height: 2rem;
  line-height: 2rem;
  margin: 1.5rem auto;
  color: var(--color-main);
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
