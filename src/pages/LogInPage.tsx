import React from 'react';
import styled from 'styled-components';
import UserInput from '../components/UserInput';
const LogInPage = () => {
  return (
    <>
      <LogInFormContainer>
        <LogInFormTitle>Login</LogInFormTitle>
        <InputList>
          <UserInput label="ID" type="text" />
          <UserInput label="PW" type="password" />
        </InputList>
      </LogInFormContainer>
      ;
    </>
  );
};

export default LogInPage;

const LogInFormContainer = styled.div`
  width: 30rem;
  height: 20rem;
  margin: 12rem auto;
  background: transparent;
  border: 1px solid var(--color-main);
  border-radius: 2rem;
`;

const LogInFormTitle = styled.div`
  width: 8rem;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  font-family: 'Work sans', sans-serif;
  font-size: 1.25rem;
  font-weight: 600;
  background: var(--color-main);
  border-radius: 1rem;
  transform: translate(0, -1.5rem);
  margin: auto;
`;

const InputList = styled.div`
  display: flex;
  flex-direction: column;
`;
